import Header from "../../../component/layout/header/header"
import Footer from "../../../component/layout/footer/footer"
import ProjectCard from "../../../component/ProjectCard/ProjectCard"
import theme from "../../../theme"

import {ThemeProvider} from "@mui/material";

//改行を直接含む文字列を定義するときはテンプレートリテラル(`:バッククォートを使う)
const descriptionText = `
宇宙人の少女が目覚めると、そこは牢獄だった。
機械の頭を持つ者たちに実験体として連行されそうになるが、アクシデントに乗じて脱出のチャンスを得る。
謎の施設から無事に逃げ出せるかはあなた次第。ギミックを解きながら脱出を目指そう！
`;

export default function EscapeGPage() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Header />
        <ProjectCard
          image="/portfolio/escapeG.png"
          title="G社からの脱出"
          description = {descriptionText}
          chips={["C#", "Unity"]}
        />
        <Footer />
      </ThemeProvider>
    </>
  );
}
