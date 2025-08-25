export interface ChipData{
    color: string; // チップの名前に対する色
    category: string; // チップのカテゴリー
}

export type ChipList = Record<string, ChipData>; //nameとChipDataの連想配列

export function getCategories(chipList:ChipList) : string[]{
    return Object.values(chipList).map(chip => chip.category); // chipList -> ChipData[] -> category[]
}

export function getTechNames(chipList:ChipList) : string[]{
    return Object.keys(chipList);
}