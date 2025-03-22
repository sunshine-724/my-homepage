"use client"
import Header from "../component/layout/header/header"
import Footer from "../component/layout/footer/footer"
import {IconButtonWithTitle} from "../component/IconButton/IconButton"
import theme from "../theme"
import { Avatar, Box, ButtonBase, ThemeProvider, Typography } from "@mui/material";
import { useRouter } from "next/navigation";

const PortfolioPage = () => {
  const router = useRouter();
  const items = [
    { title: "マイクラMod", path: "/portfolio/minecraft.png", link: "/portfolio/masterpiece/minecraft" },
    { title: "CACちゃんを救え", path: "/portfolio/saveCACchan.png", link: "/portfolio/masterpiece/saveCACchan" },
    { title: "G社からの脱出", path: "/portfolio/escapeG.png", link: "/portfolio/masterpiece/escapeG" },
    { title: "粉物判定アプリ", path: "/portfolio/judgeFlourBasedDishes.png", link: "/portfolio/masterpiece/judgeFlourBasedDishes" }
  ];

  return (
    <>
      <Header />
      <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center"}}>
        {items.map((item, index) => (
          <Box
            key={item.title}
            sx={{
              display: "flex",
              justifyContent: index % 2 === 0 ? "flex-start" : "flex-end", // 左右交互に配置
              width: "80%",
              maxWidth: "600px" // レイアウトが崩れないように調整
            }}
          >
            <IconButtonWithTitle
              titleName={item.title}
              pngPath={item.path}
              handleClick={() => router.push(item.link)}
            />
          </Box>
        ))}
      </Box>
      <Footer />
    </>
  );
};
export default PortfolioPage;