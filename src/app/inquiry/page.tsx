import Header from "../component/layout/header/header"
import Footer from "../component/layout/footer/footer"
import theme from "../theme"
import { ThemeProvider } from "@mui/material";

export default function Inquiry() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Header />
        お問い合わせ
        <br>
        </br>
        <Footer />
      </ThemeProvider>
    </>
  );
}
