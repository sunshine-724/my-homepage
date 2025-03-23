import { Box, IconButton, Typography, Collapse, CardContent, Card } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import React, { useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

interface InfoCardWithToggleButtonProps {
  title: string;
  description: string;
  initToggle: boolean;
  children?: React.ReactNode;
}

const InfoCardWithToggleButton: React.FC<InfoCardWithToggleButtonProps> = ({ title = 'sampleTitle', description = 'testDescription', initToggle = false, children}) => {
  const [expanded, setExpanded] = useState(initToggle);
  return (
    <Card sx={{ width: "80%", p: 2, boxShadow: 3 }}>
      <CardContent>
        <Box display="flex" justifyContent="flex-start" alignItems="center">
          <Typography gutterBottom variant="h4" component="div">
            {title}
          </Typography>
          <IconButton
            onClick={() => setExpanded(!expanded)}
            sx={{
              transition: "transform 0.2s",
              transform: expanded ? "rotate(180deg)" : "rotate(0deg)"
            }}
          >
            <ExpandMoreIcon />
          </IconButton>
        </Box>
        <Collapse in={expanded}>
          <ReactMarkdown remarkPlugins={[remarkGfm]}>{description}</ReactMarkdown>
          {/* children をここに表示 */}
          {children}
        </Collapse>
      </CardContent>
    </Card>
  );
};

export default InfoCardWithToggleButton;