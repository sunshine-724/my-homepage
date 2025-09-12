export interface DraftTablePayload {
    title: string;
    date: string;
    content: string;
    tags: string[];
    isPublished: boolean;
    attachmentFilePath?: string[]; // 添付ファイルのパス
}