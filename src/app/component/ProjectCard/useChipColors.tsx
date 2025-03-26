import { useState, useEffect } from "react";
import { parse } from "jsonc-parser"; // JSONC をパースするためにインポート

const DEFAULT_COLOR = "#cccccc";

export const useChipColors = () => {
  const [chipColors, setChipColors] = useState<Record<string, string>>({});

  useEffect(() => {
    fetch("/data/chipColors.jsonc")
      .then((response) => response.text()) // JSONCはテキストとして取得
      .then((text) => {
        const data = parse(text); // JSONC を JSON に変換
        setChipColors(data);
      })
      .catch((error) => console.error("Error loading chip colors:", error));
  }, []);

  const getChipColor = (chip: string): string => {
    return chipColors[chip] || DEFAULT_COLOR;
  };

  return { getChipColor };
};
