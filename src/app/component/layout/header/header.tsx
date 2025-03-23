"use client"; //use系を使うならいる(appディレクトリ下はRSCを前提にしているので、クライアントサイドから動かす必要がある)
/*元コードURL("https://mui.com/material-ui/react-app-bar/?srsltid=AfmBOopL4BI8_4ZzD8PukjY4VKh3uurnSSFwdX7vfyEeb0l6xETJAI8w#app-bar-with-responsive-menu")*/

import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import { colors } from '@mui/material';

import { useRouter } from 'next/navigation';

const pages = ['ポートフォリオ', '自己紹介', 'ブログ', 'お問い合わせ', 'お知らせ'];

function Header() {
  const router = useRouter()
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);

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
    <AppBar position="static" sx={{ background: "#40E0D0" }}>
      <Container maxWidth="xl">
        <Typography
          sx={{
            textAlign: 'center',
            fontSize: "2.0rem",
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          Sunshineのホームページ
        </Typography>
        <Toolbar disableGutters>
          {/* xs:スマホなら,md:900px以上なら */}
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: 'space-between', alignItems: 'center' }}>
            {pages.map((page, index) => (
              <Button
                key={page}
                onClick={() => handlePageTransiton(index)}
                sx={{
                  my: 2,
                  color: 'white',
                  display: 'block',
                  fontSize: '1.5rem',
                  flexGrow: 1, // 均等に配置
                  textAlign: 'center',
                }}
              >
                {page}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Header;