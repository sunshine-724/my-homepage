import { useState, useEffect } from "react";
import {ChipList} from "@/types/chip"
import { parse } from "jsonc-parser"; // JSONC をパースするためにインポート

const DEFAULT_COLOR = "#cccccc";
const DEFAULT_CATEGORY = "Other";

export const useChipColors = () => {
  const [chipData, setChipData] = useState<ChipList>({});

  useEffect(() => {
    fetch("/data/chipColors.jsonc")
      .then((response) => response.text())
      .then((text) => {
        const data = parse(text) as ChipList;
        setChipData(data);
      })
      .catch((error) => console.error("Error loading chip colors:", error));
  }, []);

  const getChipColor = (chip: string): string => {
    return chipData[chip]?.color || DEFAULT_COLOR;
  };

  const getChipCategory = (chip: string): string => {
    return chipData[chip]?.category || DEFAULT_CATEGORY;
  };

  const getAllChips = (): ChipList => {
    const sortedEntries = Object.entries(chipData)
      .sort(([a], [b]) => a.localeCompare(b)); // 技術名（キー）でソート
  
    const sortedChipList: ChipList = {};
    for (const [name, info] of sortedEntries) {
      sortedChipList[name] = info;
    }
  
    return sortedChipList;
  };
  

  return {
    getChipColor,
    getChipCategory,
    getAllChips,
  };
};
