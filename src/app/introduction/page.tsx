import Header from "../component/layout/header/header"
import Footer from "../component/layout/footer/footer"
import InfoCard from "../component/InfoCard/InfoCard";
import theme from "../theme"
import { Box, ThemeProvider } from "@mui/material";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

export default function Introduction() {
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  const currentMonth = currentDate.getMonth() + 1; //0-originから1-origin
  const currentDay = currentDate.getDate();

  const birthYear = 2004;
  const birthMonth = 7;
  const birthDay = 24;
  const age = currentYear - birthYear - Number(
    currentMonth < birthMonth ||
    (currentMonth === birthMonth && currentDay < birthDay)
  );

  const startMonth = 4;
  const yearOFAdmission = 2023;
  const grade = (currentMonth - startMonth < 0) ? (currentYear - yearOFAdmission) : (currentYear - yearOFAdmission + 1)

  const yearsOfExperience = currentYear - 2023 + 1;

  const introText = `
年齢:${age}歳  
出身:大阪府大阪市  
大学:京都産業大学  
学部:情報理工学部  
部活:[電子計算機応用部(C.A.C)](https://ksu-cac.com/),[IOOR](https://x.com/ksu_ioor?lang=en)

こんにちは,初めましての方は初めまして!  
京都産業大学情報理工学部${grade}回生の中川一樹です  
趣味はゲームをすること、アニメを見ること、プログラミング、Youtubeを見ることです  
`
  const aboutProgrammingText = `
### スキルセット
C#(Unity),C++(競技プログラミング),Java  
プログラミングは主にC#を触っていてUnityでゲームの開発などに携わっています  
使用しているパソコンは大学の指定パソコンであったMacBook AirM2で、プログラミングは大学生になってから初めたので現在${yearsOfExperience}年目です  
主な開発ツールはVisual Studio Code,Riderです  
前まではVisual Studioを使って開発していましたが、Mac版のサポートが終了したのでRiderに乗り換えました(学生の間は無償なのが大変ありがたい💦)  
オススメの開発ツールがあったら是非教えて欲しいです♪  
最近は色々なツールを新しく試しています  
このWebページも最初はフロントエンドだけで完結させようとかとも考えていましたが、これからずっと使っていくWebページで今後も改修しやすいようにと思い要件定義から順番に制作しています  
制作するのにReactを使った理由はアイコンの形と色が好きだったからです  
また最近になってようやく競技プログラミングの勉強をしていて、主に鉄則本をやっています  
灰色の初心者ですが、勉強して入茶したいです  
`

  const aboutAnimeText = `
アニメは主に恋愛系,ミステリー系,key作品(アニメ化されたもの)が好きです  
それ以外にも色々みています  
自分が好きなアニメのタイトルを以下に挙げます    
恋愛系  
1. [青春ブタ野郎はバニーガール先輩の夢を見ない](https://ao-buta.com/)
2. [五等分の花嫁](https://www.tbs.co.jp/anime/5hanayome/)
3. [ホリミヤ](https://horimiya-anime.com/)

ミステリー系
1. [STEINS.GATE](http://steinsgate.tv/index.html)
2. [氷菓](https://www.kyotoanimation.co.jp/kotenbu/)
3. [探偵はもう死んでいる](https://mfbunkoj.jp/rookie/15th-project/tantei/)
`

  const aboutGameText = `
自分は主にスマホゲームが好きです(大学生になるまでPCを持っていなかったので)  
現在ハマっているゲーム
- 原神(神里 綾華が推しです{icon})
- 崩壊スターレイル(花火が推しです{icon})
- ポケポケ(セレビィかピカチュウデッキをメインに使っています)
- スマブラ(ブラックピットを使っています)

前ハマっていたゲーム
- クラロワ(そこまで上手くないです)
- バンドリ(美竹 蘭を推していました)
- プロセカ(ニーゴを箱で推していました)
- フォートナイト(PC勢に勝てなくてやめました)
- (適宜追加)
`

// pages 配列の定義
const pages: { title: string; description: string}[] = [
  { title: '自己紹介', description: introText },
  { title: 'プログラミングについて', description: aboutProgrammingText},
  { title: 'アニメについて', description: aboutAnimeText },
  { title: 'ゲームについて', description: aboutGameText }
];

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
            {pages.map((page, index) => (
               <InfoCard
               title= {page.title}
               description={page.description}
             />
            ))}
        </Box>
        <Footer />
      </ThemeProvider>
    </>
  );
}
