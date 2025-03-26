import { NextApiRequest, NextApiResponse } from "next";
import fs from "fs";
import path from "path";
import { json } from "stream/consumers";

//public/data/blog ディレクトリ内のファイルリストを取得する
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const dataFolder = path.join(process.cwd(), "public", "data", "blog"); //process.cwd() はプロジェクトルートディレクトリを返す

  try {
    const files = fs.readdirSync(dataFolder);
    const jsonFiles = files.filter((file) => file.endsWith(".json"));
    res.status(200).json(jsonFiles);
  } catch (error) {
    res.status(500).json({ error: "Unable to read directory" });
  }
}
