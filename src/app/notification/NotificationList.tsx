"use client"
import { useState } from "react";
import { Card, CardContent, Typography, Button, Collapse } from "@mui/material";
import { Notification } from "@/types/notification";
import { useRouter } from "next/navigation";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

//React.FCの型ジェネリクスでは配列の型を指定できないので、NoticeListPropsを作成
interface NotificationListProps {
  notifications: Notification[];
}

const NotificationList: React.FC<NotificationListProps> = ({ notifications }) => {
  const router = useRouter();
  const [expanded, setExpanded] = useState(false);
  const visibleNotices = expanded ? notifications : notifications.slice(0, 5); //最初の5件を表示するかどうか

  const handleClick = (id: number) => {
    router.push(`/notification/${id}`)
  }

  return (
    <>
      {visibleNotices.map((notification, index) => (
        <Card key={notification.id} sx={{ borderLeft: "5px solid", borderColor: importanceColor[notification.importance], mb: 1 }}>
          <CardContent>
            <Button
              onClick={() => router.push(`/notification/${notification.id}`)}
              variant="text"
              sx={{ textTransform: "none", color: "inherit", width: "100%", height: "100%", justifyContent: "flex-start" }}
            >
              <Typography variant="h6">
                {notification.importance === "red" && "🔴"}
                {notification.importance === "yellow" && "🟡"}
                {notification.importance === "green" && "🟢"}
                {notification.title}
              </Typography>
              <ArrowForwardIosIcon />
            </Button>
          </CardContent>
        </Card >
      ))}

      {/* 追加の項目をスライド表示 */}
      <Collapse in={expanded}>
        {notifications.slice(5).map((notification) => (
          <Card key={notification.id} sx={{ borderLeft: "5px solid", borderColor: importanceColor[notification.importance], mb: 1 }}>
            <CardContent>
              <Button
                onClick={() => handleClick(notification.id)}
                variant="text"
                sx={{ textTransform: "none", color: "inherit", width: "100%", height: "100%", justifyContent: "flex-start" }}
              >
                <Typography variant="h6">
                  {notification.importance === "red" && "🔴"}
                  {notification.importance === "yellow" && "🟡"}
                  {notification.importance === "green" && "🟢"}
                  {notification.title}
                </Typography>
                <ArrowForwardIosIcon />
              </Button>
            </CardContent>
          </Card>
        ))}
      </Collapse>

      {/* ボタンで開閉 */}
      <Button onClick={() => setExpanded(!expanded)} sx={{ mt: 2 }}>
        {expanded ? "閉じる" : "もっと見る"}
      </Button>
    </>
  );
};

const importanceColor = {
  red: "#e57373",
  yellow: "#ffb74d",
  green: "#81c784",
};

export default NotificationList;
