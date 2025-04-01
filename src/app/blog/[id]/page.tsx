"use client";

import Footer from "@/app/component/layout/footer/footer";
import Header from "@/app/component/layout/header/header";
import theme from "@/app/theme";
import { ThemeProvider, Typography } from "@mui/material";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

interface BlogData {
  id: string;
  title: string;
  date: string;
  content: string;
}

export default function BlogPost() {
  const params = useParams();
  const id = params ? params.id as string : undefined;
  const [blog, setBlog] = useState<BlogData | null>(null);

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
      <ThemeProvider theme={theme}>
        <Header />
        <Typography variant="h2" sx={{ fontSize: "2.8rem", textAlign: "center", marginTop: "20px" }}>
          {blog.title}
        </Typography>
        <Typography variant="h6" sx={{ fontSize: "1.2rem", textAlign: "center", marginTop: "10px" }}>
          {blog.date}
        </Typography>
        <ReactMarkdown remarkPlugins={[remarkGfm]}>{blog.content}</ReactMarkdown>
        <Footer />
      </ThemeProvider>
    </>
  );
}
