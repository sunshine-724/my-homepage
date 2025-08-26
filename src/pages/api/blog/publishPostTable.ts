import { PostTablePayload } from "@/types/payload/postTable";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const payload: PostTablePayload = req.body; // これで自動的にparseしてくれる

    console.log("raw : " + payload);

    const safePayload: PostTablePayload = {
        id: payload.id,
        isPublished: payload.isPublished
    };

    console.log("JSON : " + JSON.stringify(safePayload));

    /* 通信サイズ確認 */
    const jsonString = JSON.stringify(payload);
    const sizeInBytes = new Blob([jsonString]).size;
    const sizeInKB = sizeInBytes / 1024;
    const sizeInMB = sizeInKB / 1024;

    console.log(`Payload size: ${sizeInBytes} bytes`);
    console.log(`Payload size: ${sizeInKB.toFixed(2)} KB`);
    console.log(`Payload size: ${sizeInMB.toFixed(2)} MB`);

    const response = await fetch((process.env.AWS_API_GATEWAY_URL as string) + "posts", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "x-api-key": process.env.AWS_API_GATEWAY_KEY_PROD as string
        },
        body: JSON.stringify(safePayload)
    });

    // HTTPステータスコードをチェックする
    if (!response.ok) {
        const errorText = await response.text();
        console.error(`API response was not ok. Status: ${response.status}, Body: ${errorText}`);
        throw new Error(`API returned a non-success status: ${response.status}`);
    }

    const data = await response.json();
    console.log(data);

    const parsedBody: Body = data;

    res.status(200).json(parsedBody); // 明示的にレスポンスを送信する(return blogDetailと同義)
}