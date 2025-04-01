"use client";
import Header from "../component/layout/header/header"
import Footer from "../component/layout/footer/footer"
import SearchAppBar from "../component/SerachBar/SearchAppBar";
import useFetchNoticeList from "./useFetchNoticeList";
import NoticeList from "./NoticeList";
import theme from "../theme"
import { Box, ThemeProvider, Typography } from "@mui/material";
import { useState } from "react";

export default function Notification() {
  const [searchQuery, setSearchQuery] = useState(""); //検索する文字列

  const notices = useFetchNoticeList(); // そのまま `Notice[]` を取得

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
          marginTop: { xs: "5%", sm: "2%" },
          marginBottom: { xs: "5%", sm: "2%" },
          flexDirection: { xs: "column", sm: "row" }, //columnかrowでjustifyContentとalignItemsの役割が反対になる
          position: "relative",
        }}>
          <Typography
            variant="h2"
            sx={{
              fontSize: { xs: "2.2rem", sm: "2.8rem", md: "3.4rem", lg: "4.0rem" },
              justifyContent: "center",
            }}> {/* mt: 0 にして調整 */}
            お知らせ一覧
          </Typography>
          <SearchAppBar
            onSearch={setSearchQuery}
          />
        </Box>
        <Box>
          <NoticeList notices={notices} />
        </Box>
        <Footer />
      </ThemeProvider>
    </>
  );
}
