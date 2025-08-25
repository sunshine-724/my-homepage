import { BlogDetail } from "@/types/blog";
import { NextApiRequest, NextApiResponse } from "next";


export default async function handler(req: NextApiRequest,res:NextApiResponse) {
    const id : string = req.body;

    const url = (process.env.AWS_API_GATEWAY_URL as string) + `drafts/${id}`;
    console.log('Sending request to:', url); // この行を追加

    const response = await fetch((process.env.AWS_API_GATEWAY_URL as string) + `drafts/${id}`,{
        method:"GET",
        headers:{
            "Content-Type": "application/json",
            "x-api-key": process.env.AWS_API_GATEWAY_KEY_PROD as string
        }
    });

    if(!response.ok) {
        const errorText = await response.text();
        console.error(`API response was not ok. Status: ${response.status}, Body: ${errorText}`);
        throw new Error(`API returned a non-success status: ${response.status}`);
    }

    const data = await response.json(); // パースする

    const blogDetail : BlogDetail = {
        id : data.id,
        title : data.title,
        date : data.date,
        chips : data.tags || [],
        content : data.content,

    }
    console.log(blogDetail);
    
    res.status(200).json(blogDetail);
}