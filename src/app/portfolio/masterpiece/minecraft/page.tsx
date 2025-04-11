import ProjectCard from "@/app/component/ProjectCard/ProjectCard"

//改行を直接含む文字列を定義するときはテンプレートリテラル(`:バッククォートを使う)
const descriptionText = `
## じゃりじゃりModのアップデート対応プロジェクト

このModは、「じゃりじゃりMod」を最新バージョンの環境でも動作するように対応させたものです。  
主な機能としては、モブに砂利を与えるとHPと好感度が上昇し、逆にダメージを与えるとモブの色が変化する、といった仕様があります。

---

### 🔧 制作体制

- **モブの3Dモデル担当**：1人  
- **卵アイテムのイラスト担当**：1人  
- **プログラミング担当**：3人  

私は大学2回生になったばかりで、他のメンバーは全員1回生でした。  
そのため、Gradleを用いた開発環境の構築や、Java・Forgeの使い方を自分で学びながら、1回生メンバーに共有・指導するという形で開発を進めました。

---

### 🌿 Git/GitHubでの開発管理

今回は複数人のプログラマーが参加していたため、GitHub上で**初めてブランチを分けて作業し、マージ処理を行う**など、より実践的な共同開発に挑戦しました。  
これまでは主にgit add、commit、push、pullといった基本操作しか経験がありませんでしたが、このプロジェクトを通じて**実務に近いGit運用**を学ぶことができました。

---

### 💬 感想

2回生の授業では実験やレポートも多く、時間のやりくりが大変でしたが、チームをまとめながら開発をやり切った経験は非常に貴重な学びとなりました。
`;

const files:string[] = ["/portfolio/minecraft/all.png","/portfolio/minecraft/chase.mp4","/portfolio/minecraft/inventory.png","/portfolio/minecraft/profile.png","/portfolio/minecraft/recover.mp4"]
export default function MinecraftPage() {
  return (
    <>
      <ProjectCard
        files={files}
        title="じゃりじゃりMod"
        description={descriptionText}
        chips={["Java", "Gradle"]}
      />
    </>
  );
}
