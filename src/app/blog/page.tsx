"use client"
import { useEffect, useState } from "react";
import { Box, CardActionArea, ThemeProvider } from "@mui/material";
import ProjectCard from "../component/ProjectCard/ProjectCard"
import Footer from "../component/layout/footer/footer";
import Header from "../component/layout/header/header";
import useFetchBlogList from "../component/getData/json/useFetchBlogList";
import theme from "../theme";
import React from "react";


const BlogPage = () => {
  const jsonBlogList = useFetchBlogList();

  return (
    <>
      <ThemeProvider theme={theme}>
        <Header />
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}>
          {jsonBlogList.map((json, index) => {
            return (
              <React.Fragment key={index}>
                <CardActionArea onClick={() => alert(`clicked: ${json.title}`)}>
                <ProjectCard               //各ブログのタイトル、日付、タグを表示
                  title={json.title}
                  description={json.date}
                  chips={json.chips || []} //nullの場合は空配列を渡す
                />
                </CardActionArea>
              </React.Fragment>
            );
          })}
        </Box>
        <Footer />
      </ThemeProvider>
    </>
  );
};

export default BlogPage;
