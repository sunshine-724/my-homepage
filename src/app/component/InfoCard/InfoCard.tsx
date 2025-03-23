import React from "react";
import { Card, CardContent, Typography } from "@mui/material";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

interface InfoCardProps {
    title: string;
    description: string;
}

const InfoCard: React.FC<InfoCardProps> = ({ title, description }) => {
    return (
        <Card sx={{ width:"80%", p: 2, boxShadow: 3 }}>
            <CardContent>
                <Typography gutterBottom variant="h4" component="div">
                    {title}
                </Typography>
                {/* ReactMarkdown を使って description を Markdown 表示 */}
                <ReactMarkdown remarkPlugins={[remarkGfm]}>{description}</ReactMarkdown>
            </CardContent>
        </Card>
    );
};

export default InfoCard;
