import { useState } from "react";
import { Card, CardContent, Typography, Button, Collapse, Box } from "@mui/material";
import { Notice } from "@/types/notice";
import router from "next/router";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

//React.FCの型ジェネリクスでは配列の型を指定できないので、NoticeListPropsを作成
interface NoticeListProps {
  notices: Notice[];
}

const NoticeList: React.FC<NoticeListProps> = ({ notices }) => {
  const [expanded, setExpanded] = useState(false);
  const visibleNotices = expanded ? notices : notices.slice(0, 5); //最初の5件を表示するかどうか

  return (
    <>
      {visibleNotices.map((notice, index) => (
        <Card key={notice.id} sx={{ borderLeft: "5px solid", borderColor: importanceColor[notice.importance], mb: 1 }}>
          <CardContent>
            <Button
              onClick={() => router.push(`/notification/${notice.id}`)}
              variant="text"
              sx={{ textTransform: "none", color: "inherit", width: "100%", height: "100%", justifyContent: "flex-start" }}
            >
              <Typography variant="h6">
                {notice.importance === "red" && "🔴"}
                {notice.importance === "yellow" && "🟡"}
                {notice.importance === "green" && "🟢"}
                {notice.title}
              </Typography>
              <ArrowForwardIosIcon />
            </Button>
          </CardContent>
        </Card >
      ))}

      {/* 追加の項目をスライド表示 */}
      <Collapse in={expanded}>
        {notices.slice(5).map((notice) => (
          <Card key={notice.id} sx={{ borderLeft: "5px solid", borderColor: importanceColor[notice.importance], mb: 1 }}>
            <CardContent>
              <Button
                onClick={() => router.push(`/notification/${notice.id}`)}
                variant="text"
                sx={{ textTransform: "none", color: "inherit", width: "100%", height: "100%", justifyContent: "flex-start" }}
              >
                <Typography variant="h6">
                  {notice.importance === "red" && "🔴"}
                  {notice.importance === "yellow" && "🟡"}
                  {notice.importance === "green" && "🟢"}
                  {notice.title}
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

export default NoticeList;
