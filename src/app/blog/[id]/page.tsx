"use client";

import {Typography } from "@mui/material";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import {BlogDetail} from "@/types/blog"

export default function BlogPost() {
  const params = useParams();
  const id = params ? params.id as string : undefined;
  const [blog, setBlog] = useState<BlogDetail | null>(null);

  useEffect(() => {
    if (!id) return;

    fetch(`/data/blogs/${id}.json`) // publicフォルダ以下のファイルにアクセス
      .then((res) => res.json())
      .then((data) => setBlog(data))
      .catch((err) => console.error("Error fetching blog:", err));
  }, [id]);

  if (!blog) return <p>Loading...</p>;

  return (
    <>
      <Typography variant="h2" sx={{ fontSize: "2.8rem", textAlign: "center", marginTop: "20px" }}>
          {blog.title}
        </Typography>
        <Typography variant="h6" sx={{ fontSize: "1.2rem", textAlign: "center", marginTop: "10px" }}>
          {blog.date}
        </Typography>
        <ReactMarkdown remarkPlugins={[remarkGfm]}>{blog.content}</ReactMarkdown>
    </>
  );
}
