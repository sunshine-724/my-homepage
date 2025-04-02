import ProjectCard from "@/app/component/ProjectCard/ProjectCard"

//改行を直接含む文字列を定義するときはテンプレートリテラル(`:バッククォートを使う)
const descriptionText = `
このModはじゃりじゃりModを最新のバージョンにでも対応させようとしたModです。  
具体的には元のModの機能のモブに砂利を与えていくと,HPと好感度が上がり,モブにダメージを与えるとモブの色が変色していくといった仕様です。  
これを製作するにあたってモブの3Dモデルを作る人,モブを生み出す卵アイテムのイラストを作る人,モブのモデルを制御するプログラミングを書く人に別れ製作しました。  
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
