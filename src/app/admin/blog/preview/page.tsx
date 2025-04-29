"use client"
import { Typography } from "@mui/material";
import { useSearchParams } from "next/navigation";

export default function PreviewPage(){
    const searchParams = useSearchParams();

    const inputTitle = searchParams?.get('inputTitle') || '';
    const inputContent = searchParams?.get('inputContent') || '';
    return(
        <>
            <Typography>これはブログのプレビューページです</Typography>

            <Typography variant="h3">タイトル</Typography>
            <Typography variant="body2">{inputTitle}</Typography>
            <Typography variant="h3">本文</Typography>
            <Typography variant="body2">{inputContent}</Typography>
        </>
    )
}