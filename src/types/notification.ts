
export interface Notification {
    id: number;
    title: string;
    importance: "red" | "yellow" | "green";
    date: string;
    isPublished: boolean;
    category: string;
}

export interface NotificationDetail extends Notification {
    content: string;
    //attachments:添付ファイルなど
    attachments? : {
        label :string;
        url : string;
    }
    updatedAt? : string;
}