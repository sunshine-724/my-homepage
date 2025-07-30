export interface ChipData{
    color: string;
    category: string;
}

export type ChipList = Record<string, ChipData>; //nameとChipDataの連想配列
