"use client"
import { useParams } from "next/navigation"
import { useEffect, useState } from "react";

import { NotificationDetail } from "@/types/notification"
import { Typography } from "@mui/material";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

export default function NotificationPage() {
    const params = useParams(); //動的ページに使った際、そのパラメータを取得する(今回の場合:idの{id})
    const id = params ? params.id : undefined;

    const [notification, setNotification] = useState<NotificationDetail | null>(null);

    useEffect(() => {
        if (!id) return;

        fetch(`/data/notifications/${id}.json`)
            .then((res) => res.json())
            .then((data) => setNotification(data))
            .catch((err) => console.error("Error fetching notification", err))
    }, [id]);

    if (!notification) return <p>Loading...</p>;

    return (
        <>
            <Typography variant="h2" sx={{ fontSize: "2.8rem", textAlign: "center", marginTop: "20px" }}>
                {notification.title}
            </Typography>
            <Typography variant="h6" sx={{ fontSize: "1.2rem", textAlign: "center", marginTop: "10px" }}>
                {notification.date}
            </Typography>
            <ReactMarkdown remarkPlugins={[remarkGfm]}>{notification.content}</ReactMarkdown>
        </>
    )
}