"use client"
import { Box, Button, Typography } from "@mui/material";
import ProjectCard from "../component/ProjectCard/ProjectCard"
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { BlogDetail } from "@/types/blog";

type PostTableApiItem = {
  id: string;
  title: string;
  date: string;
  tags?: string[];
  content: string;
};

const BlogPage = () => {
  const router = useRouter(); //ルーターを取得
  // const [searchQuery, setSearchQuery] = useState(""); //検索する文字列
  // const jsonBlogList = useFetchBlogList(); //ブログリストを取得

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(`api/blog/getPostTableAllItems`);
      const data = (await res.json()) as PostTableApiItem[];
      const mappedData = data.map((blog) => ({
        id: blog.id,
        title: blog.title,
        date: blog.date,
        chips: blog.tags || [],
        content: blog.content,
      }))
      setBlogList(mappedData);
    }

    fetchData();
  }, []);

  const handleClick = (id: string) => {
    const query = encodeURIComponent(id);
    router.push(`/blog/${query}`); //クリックしたブログの詳細ページに遷移
  };

  const [blogList, setBlogList] = useState<BlogDetail[] | null>(null);

  if (blogList === null) {
    return (
      <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
        <Typography variant="h4">ブログを読み込み中です...</Typography>
      </Box>
    );
  }

  return (
    <>
      <Box sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "20%",
        flexDirection: { xs: "column", sm: "row" }, //columnかrowでjustifyContentとalignItemsの役割が反対になる
      }}>
        <Typography
          variant="h2"
          sx={{
            fontSize: { xs: "2.2rem", sm: "2.5rem", md: "3.0rem", lg: "4.0rem" },
            justifyContent: "center",
          }}> {/* mt: 0 にして調整 */}
          ブログ一覧
        </Typography>
      </Box>

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        {blogList.map((json, index) => {
          return (
            <React.Fragment key={index}>
              <Button
                key={index}
                onClick={() => handleClick(json.id)} //クリック処理
                sx={{ textTransform: "none", width: "100%" }}
              >
                <ProjectCard               //各ブログのタイトル、日付、タグを表示
                  title={json.title}
                  description={json.date}
                  chips={json.chips || []}
                >
                </ProjectCard>
              </Button>
            </React.Fragment>
          );
        })}
      </Box>
    </>
  );
};

export default BlogPage;
