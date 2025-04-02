"use client"; //use系を使うならいる(appディレクトリ下はRSCを前提にしているので、クライアントサイドから動かす必要がある)
/*元コードURL("https://mui.com/material-ui/react-app-bar/?srsltid=AfmBOopL4BI8_4ZzD8PukjY4VKh3uurnSSFwdX7vfyEeb0l6xETJAI8w#app-bar-with-responsive-menu")*/

import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

import { useRouter } from 'next/navigation';
import HeaderAnimatedButton from './HeaderAnimatedButton';

import { motion, useMotionValueEvent, useScroll } from 'framer-motion';
import { useEffect, useState } from 'react';
import { Collapse } from '@mui/material';

const pages = ['ポートフォリオ', '自己紹介', 'ブログ', 'お問い合わせ', 'お知らせ'];

function Header() {
  const router = useRouter();
  const { scrollY } = useScroll(); //これはreactの機能ではなく、framer-motionの機能なので、描画を更新したいならuseEffectの中で使う必要がある


  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);

  const [scrollState, setScrollState] = useState<boolean>(true); //このヘッダの状態を管理
  const [lastScrollY, setLastScrollY] = useState<number>(0); //最後のスクロール位置を管理

  useMotionValueEvent(scrollY, "change", (currentScrollY) => {

    if (currentScrollY > lastScrollY) {
      console.log("下スクロール → ヘッダー非表示");
      setScrollState(false);
    } else {
      console.log("上スクロール → ヘッダー表示");
      setScrollState(true);
    }
    setLastScrollY(currentScrollY);
  });

  // 🟢 ちゃんと動いてるか確認
  useEffect(() => {
    console.log("scrollState:", scrollState);
  }, [scrollState]);

  const handlePageTransiton = (pageNumber: number) => {
    switch (pageNumber) {
      case 0:
        router.push('/portfolio')
        break
      case 1:
        router.push('/introduction')
        break
      case 2:
        router.push('/blog')
        break
      case 3:
        router.push('/inquiry')
        break
      case 4:
        router.push('/notification')
        break
      default:
        alert("存在しないページです")
        console.error("エラーです")
    }
    setAnchorElNav(null);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }} // 初期状態は透明で上に少し離れた位置
      animate={{
        opacity: scrollState ? 1 : 0, // スクロール状態に応じて透明度を変更
        y: scrollState ? 0 : -50,      // 上にスクロールしたら位置を元に戻し、下にスクロールしたら上に戻す
      }}
      transition={{
        duration: 0.7,   // アニメーションの時間を少し長く設定
        ease: "easeOut", // イージングを指定
      }}

      // initial={{ opacity: 1 }}
      // animate={{ opacity: scrollState ? 1 : 0 }}
      // transition={{ duration: 0.5, ease: "easeInOut" }}

      style={{
        position: "fixed", // 固定
        top: 0,
        left: 0,
        width: "100%",
        zIndex: 1100, // ← AppBar(1000) より上にする！(motion.divもz-indexを持つので注意)
        pointerEvents: scrollState ? "auto" : "none", // 非表示時はクリック無効
      }}
    >
      <AppBar position="fixed" sx={{ background: "#40E0D0", top: 0, left: 0, width: "100%", height: "125px", zIndex: 1000 }}>
        <Container maxWidth="xl">
          <Typography
            sx={{
              textAlign: 'center',
              fontSize: { xs: '1.8rem', sm: "2.0rem" },
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            Sunshineのホームページ
          </Typography>
          <Toolbar disableGutters sx={{ display: { xs: "none", sm: "flex" } }}>
            {/* xs:スマホなら,md:900px以上なら */}
            <Box sx={{ flexGrow: 1, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              {pages.map((page, index) => (
                <Box key={page} sx={{ display: 'block' }}>
                  <HeaderAnimatedButton
                    page={page}
                    index={index}
                    handlePageTransition={handlePageTransiton}
                  />
                </Box>
              ))}
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </motion.div>
  );
}
export default Header;