import Header from "../component/layout/header/header"
import Footer from "../component/layout/footer/footer"
import theme from "../theme"
import { ThemeProvider } from "@mui/material";

export default function Notification() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Header />
        お知らせ
        <br>
        </br>
        <Footer />
      </ThemeProvider>
    </>
  );
}
