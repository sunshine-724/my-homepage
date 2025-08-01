"use client"
import { Card, CardContent, Typography, Chip, Box } from "@mui/material";
import React from "react";
import { useChipColors } from "./useChipColors"; // フックをインポート
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";

// 型として使う
// コンポーネントとして使う
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import MediaSwiper from "./MediaSwiper";

interface ProjectCardProps {
    files?: string[];
    title: string;
    description: string;
    chips: string[];
}

const ProjectCard: React.FC<ProjectCardProps> = ({ files = [], title, description, chips }) => {
    const { getChipColor } = useChipColors(); // フックから関数を取得

    return (
        <Card sx={{ minWidth: "100%", maxWidth: "100%" }}>
            {files.length > 0 && (
                <MediaSwiper files={files} title={title} />
            )}
            <CardContent>
                <Typography gutterBottom variant="h4">
                    {title}
                </Typography>
                <ReactMarkdown
                    remarkPlugins={[remarkGfm]}
                    rehypePlugins={[rehypeRaw]}
                    remarkRehypeOptions={{ passThrough: ['link'] }}
                >
                    {description}
                </ReactMarkdown>
            </CardContent>
            <Box sx={{ display: "flex", gap: 1, p: 2 }}>
                {chips.map((chip, index) => (
                    <React.Fragment key={index}>
                        <Chip
                            label={chip}
                            sx={{ backgroundColor: getChipColor(chip), color: "#f8f8f8" }} // 背景色適用
                        />
                    </React.Fragment>
                ))}
            </Box>
        </Card>
    );
};

export default ProjectCard;
