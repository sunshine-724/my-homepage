"use client"
import {createTheme} from '@mui/material/styles';

// // カスタムカラー用の型拡張
// declare module '@mui/material/styles' {
//     interface Palette {
//         headerBackground: PaletteColor;
//     }
//     interface PaletteOptions {
//         headerBackground?: PaletteColorOptions;
//     }
// }

const theme = createTheme({
    palette: {
        background: {
            default: '#fafafa', //普通の背景色
            paper: '#f0f0f0', //Cardコンポーネントなどの背景色
        },
    },
});

export default theme;
