"use client"
import MediaSwiper from "@/app/component/ProjectCard/MediaSwiper"
import { Typography } from "@mui/material";
import { useEffect,useState } from "react";


const files: string[] = ["introduction/picture.png", "introduction/picture2.png", "introduction/picture3.jpg", "introduction/picture4.jpg", "introduction/picture5.png"]

export default function Top() {
  const [totalViews, setTotalViews] = useState<number | null>(null);

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
      <MediaSwiper files={files}></MediaSwiper>
      <Typography variant="h3" textAlign={"center"}>アクセスカウンター</Typography>
      <Typography variant="h4" textAlign="center">
        {totalViews !== null ? `${totalViews.toLocaleString()} PV` : "読み込み中..."}
      </Typography>

      <Typography variant="h3" textAlign={"center"}>最新のお知らせ</Typography>

      <Typography variant="h3" textAlign={"center"}>最新のブログ</Typography>
    </>
  );
}
