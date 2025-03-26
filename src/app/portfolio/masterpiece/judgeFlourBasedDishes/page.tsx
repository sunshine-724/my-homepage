import Header from "../../../component/layout/header/header"
import Footer from "../../../component/layout/footer/footer"
import ProjectCard from "../../../component/ProjectCard/ProjectCard"
import theme from "../../../theme"

import { Avatar, Box, ButtonBase, Card, CardActionArea, CardActions, CardContent, CardHeader, CardMedia, Chip, Paper, ThemeProvider, Typography } from "@mui/material";

//改行を直接含む文字列を定義するときはテンプレートリテラル(`:バッククォートを使う)
const descriptionText = `
2025年2月下旬に開催されたKC3Hackで制作したWebアプリです。  
このアプリでは与えられた画像,写真,テキストに対して鉄平ちゃん(タイトルのおじさん)がそれがまるで粉物のようにこじつけてくれます。  
`;

export default function JudgeFlourBasedDishesPage() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Header />
        <ProjectCard
          image="/portfolio/judgeFlourBasedDishes.png"
          title="粉物判定アプリ"
          description = {descriptionText}
          chips={["Javascript", "React"]}
        />
        <Footer />
      </ThemeProvider>
    </>
  );
}
