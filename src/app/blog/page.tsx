"use client"
import { Box, Button, Typography } from "@mui/material";
import ProjectCard from "../component/ProjectCard/ProjectCard"
import SearchAppBar from "../component/SerachBar/SearchAppBar";
import useFetchBlogList from "./useFetchBlogList";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

const BlogPage = () => {
  const router = useRouter(); //ルーターを取得
  const [searchQuery, setSearchQuery] = useState(""); //検索する文字列
  const jsonBlogList = useFetchBlogList(); //ブログリストを取得

  const handleClick = (id: string) => {
    router.push(`/blog/${id}`); //クリックしたブログの詳細ページに遷移
  };

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
        <SearchAppBar
          onSearch={setSearchQuery}
        />
      </Box>

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        {jsonBlogList.map((json, index) => {
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
