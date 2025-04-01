"use client"
import { Box} from "@mui/material";
import ContactAddress from "./contactAddress"
import Caution from "./caution"

export default function Inquiry() {
  const commonTextStyles = {
    color: "#ffffff",
    //iPaddAirはsm,iPadProはmd,それ以上はlg
    fontSize: { xs: "1.0rem", sm: "1.5rem", md: "1.5rem", lg: "2.5rem" },
  };

  const commonTopBoxStyles = {
    justifyContent: "flex-start",
    backgroundColor: "#40E0D0",
    width: { xs: "100%", md: "50%" },
    height: { xs: "50%", md: "100%" },
    borderRadius: "10px"
  };

  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" }, // スマホなら縦, それ以上は横
          alignItems: "center",
          justifyContent: "center",
          margin: "1rem",
          gap: "1rem",
        }}
      >
        <ContactAddress
          commonTopBoxStyles={commonTopBoxStyles}
          commonTextStyles={commonTextStyles}
        />
        <Caution
          commonTopBoxStyles={commonTopBoxStyles}
          commonTextStyles={commonTextStyles}
        />
      </Box>
    </>
  );
}
