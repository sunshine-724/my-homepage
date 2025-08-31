"use client"

import { BlogDetail } from "@/types/blog";
import { Typography } from "@mui/material";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

export default function BlogDetailPage() {
    const params = useParams();
    const id = params ? decodeURIComponent(params.id as string) : undefined;

    const [blogDetail,setBlogDetail] = useState<BlogDetail | null>(null);

    useEffect(() => {
        const fetchBlogDetail = async () => {
            const response = await fetch(`/api/blog/getPostTableItem`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(id)
            });
            const data = await response.json();
            setBlogDetail(data);
        };

        if (!blogDetail) {
            fetchBlogDetail();
        }
    }, [blogDetail]);

    if (!blogDetail) {
        return <div>Loading...</div>;
    }

    return (
    <>
      <Typography variant="h2" sx={{ fontSize: "2.8rem", textAlign: "center", marginTop: "20px" }}>
          {blogDetail.title}
        </Typography>
        <Typography variant="h6" sx={{ fontSize: "1.2rem", textAlign: "center", marginTop: "10px" }}>
          {blogDetail.date}
        </Typography>
        <ReactMarkdown remarkPlugins={[remarkGfm]}>{blogDetail.content}</ReactMarkdown>
    </>
  );
}