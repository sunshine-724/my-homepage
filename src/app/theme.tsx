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
            default: '#fafafa',
            paper: '#fff',
        },
    },
});

export default theme;
