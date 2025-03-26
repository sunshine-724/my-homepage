import Header from "../../../component/layout/header/header"
import Footer from "../../../component/layout/footer/footer"
import ProjectCard from "../../../component/ProjectCard/ProjectCard"
import theme from "../../../theme"

import { Avatar, Box, ButtonBase, Card, CardActionArea, CardActions, CardContent, CardHeader, CardMedia, Chip, Paper, ThemeProvider, Typography } from "@mui/material";

//改行を直接含む文字列を定義するときはテンプレートリテラル(`:バッククォートを使う)
const descriptionText = `
このModはじゃりじゃりModを最新のバージョンにでも対応させようとしたModです。  
具体的には元のModの機能のモブに砂利を与えていくと,HPと好感度が上がり,モブにダメージを与えるとモブの色が変色していくといった仕様です。  
これを製作するにあたってモブの3Dモデルを作る人,モブを生み出す卵アイテムのイラストを作る人,モブのモデルを制御するプログラミングを書く人に別れ製作しました。  
`;


export default function MinecraftPage() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Header />
        <ProjectCard
          image="/portfolio/minecraft.png"
          title="じゃりじゃりMod"
          description = {descriptionText}
          chips={["Java", "Gradle"]}
        />
        <Footer />
      </ThemeProvider>
    </>
  );
}
