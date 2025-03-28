/*参考URL https://qiita.com/k2hmr/items/a5b19f3b65376a595310 */
"use client"
import Header from "../component/layout/header/header"
import Footer from "../component/layout/footer/footer"
import ClipBoard from "../component/ClipBoard/ClipBoard"
import theme from "../theme"
import { Box, Button, IconButton, Link, ThemeProvider, Typography } from "@mui/material";
import TwitterIcon from '@mui/icons-material/Twitter';
import { GitHub } from "@mui/icons-material"
import EmailIcon from '@mui/icons-material/Email';
import InsertLinkIcon from '@mui/icons-material/InsertLink';

export default function Inquiry() {
  const commonBoxStyles = {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    height: "100%",
  };

  const commonIconStyles = {
    color: "#ffffff",
    fontSize: { xs: "1.0rem", sm: "1.5rem", md: "2.0rem", lg: "2.5rem" },
  };

  const commonTextStyles = {
    color: "#ffffff",
    fontSize: { xs: "1.0rem", sm: "1.5rem", md: "2.0rem", lg: "2.5rem" },
  };

  return (
    <>
      <ThemeProvider theme={theme}>
        <Header />
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", sm: "row" }, // スマホなら縦, それ以上は横
            alignItems: "center",
            justifyContent: "center",
            margin: "1rem",
            width: "100%",
          }}
        >
          <Box sx={{
            justifyContent: "flex-start",
            backgroundColor: "#40E0D0",
          }}>
            <Typography
              sx={commonTextStyles}
            >
              各種連絡先&SNSリンク
            </Typography>
            <Box>
              <Box sx={commonBoxStyles}>
                <EmailIcon sx={commonIconStyles} />
                <Typography
                  sx={{
                    ...commonTextStyles,
                    padding: "3px",
                  }
                  }
                >
                  Email:
                </Typography>
                <ClipBoard
                  text="k.n.sunshinez16@gmail.com"
                  sx={{
                    textTransform: "none",
                    color: "#ffffff",
                    fontSize: { xs: "0.8rem", sm: "1.2rem", md: "1.6rem", lg: "2.0rem" },
                  }}
                />
              </Box>
              <Box sx={commonBoxStyles}>
                <TwitterIcon sx={commonIconStyles} />
                <Typography sx={commonTextStyles}>Twitter:</Typography>
                <Button onClick={() => window.open("https://twitter.com/Sunshine4154", "_blank")} sx={{ textTransform: "none" }}>
                  <Typography sx={{ ...commonTextStyles }}>@Sunshine4154</Typography>
                  <InsertLinkIcon sx={commonIconStyles} />
                </Button>
              </Box>

              <Box sx={commonBoxStyles}>
                <GitHub sx={commonIconStyles} />
                <Typography sx={commonTextStyles}>GitHub:</Typography>
                <Button onClick={() => window.open("https://github.com/sunshine-724", "_blank")} sx={{ textTransform: "none" }}>
                  <Typography sx={{ ...commonTextStyles }}>sunshine-724</Typography>
                  <InsertLinkIcon sx={commonIconStyles} />
                </Button>
              </Box>
            </Box>
          </Box>
          <Box sx={{ backgroundColor: "#40E0D0" }}>
            <Typography
              sx={{
                ...commonTextStyles,
              }}
            >
              補足
            </Typography>
            <Typography
              color="#ffffff"
              variant="body2"
              sx={{
                whiteSpace: "pre-line", /*改行を反映させるために必要なスタイル*/
              }}
            >
              {
                `
                ・このWebサイトは個人の趣味で作成したものであり、商用利用はできません
                ・このWebサイトの内容は予告なく変更される場合がありますので、ご了承ください
                ・通常3日以内に返信しますが、連絡がない場合はお手数ですが再度ご連絡ください
                ・このWebサイトで何か不具合があった場合は以下のGithubのIssuesにてご連絡ください
                ・連絡先は変更される場合がありますので、最新の情報はこのWebサイトをご確認ください
                `
              }
            </Typography>
            <Button onClick={() => window.open("https://github.com/sunshine-724/my-homepage/issues", "_blank")} sx={{ textTransform: "none" }}>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <Typography
                  variant="body2"
                >
                  このWebサイトのGithub
                </Typography>
                <GitHub />
              </Box>
            </Button>
          </Box>
        </Box>
        <Footer />
      </ThemeProvider >
    </>
  );
}
