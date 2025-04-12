import ProjectCard from "@/app/component/ProjectCard/ProjectCard"

//改行を直接含む文字列を定義するときはテンプレートリテラル(`:バッククォートを使う)
const descriptionText = `
## 宇宙人少女の脱出アドベンチャー

宇宙人の少女が目覚めると、そこは牢獄だった。  
機械の頭を持つ者たちに実験体として連行されそうになるが、アクシデントに乗じて脱出のチャンスを得る。  
謎の施設から無事に逃げ出せるかはあなた次第。ギミックを解きながら脱出を目指そう！

---

### ⏳ 制作期間

**2024年2月〜2024年3月（約2ヶ月）**

---

### 🎨 制作体制

- **イラスト・ディレクター担当**：1人  
- **CG担当**：1人  
- **UI担当**：1人  
- **BGM担当**：1人  
- **プログラマー（自分）**：1人  

このプロジェクトは計5人で協力して開発しました。  
私はこのプロジェクトで**初めて本格的にUnityを触った**ため、簡単な機能を実装するだけでも多くの時間がかかり、かなり苦労しました。

---

### 🛠 Unityでの学びと成長

ゲームの仕様に沿った実装を行うために、スクリプトの書き方からオブジェクトの制御方法、UIの連携まで幅広く学びました。  
また、他のメンバーとの連携を意識しながら作業することで、**実際の開発フローに近い形でプロジェクトに参加**できたと感じています。

その結果、調べながら試行錯誤した分、Unityの基本的な使い方から、いくつかの機能は**ある程度使いこなせるようになった**と自信を持てるようになりました。

---

### 📎 プロジェクトリンク

🔗 [GitHubリポジトリはこちら](https://github.com/sunshine-724/Escape-game)  
🎮 [UnityRoomのリンクはこちら](https://unityroom.com/games/escapefromcompanyg)

---

### 💬 感想

初めて尽くしの中でも、チーム全体で協力しながら一つの作品を完成させることができたのはとても貴重な経験でした。  
Unity開発の土台を築けたことで、今後の制作にも大きく活かせると感じています。

`;

const files:string[] = ["/portfolio/escapeG/title.png","/portfolio/escapeG/logo.png","/portfolio/escapeG/password.png","/portfolio/escapeG/quiz.png"]
export default function EscapeGPage() {
  return (
    <>
      <ProjectCard
        files= {files}
        title="G社からの脱出"
        description={descriptionText}
        chips={["C#", "Unity"]}
      />
    </>
  );
}
