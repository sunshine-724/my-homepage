import Header from "../../../component/layout/header/header"
import Footer from "../../../component/layout/footer/footer"
import ProjectCard from "../../../component/ProjectCard/ProjectCard"
import theme from "../../../theme"

import { Avatar, Box, ButtonBase, Card, CardActionArea, CardActions, CardContent, CardHeader, CardMedia, Chip, Paper, ThemeProvider, Typography } from "@mui/material";

//改行を直接含む文字列を定義するときはテンプレートリテラル(`:バッククォートを使う)
const descriptionText = `
CACちゃんを救えはアクションゲームです。  
CACちゃんというのは自分が所属している部活C.A.Cの元メインキャラクターです。  
CACちゃんをコントローラを用いて操作して特定のステージをクリアしようといったゲームです。  
`;


export default function SaveCACchanPage() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Header />
        <ProjectCard
          image="/portfolio/saveCACchan.png"
          title="CACちゃんを救え"
          description = {descriptionText}
          chips={["C#", "Unity"]}
        />
        <Footer />
      </ThemeProvider>
    </>
  );
}
