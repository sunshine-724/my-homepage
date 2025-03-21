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
        // headerBackground: {
        //     main: "#40E0D0",
        //     dark: "#621B16",
        //     light: "#FEECEB",
        // },
    },
});

export default theme;
