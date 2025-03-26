"use client"
import { Card, CardActionArea, CardMedia, CardContent, Typography, Chip, Box } from "@mui/material";
import React from "react";
import { useChipColors } from "./useChipColors"; // フックをインポート
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

interface ProjectCardProps {
    image?: string;
    title: string;
    description: string;
    chips: string[];
}

const ProjectCard: React.FC<ProjectCardProps> = ({ image, title, description, chips }) => {
    const { getChipColor } = useChipColors(); // フックから関数を取得

    return (
        <Card sx={{minWidth: "100%", maxWidth: "100%", margin: 2}}>
                {image && ( // imageがnullまたはundefinedでない場合のみレンダリング
                    <CardMedia
                        component="img"
                        image={image}
                        alt={title}
                        sx={{ justifySelf: "center", width: "40%", height: "40%" }}
                    />
                )}
                <CardContent>
                    <Typography gutterBottom variant="h4" component="div">
                        {title}
                    </Typography>
                    <ReactMarkdown remarkPlugins={[remarkGfm]}>{description}</ReactMarkdown>
                </CardContent>
            <Box sx={{ display: "flex", gap: 1, p: 2 }}>
                {chips.map((chip, index) => (
                    <React.Fragment key={index}>
                        <Chip
                            key={chip}
                            label={chip}
                            sx={{ backgroundColor: getChipColor(chip), color: "#fff" }} // 背景色適用
                        />
                    </React.Fragment>
                ))}
            </Box>
        </Card>
    );
};

export default ProjectCard;