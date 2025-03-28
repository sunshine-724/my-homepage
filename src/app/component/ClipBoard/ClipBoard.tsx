"use client"
import { Tooltip, SxProps, Button, Typography, Box } from "@mui/material";
import { useState } from "react";
import ContentCopyIcon from '@mui/icons-material/ContentCopy';


interface ClipBoardProps {
  text: string;
  sx?: SxProps;
}

async function copyToClipboard(text: string) {
  try {
    await navigator.clipboard.writeText(text);
  } catch (error) {
    console.log(error || "コピーに失敗しました");
  }
}

const ClipBoard: React.FC<ClipBoardProps> = ({ text, sx }) => {
  const [openTip, setOpenTip] = useState<boolean>(false);

  const handleCloseTip = (): void => {
    setOpenTip(false);
  };

  const handleClickButton = (): void => {
    setOpenTip(true);
    copyToClipboard(text);
  };

  return (
    <>
      {text && (
        <Tooltip
          arrow
          open={openTip}
          onClose={handleCloseTip}
          disableHoverListener
          placement="top"
          title="Copied!"
        >
          <Box
            sx={{
              backgroundColor: "#40E0D0",
              display: "flex",
            }}
          >
          <Button
            onClick={handleClickButton}
            sx={{
              ...sx,
            }}
            size="small"
          >
            {text}
            <ContentCopyIcon
              sx = {{
                fontSize: { xs: "1.0rem", sm: "1.5rem", md: "2.0rem", lg: "2.5rem" },
              }}
             />
          </Button>
          </Box>
        </Tooltip>
      )}
    </>
  );
};

export default ClipBoard;
