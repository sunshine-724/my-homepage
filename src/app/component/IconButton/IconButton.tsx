import Image from "next/image";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import ButtonBase from "@mui/material/ButtonBase";
import { Typography } from "@mui/material";

interface IconButtonProps {
  pngPath: string;
  handleClick: () => void;
}

const IconButton: React.FC<IconButtonProps> = ({ pngPath, handleClick }) => {
  return (
    <ButtonBase
      onClick={handleClick}
      sx={{
        borderRadius: "50%", // 丸型を維持
        overflow: "hidden",
        display: "block",
      }}
    >
      <Avatar
        sx={{
          width: { xs: 175, sm: 200, md: 225, lg: 250 },
          height: { xs: 175, sm: 200, md: 225, lg: 250 },
        }}
      >
        <Box sx={{ position: "relative", width: "100%", height: "100%" }}>
          <Image
            src={pngPath}
            alt="Profile Avatar"
            fill
            style={{ objectFit: "cover" }}
          />
        </Box>
      </Avatar>
    </ButtonBase>
  );
};

interface IconButtonWithTitleProps extends IconButtonProps {
  titleName: string;
}

const IconButtonWithTitle: React.FC<IconButtonWithTitleProps> = ({ titleName, pngPath, handleClick }) => {
  return (
    <Box
      sx={{ justifyItems: "center" }}
    >
      <Typography
        sx={{ fontSize: { xs: "1.2rem", sm: "1.4rem", md: "1.6rem", lg: "1.8rem" } }}
      >{titleName}
      </Typography>
      <IconButton
        pngPath={pngPath}
        handleClick={handleClick}
      />
    </Box>
  );
};

export { IconButton, IconButtonWithTitle };