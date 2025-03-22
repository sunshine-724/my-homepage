import { Card, CardActionArea, CardMedia, CardContent, Typography, Chip, Box } from "@mui/material";
import React from "react";

interface ProjectCardProps {
    image: string;
    title: string;
    description: string;
    chips: string[];
}

const ProjectCard: React.FC<ProjectCardProps> = ({ image, title, description, chips }) => {
    return (
        <Card>
            <CardActionArea>
                <CardMedia
                    component="img"
                    image={image}
                    alt={title}
                    sx={{ justifySelf: "center", width: "100%", height: "auto" }}
                />
                <CardContent>
                    <Typography gutterBottom variant="h4" component="div">
                        {title}
                    </Typography>
                    <Typography variant="body1" sx={{ color: 'text.secondary' }}>
                        {description.split("\n").map((line, index) => (
                            <React.Fragment key={index}>
                                {line}
                                <br />
                            </React.Fragment>
                        ))}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <Box sx={{ display: "flex", gap: 1, p: 2 }}>
                {chips.map((chip) => (
                    <Chip key={chip} label={chip} />
                ))}
            </Box>
        </Card>
    );
};

export default ProjectCard;