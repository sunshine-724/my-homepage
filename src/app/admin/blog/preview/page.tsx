import { Typography } from "@mui/material";
import { useRouter } from "next/router";

export default function PreviewPage(){
    const router = useRouter();
    return(
        <>
            <Typography>これはブログのプレビューページです</Typography>
        </>
    )
}