//このtsxファイルはこのファイル以下の階層のページにおける共通レイアウトを決める
import "./globals.css";
import Header from "./component/layout/header/header";
import { Box } from "@mui/material";
import Footer from "./component/layout/footer/footer";

const HEADER_HEIGHT = 140;  // ヘッダーの高さを定数化

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <html>
        <body>
          <Header />
          <Box sx={{ marginTop: `${HEADER_HEIGHT}px`, minHeight: "100vh" }}>
            {children}
          </Box>
          <Footer />
        </body>
      </html>
    </>
  );
}