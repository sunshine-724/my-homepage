"use client";
import SearchAppBar from "@/app/component/SerachBar/SearchAppBar";
import useFetchNoticeList from "@/hooks/useFetchNoticeList";
import NoticeList from "./NotificationList";
import { Box, Typography } from "@mui/material";
import { useState } from "react";

export default function Notification() {
  // const [searchQuery, setSearchQuery] = useState(""); //検索する文字列
  const notifications = useFetchNoticeList(); // そのまま `Notice[]` を取得

  return (
    <>
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
            fontSize: { xs: "2.2rem", sm: "2.3rem", md: "3.0rem", lg: "4.0rem" },
            justifyContent: "center",
          }}> {/* mt: 0 にして調整 */}
          お知らせ一覧
        </Typography>
        {/* <SearchAppBar
          onSearch={setSearchQuery}
        /> */}
      </Box>
      <Box>
        <NoticeList notifications={notifications} />
      </Box>
    </>
  );
}
