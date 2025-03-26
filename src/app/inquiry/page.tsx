"use client"
import Header from "../component/layout/header/header"
import Footer from "../component/layout/footer/footer"
import ClipBoard from "../component/ClipBoard/ClipBoard"
import theme from "../theme"
import { Box, Button, IconButton, ThemeProvider, Typography } from "@mui/material";
import TwitterIcon from '@mui/icons-material/Twitter';
import { GitHub } from "@mui/icons-material"
import EmailIcon from '@mui/icons-material/Email';

export default function Inquiry() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Header />
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            width: "100%",
            height: "100%",
          }}
        >
          <EmailIcon
            sx={{
              fontSize: { xs: "1.0rem", sm: "1.5rem", md: "2.0rem", lg: "2.5rem" },
            }}
          />
          <Typography
            sx={{
              fontSize: { xs: "1.0rem", sm: "1.5rem", md: "2.0rem", lg: "2.5rem" },
            }}
          >
            Email:
          </Typography>
          <ClipBoard
            text="k.n.sunshinez16@gmail.com"
            sx={{
              textTransform: "none",
              fontSize: { xs: "1.0rem", sm: "1.5rem", md: "2.0rem", lg: "5.0rem" },
              backgroundColor: "white",
              color: "black",
            }}
          />
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            width: "100%",
            height: "100%",
          }}
        >
          <TwitterIcon
            sx={{
              fontSize: { xs: "1.0rem", sm: "1.5rem", md: "2.0rem", lg: "2.0rem" }
            }}
          />
          <Typography
            sx={{
              fontSize: { xs: "1.0rem", sm: "1.5rem", md: "2.0rem", lg: "2.5rem" },
            }}
          >
            Twitter:
          </Typography>
          <Button
            onClick={() => window.open("https://twitter.com/Sunshine4154", "_blank")}
            sx={{
              textTransform: "none",
            }}
          >
            <Typography
              sx={{
                fontSize: { xs: "1.0rem", sm: "1.5rem", md: "2.0rem", lg: "2.5rem" },
              }}
            >
              @Sunshine4154
            </Typography>
          </Button>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            width: "100%",
            height: "100%",
          }}
        >
          <GitHub
            sx={{
              fontSize: { xs: "1.0rem", sm: "1.5rem", md: "2.0rem", lg: "2.0rem" }
            }}
          />
          <Typography
            sx={{
              fontSize: { xs: "1.0rem", sm: "1.5rem", md: "2.0rem", lg: "2.5rem" },
            }}
          >
            GitHub:
          </Typography>
          <Button
            onClick={() => window.open("https://github.com/sunshine-724", "_blank")}
            sx={{
              textTransform: "none",
            }}
          >
            <Typography
              sx={{
                fontSize: { xs: "1.0rem", sm: "1.5rem", md: "2.0rem", lg: "2.5rem" },
              }}
            >
              sunshine-724
            </Typography>
          </Button>
        </Box>
        <Footer />
      </ThemeProvider >
    </>
  );
}
