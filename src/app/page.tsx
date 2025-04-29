"use client"
import { GitHub,X } from "@mui/icons-material";
import { Box, IconButton, Typography } from "@mui/material";
import { useEffect, useState } from "react";

export default function Top() {
  const [totalViews, setTotalViews] = useState<number | null>(null);
  const myIconPath = "/icon/fish.jpg";

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(`/api/fetchAnalycisData`);
      const data = await res.json();

      if (!Array.isArray(data)) {
        console.error("Data is not an array:", data);
        return;
      }
      const total = data.reduce((sum, item) => {
        return sum + Number(item.uniquePageviews || 0);
      }, 0);

      setTotalViews(total);
    }
    fetchData();
  }, []);

  return (
    <>
      <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
        <img src={myIconPath} alt="My Icon" style={{ width: "200px", height: "200px", borderRadius: "50%" }} />
      </Box>
      <Typography variant="h3" textAlign={"center"}>SNS</Typography>
      <Box sx={{ display: "flex", flexDirection:"row", justifyContent: "center",gap: 3}}>
        <IconButton onClick={() => window.open("https://twitter.com/Sunshine4154", "_blank")}>
          <X sx={{ fontSize: 55 , color:"white",background:"black",borderRadius:"50%"}} />
        </IconButton>
        <IconButton onClick={() => window.open("https://github.com/sunshine-724", "_blank")}>
          <GitHub sx={{ fontSize: 60 , color:"black"}} />
        </IconButton>
      </Box>
      <Typography variant="h3" textAlign={"center"}>アクセスカウンター</Typography>
      <Typography variant="h4" textAlign="center">
        {totalViews !== null ? `${totalViews.toLocaleString()} PV` : "読み込み中..."}
      </Typography>
      <Typography variant="h3" textAlign={"center"}>最新のお知らせ</Typography>
      <Typography variant="h4" textAlign={"center"}>工事中</Typography>
      <Typography variant="h3" textAlign={"center"}>最新のブログ</Typography>
      <Typography variant="h4" textAlign={"center"}>工事中</Typography>
    </>
  );
}
