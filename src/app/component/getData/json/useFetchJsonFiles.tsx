import { useState,useEffect } from "react";

const useFetchJsonFiles = () => {
  const [jsonData, setJsonData] = useState<any[]>([]);

  useEffect(() => {
    const fetchJsonFiles = async () => {
      try {
        // サーバーからファイルリストを取得
        const response = await fetch("/api/getBlogFiles");
        const fileList: string[] = await response.json();

        // 各ファイルを非同期に取得
        const dataPromises = fileList.map(async (fileName) => {
          const res = await fetch(`/data/blog/${fileName}`);
          return res.json();
        });

        const jsonDataArray = await Promise.all(dataPromises);
        setJsonData(jsonDataArray); // 取得したデータを state にセット
        console.log(jsonDataArray);
      } catch (error) {
        console.error("Error fetching JSON files:", error);
      }
    };

    fetchJsonFiles();
  }, []);

  return jsonData;
};