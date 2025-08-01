import "./globals.css";
import { Metadata } from "next";
import Header from "./component/layout/header/header";
import { Box } from "@mui/material";
import Footer from "./component/layout/footer/footer";
import Script from "next/script";

const HEADER_HEIGHT_PC = 140;
const HEADER_HEIGHT_SMARTPHONE = 50;
const FOOTER_HEIGHT = 55;

export const metadata: Metadata = {
  title: "Sunshineのホームページ",
  description: "Sunshineのホームページです",
  icons: {
    icon: "/fish.ico",          // 通常のfavicon
    shortcut: "/icon/fish.jpg",           // ショートカット用
    apple: "/icon/fish.jpg",     // Appleデバイス用
  },
};

const GA_ID = process.env.NEXT_PUBLIC_GA_ID || "";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <head>
        {GA_ID && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
              strategy="afterInteractive"
            />
            <Script
              id="gtag-init"
              strategy="afterInteractive"
              dangerouslySetInnerHTML={{
                __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', '${GA_ID}', {
                    page_path: window.location.pathname,
                  });
                `,
              }}
            />
          </>
        )}
      </head>
      <body style={{ margin: 0 }}>
        <Header />
        <Box
          sx={{
            marginTop: { xs: `${HEADER_HEIGHT_SMARTPHONE}px`, md: `${HEADER_HEIGHT_PC}px` },
            minHeight: {xs: `calc(100vh - ${HEADER_HEIGHT_SMARTPHONE}px - ${FOOTER_HEIGHT}px)`,md:`calc(100vh - ${HEADER_HEIGHT_PC}px - ${FOOTER_HEIGHT}px)`,}
          }}
        >
          {children}
        </Box>
        <Footer />
      </body>
    </html>
  );
}
