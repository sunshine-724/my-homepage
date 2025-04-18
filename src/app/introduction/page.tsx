"use client"
import { Box } from "@mui/material";
import InfoCardWithToggleButton from "@/app/component/InfoCard/InfoCardWithToggleButton";

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
- C#(Unity)  
- C++(競技プログラミング)  
- Java  

プログラミングは主にC#を触っていてUnityでゲームの開発などに携わっています  
使用しているパソコンは大学の指定パソコンだったMacBook Air(M2)で、プログラミングは大学生になってから初めたので現在${yearsOfExperience}年目です  
主な開発ツールはVisual Studio Code,Riderです  
前まではVisual Studioを使って開発していましたが、Mac版のサポートが終了したのでRiderに乗り換えました(学生の間は無償なのが大変ありがたい💦)  
オススメの開発ツールがあったら是非教えて欲しいです♪  
最近は色々なツールを新しく試しています。  
このWebページも最初はフロントエンドだけで完結させようとかとも考えていましたが、これからずっと使っていくWebページで今後も改修しやすいようにと思い要件定義から順番に制作しています。  
制作するのにReactを使った理由はアイコンの形と色が好きだったからです。  
また最近になってようやく競技プログラミングの勉強をしていて、主に鉄則本をやっています。  
灰色の初心者ですが、勉強して入茶したいです。  
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

  const aboutYoutubeText = `
Youtubeは主にSCP解説動画、プログラミング動画、切り抜き動画を見ています。  
またプログラミングなどの作業をする時にはBGMとして流しています。   
`

  const aboutSCPText = `
Youtubeを見ている時間の大半がSCP解説動画だと思います。  
[SCP財団](http://scp-jp.wikidot.com/about-the-scp-foundation)とは、自然法則に反する存在や物品、場所を取り扱う架空の組織であり、その組織に関する創作を行うコミュニティサイトの名称でもあります。  
自分は長い文字を読むのが苦手なので、基本的にWebサイトを見ることはせずにYoutubeで解説動画を見ています。  
Youtubeの解説動画はピクトグラムやアニメーションを使って解説しているので、文字を読むよりも理解しやすいし、その作品の雰囲気も出るので好きです。  
自分の好きなSCP作品を以下に載せます。  
- [SCP-5000 どうして](http://scp-jp.wikidot.com/scp-5000)
- [SCP-CN-2000 カオス理論](http://scp-jp.wikidot.com/scp-cn-2000) 
- [SCP-JP-001 飯落の提言](http://scp-jp.wikidot.com/meshiochislash-s-proposal)
- [SCP-JP-3000 常世の国](http://scp-jp.wikidot.com/scp-3000-jp)  

基本的に既存のSCPがわちゃわちゃ出てくる作品が好きです。  
SCP-CN-2000はSCP-5000の良い復習にもなりますし、提言も絡んでくるのでとても好きです。
`

  const aboutProgrammingMovieText = `
プログラミング動画は主に通学中に見ています。  
日本の動画も見ることもあれば、海外の動画も見ることもあります(字幕付きで)。  
見ているジャンルは様々でWeb制作、Unityを用いたゲーム制作、競技プログラミングなど多岐にわたります。    
他人の作業風景を見ると自分も作業したくなってきますし、何か新しいことを学べるかもしれないと思って見ています。  
また作業風景を見ているといつも思うのですが、みなさんタイピングの速度が早すぎません??  
自分も英語や日本語のタイピングであればブラインドタッチもできますし、それなりに速いと思うのですが、他の人を見るとまだまだだなと思います。  
数字キーもブラインドタッチできる人尊敬してますし、早く自分もそうなりたいです。  
`

  const aboutCutOutMovieText = `
切り抜き動画はおすすめに流れているものを適当に見ています。  
自分は好きなYoutuberがいないので、ほんとに適当に見ています。  
けれどおすすめに流れてくるのって大体Vtuberの切り抜きだったり、FPSやTPS、格闘ゲームの切り抜きだったりするので、それを見ています。 
切り抜かれる場面って大体面白い場面だったり、上手い場面だったりするので前提知識がなくても見ていて楽しいです。 
しかしいつの間にか切り抜き動画ってYoutubeの主流になりましたね...  
小学生の頃はYoutubeを結構見ていて、中学、高校生の頃はあまり見ていなかったので驚きました。  
`

  const aboutMusicText = `
音楽に関しても色々なジャンルを聴いています。
主に聴いているのは音ゲー、アニソン、ボカロ、K-POP、Nightcoreなどです。
これらのジャンルを一定周期で聞いていると思います。(大体2ヶ月周期)
それぞれのジャンルごとに好きな曲を以下に載せます。  
音ゲー
1. [Grievous Lady (Team Grimoire) [Arcaea]](https://www.youtube.com/watch?v=Vg2r6Jw0Z1I)
2. [Marigold (M2U) [Deemo]](https://www.youtube.com/watch?v=Vg2r6Jw0Z1I)  
3. [poxei♦Doon (かねこちはる) [太鼓の達人]](https://www.youtube.com/watch?v=OlLQw7Xg2Fk)

アニソン
1. [sister's noise (fripSide) [とある科学の超電磁砲2期op]](https://www.youtube.com/watch?v=rCtc-9EVE_c)
2. [There is a Reason (鈴木このみ) [ノーゲーム・ノーライフゼロ主題歌]](https://www.youtube.com/watch?v=g4wBVvB-2qU)  
3. [START:DASH!! (μ's)[ラブライブ!(無印)3話及び13話挿入歌]](https://www.youtube.com/watch?v=eyKJ359c5Ds)

ボカロ
1. [モザイクロール (DECO*27) [GUMI]](https://www.youtube.com/watch?v=DnLFVUi3oOU)
2. [すろぉもぉしょん (ピノキオピー) [初音ミク]](https://www.youtube.com/watch?v=ARt2fVT33Lw)
3. [ロストワンの号哭 (Neru) [鏡音リン]](https://www.youtube.com/watch?v=8oBV3jPTW4s)

K-POP
1. [Savage (aespa)](https://www.youtube.com/watch?v=WPdWvnAAurg)
2. [AS IF IT'S YOUR LAST (BLACKPINK)](https://www.youtube.com/watch?v=Amq-qlqbjYA)
3. [The Feels (TWICE)](https://www.youtube.com/watch?v=f5_wn8mexmM)

Nightcore  
1. [Discord (The Living Tombstone)](https://www.youtube.com/watch?v=BAjG-0WFW7s)
2. [King & Queen (Ava Max)](https://www.youtube.com/watch?v=0X7rw11LBdo)
3. [Everytime we touch (Cascada)](https://www.youtube.com/watch?v=8QG7CEuUqMc)
`

  // pages 配列の定義
  const pages: { title: string; description: string; isOpenToggle: boolean }[] = [
    { title: '自己紹介', description: introText, isOpenToggle: true },
    { title: 'プログラミングについて', description: aboutProgrammingText, isOpenToggle: true },
    { title: 'アニメについて', description: aboutAnimeText, isOpenToggle: false },
    { title: 'ゲームについて', description: aboutGameText, isOpenToggle: false },
  ];

  const pageAboutYoutube = { title: 'Youtubeについて', description: aboutYoutubeText, isOpenToggle: false }
  const pageAboutYoutubeDetail: { title: string; description: string; isOpenToggle: boolean }[] = [
    { title: 'SCP解説動画について', description: aboutSCPText, isOpenToggle: false },
    { title: 'プログラミング動画について', description: aboutProgrammingMovieText, isOpenToggle: false },
    { title: '切り抜き動画について', description: aboutCutOutMovieText, isOpenToggle: false },
    { title: 'BGMについて', description: aboutMusicText, isOpenToggle: false },
  ]

  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}>
        {pages.map((page, index) => {
          return (
            <InfoCardWithToggleButton
              key={index}
              title={page.title}
              description={page.description}
              initToggle={page.isOpenToggle}
            />
          );
        })}
        <InfoCardWithToggleButton
          title={pageAboutYoutube.title}
          description={pageAboutYoutube.description}
          initToggle={pageAboutYoutube.isOpenToggle}
        >
          {pageAboutYoutubeDetail.map((page, index) => {
            return (
              <InfoCardWithToggleButton
                key={index}
                title={page.title}
                description={page.description}
                initToggle={page.isOpenToggle}
                withContent={false}
              />
            );
          })}
        </InfoCardWithToggleButton>
      </Box>
    </>
  );
}
