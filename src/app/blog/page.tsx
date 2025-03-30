"use client"
import { Box, Button, CardActionArea, ThemeProvider, Typography } from "@mui/material";
import ProjectCard from "../component/ProjectCard/ProjectCard"
import SearchAppBar from "./SearchAppBar";
import Footer from "../component/layout/footer/footer";
import Header from "../component/layout/header/header";
import useFetchBlogList from "./useFetchBlogList";
import theme from "../theme";
import React, { useState } from "react";


const BlogPage = () => {
  const [searchQuery, setSearchQuery] = useState(""); //検索する文字列
  const jsonBlogList = useFetchBlogList(); //ブログリストを取得

  return (
    <>
      <ThemeProvider theme={theme}>
        <Header />
        <Box sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          height: "20%",
          marginTop: {xs:"5%",sm:"2%"},
          flexDirection:  {xs:"column", sm:"row"}, //columnかrowでjustifyContentとalignItemsの役割が反対になる
          position: "relative",
        }}>
          <Typography 
          variant="h2" 
          sx={{
            fontSize:{ xs: "2.2rem", sm: "2.8rem", md: "3.4rem", lg: "4.0rem" },
            justifyContent:"center",
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
                  onClick={() => alert(`Clicked: ${json.title}`)} //クリック処理
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
        <Footer />
      </ThemeProvider >
    </>
  );
};

export default BlogPage;
