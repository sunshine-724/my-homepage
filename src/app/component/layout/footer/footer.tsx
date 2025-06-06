/*元コードURL:https://mui.com/material-ui/react-bottom-navigation/ (スマホ版で参考にするかも)*/

"use client"
import * as React from 'react';
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';

export default function Footer() {
  return (
    //justify-:子要素の横方向の配置を決める
    //align-:子要素の縦方向の配置を決める

    //content：ボックス内全体に対して
    //items：ボックス内にあるアイテム全てに対して
    //self：設定されたアイテムに対して (flexbox内では使用できない)

    <Box
      sx={{
        display: 'flex',
        background: "#40E0D0",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        paddingTop: 2,
        paddingBottom: 2
      }}>
      {/* 中央配置のTypography */}
      <Typography
        sx={{
          color: 'white',
          fontSize: "1.0rem",
          textAlign: 'center',
          marginBottom: { xs: 1, md: 0 }, // スマホ時は下に余白
        }}
      >
        2025 Sunshineのホームページ All rights reserved.
      </Typography>
    </Box>
  );
}
