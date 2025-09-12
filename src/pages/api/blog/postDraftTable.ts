import { BlogDetail } from "@/types/blog"
import { DraftTablePayload } from "@/types/payload/draftTable"
import formidable from "formidable";
import { NextApiRequest, NextApiResponse } from "next";
import fs from 'fs/promises';
import { withJson } from "@/lib/withJson";

// Next.jsのbodyに対する自動パースを無効化(formidable用のパースに対応していないため)
export const config = {
    api: {
        bodyParser: false,
    },
};

interface Body {
    id: string;
}

function confirmDataValue(data: any): void {
    /* 通信サイズ確認 */
    const jsonString = JSON.stringify(data);
    const sizeInBytes = new Blob([jsonString]).size;
    const sizeInKB = sizeInBytes / 1024;
    const sizeInMB = sizeInKB / 1024;

    console.log(`Payload size: ${sizeInBytes} bytes`);
    console.log(`Payload size: ${sizeInKB.toFixed(2)} KB`);
    console.log(`Payload size: ${sizeInMB.toFixed(2)} MB`);
}

async function handler(req: NextApiRequest, res: NextApiResponse) {
    let response: Response;

    if (req.headers['content-type']?.startsWith("application/json")) {
        const body = req.body // req.bodyとするとNext.jsが自動でJSONをパースしてくれる
        console.log(req.body);

        console.log("テキストデータだけを受け取りました");
        const safePayload: DraftTablePayload = {
            title: body.title,
            date: body.date,
            content: body.content,
            tags: body.tags,
            isPublished: body.isPublished
        };
        console.log("JSON : " + JSON.stringify(safePayload));
        confirmDataValue(safePayload);
        response = await fetch((process.env.AWS_API_GATEWAY_URL as string) + "drafts", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "x-api-key": process.env.AWS_API_GATEWAY_KEY_PROD as string
            },
            body: JSON.stringify(safePayload)
        });
        
    } else if (req.headers['content-type']?.startsWith("multipart/form-data")) {
        console.log("テキストデータとファイルデータを受け取りました");

        // formidableでファイルとフィールドを解析
        const form = formidable({
            uploadDir: '/tmp', // 一時的なディレクトリを生成する
            keepExtensions: true,
            maxFileSize: 10 * 1024 * 1024, // 10MB制限
        });
        const [fields, files] = await form.parse(req);
        console.log("Parsed files object from formidable:", JSON.stringify(files, null, 2));

        // フィールドデータを取得
        const title = Array.isArray(fields.title) ? fields.title[0] : fields.title;
        const content = Array.isArray(fields.content) ? fields.content[0] : fields.content;
        const date = Array.isArray(fields.date) ? fields.date[0] : fields.date;

        let tags: string[] = [];
        try {
            const tagsField = Array.isArray(fields.tags) ? fields.tags[0] : fields.tags;
            if (tagsField) {
                tags = JSON.parse(tagsField);
            }
        } catch (error) {
            console.log('No tags');
            tags = []; // デフォルト値
        }

        const nativeFormData = new FormData();

        // テキストフィールドをそのまま追加
        Object.entries(fields).forEach(([key, value]) => {
            if (value) {
                nativeFormData.append(key, value[0]);
            }
        });

        // ファイルを処理
        if (files.attachments) {
            const fileArray = Array.isArray(files.attachments) ? files.attachments : [files.attachments];

            for (const file of fileArray) {
                // 3-1. 一時ファイルをBufferとして非同期に読み込む
                const fileBuffer = await fs.readFile(file.filepath);
                // 3-2. BufferからBlobオブジェクトを生成
                const fileBlob = new Blob([new Uint8Array(fileBuffer)], { type: file.mimetype || 'application/octet-stream' });
                // 3-3. FormDataにファイルを追加（第三引数でファイル名を指定）
                nativeFormData.append('files', fileBlob, file.originalFilename || 'unknown-file');
            }
        }

        // Content-Typeヘッダーはfetchが自動で生成するため、手動での設定は不要
        response = await fetch((process.env.AWS_API_GATEWAY_URL as string) + "drafts", {
            method: "POST",
            headers: {
                "x-api-key": process.env.AWS_API_GATEWAY_KEY_PROD as string,
            },
            body: nativeFormData,
        });

    } else {
        return res.status(400).json({ error: "Unsupported Content-Type" });
    }

    // HTTPステータスコードをチェックする
    if (!response.ok) {
        const errorText = await response.text();
        console.error(`API response was not ok. Status: ${response.status}, Body: ${errorText}`);
        throw new Error(`API returned a non-success status: ${response.status}`);
    }

    const data = await response.json();
    console.log(data);

    const parsedBody: Body = data;

    if (parsedBody.id === undefined) {
        return res.status(400).json({ error: "Invalid response from API" });
    } else {
        res.status(200).json(parsedBody);
    }
}

export default withJson(handler);
