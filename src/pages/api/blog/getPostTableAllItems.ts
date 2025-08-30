import { BlogDetail } from "@/types/blog";
import { Update } from "@mui/icons-material";
import { NextApiRequest, NextApiResponse } from "next";


export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const url = (process.env.AWS_API_GATEWAY_URL as string) + `posts`;
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
    console.log("json Data is " + data.body);
    const bodyAsJson = JSON.parse(data.body);


    const blogList: BlogDetail[] = bodyAsJson.map((blog: any, index: number) => ({
        id: blog.id,
        title: blog.title,
        date: blog.date,
        chips: blog.tags || [],
        content: blog.content,
    }
    ))
    res.status(200).json(blogList);
}