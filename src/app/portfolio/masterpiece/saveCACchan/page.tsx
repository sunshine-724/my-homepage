
import ProjectCard from "@/app/component/ProjectCard/ProjectCard"

//改行を直接含む文字列を定義するときはテンプレートリテラル(`:バッククォートを使う)
const descriptionText = `
## CACちゃんを救え！ 〜2人協力型アクションゲーム〜

**『CACちゃんを救え』** は、2人で協力してプレイするアクションゲームです。  
「CACちゃん」は、自分が所属している部活 **C.A.C** の元メインキャラクター。  
そのキャラを操作しながら、協力してステージクリアを目指します。

---

### 🎮 ゲームの特徴

- **プレイヤー1（Pro Controller）**  
  - CACちゃんの**移動**と**攻撃**を担当。

- **プレイヤー2（キーボード＋マウス）**  
  - 足場を**リアルタイムで配置**して、  
    CACちゃんが落下したり、敵にやられたりしないよう守る。

2人の連携と役割分担が攻略のカギとなる、  
**ステージクリア型のアクションゲーム**です。

---

### ⏳ 制作期間

**2024年8月〜2024年10月（約3ヶ月）**

---

### 👥 制作体制

- **プログラマー：2人（自分含む）**
- **プランナー / ディレクター：1人**
- **イラスト：1人**
- **サウンド：1人**

---

### 🛠️ 自分の担当

- **キャラクター操作の実装**  
  Pro ControllerでCACちゃんを操作（移動・攻撃）できるように調整。
  
- **ステージデータの構築**  
  プランナーが**Excel上でまとめたステージ概要**をもとに、  
  Unityで実際に**ステージ構成を実装**。

---

### 💡 学び・感想

このプロジェクトでは、**プログラマーとプランナー間の連携**の重要性を強く感じました。  
特に：

- 細かい仕様のすり合わせ
- 曖昧な部分の解消
- データの取り扱い方法の統一

などを**密に確認・共有しておくことが、ゲームの完成度に大きく影響**するという点が印象に残りました。

---

Unity×協力アクションとして、チームの連携が試された良い経験になりました！
`;

const files:string[] = ["/portfolio/saveCACchan/saveCACchan.png","/portfolio/saveCACchan/defeatEnemy.mp4","/portfolio/saveCACchan/installAndDefeatEnemy.mp4"];


export default function SaveCACchanPage() {
  return (
    <>
      <ProjectCard
        files = {files}
        title="CACちゃんを救え"
        description={descriptionText}
        chips={["C#", "Unity"]}
      />
    </>
  );
}
