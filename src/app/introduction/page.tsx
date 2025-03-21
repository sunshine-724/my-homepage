import Header from "../component/layout/header/header"
import Footer from "../component/layout/footer/footer"
import theme from "../theme"
import { ThemeProvider } from "@mui/material";

export default function Introduction() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Header />
        自己紹介
        <br>
        </br>
        <Footer />
      </ThemeProvider>
    </>
  );
}
