import ProjectCard from "@/app/component/ProjectCard/ProjectCard";

export default function SpiroDesign() {
  const description = `
## 初めてのアプリケーション制作

---

### ⏳ 制作期間
**2025年4月～2025年7月(約3ヶ月)**

---
### 👥 制作体制

- **プロジェクトマネージャー**：1名（自分）  
- **サブプロジェクトマネージャー**：1名  

#### プログラマー（計5名）

| 担当領域               | 担当者 |
|------------------------|--------|
| モデル                 | 自分   |
| ビュー                 | 1名    |
| コントローラー         | 1名    |
| ファイル処理           | 1名    |
| スピロギア・ピニオンギア | 1名    |
---

### 🛠️ 自分の担当

- **モデル部分の実装(Java)**  
  スピロギアやピニオンギアなどのオブジェクトを管理したり、インタラクティブな操作をコントローラーから受け取ってビューに反映させたりなどのデータの管理を担当しました。
- **Web版,IOS版の実装(Kotlin)**  
  パソコンのJava版をベースに、Web版とiOS版の実装を行いました。  
  具体的にはKotlin Multiplatformを使用してクロスプラットフォームのアプリケーションを開発し、IntelliJ IDEAでコーディングを行いました。
- **プロジェクトマネージャー**  
  プロジェクト全体の進行管理や、メンバー間のコミュニケーションを担当しました。  
  また、サブプロジェクトマネージャーと連携し、各メンバーのタスク管理や進捗確認を行いました。
---

### 📎 プロジェクトリンク

🔗 [Java版GitHubリポジトリはこちら](https://github.com/sunshine-724/SpiroDesign)  
🔗 [Kotlin版GitHubリポジトリはこちら](https://github.com/sunshine-724/SpiroDesignAll)

---

### 💡 学び・感想
このプロジェクトは、**3年春学期の「プロジェクト演習」**という授業の中で取り組んだものです。  
この授業では、より実践的なプロジェクトの進行方法を学ぶことができました。  
具体的には、要件定義から始まり、設計・実装・テスト・リリースまで、開発の一連の流れを実際に経験しました。  
また、これまで以上に細かい工程に踏み込んだことで、コミュニケーションの重要性やタスク管理の難しさも実感しました。  
さらに、ハッカソン以来となるプロジェクトマネージャーとしての役割を担い、初めてのアプリケーション制作に取り組みました。  
要件定義や設計の段階から関与したことで、アプリケーション開発の全体像をより深く理解することができました。  
加えて、Kotlin Multiplatformを用いたWeb版とiOS版の実装にも取り組み、新しい技術に触れる貴重な機会となりました。  
`;

  const files: string[] = ["/portfolio/spiroDesign/spiroDesignWeb.mp4", "/portfolio/spiroDesign/spiroDesignSmartphone.mp4"];

  return (
    <ProjectCard
      files={files}
      title="スピロデザイン"
      description={description}
      chips={["Java", "Kotlin"]}
    />
  );
}