import { BlogDetail } from "@/types/blog";
import { NextApiRequest, NextApiResponse } from "next";


export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const id = req.body;
    console.log("request id: " + id);
    const url = (process.env.AWS_API_GATEWAY_URL as string) + `post/${id}`;
    console.log('Sending request to:', url); // この行を追加

    const response = await fetch(url, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "x-api-key": process.env.AWS_API_GATEWAY_KEY_PROD as string
        }
    });

    if (!response.ok) {
        const errorText = await response.text();
        console.error(`API response was not ok. Status: ${response.status}, Body: ${errorText}`);
        throw new Error(`API returned a non-success status: ${response.status}`);
    }

    const data = await response.json(); // パースする

    // data.bodyが存在するかチェック
    let bodyAsJson;
    if (!data.body) {
        // data自体がブログリストの場合はそのまま使用
        bodyAsJson = data;
    } else {
        bodyAsJson = JSON.parse(data.body);
        console.log("bodyAsJson is:", bodyAsJson);
    }

    const blogDetail: BlogDetail = {
        id: bodyAsJson.id,
        title: bodyAsJson.title,
        date: bodyAsJson.date,
        content: bodyAsJson.content,
        chips: bodyAsJson.tags || [],
    };

    res.status(200).json(blogDetail);
}