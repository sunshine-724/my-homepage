export interface Notice {
    id: number;
    title: string;
    importance: "red" | "yellow" | "green";
    date: string;
    isPublished: boolean;
    category: string;
}