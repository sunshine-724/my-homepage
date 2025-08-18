export interface Blog {
    id: string;
    title: string;
    date: string;
    chips: string[];
}

export interface BlogDetail extends Blog {
    content: string;

    //attachments:添付ファイルなど
    attachments?: {
        label: string;
        url: string;
    }
    updatedAt?: string;
}

export interface Payload {
    title: string;
    date: string;
    content: string;
    tags: string[];
    isPublished: boolean;
}