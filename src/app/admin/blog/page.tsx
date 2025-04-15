"use client";
import OriginTextField from "@/app/component/OriginTextField/OriginTextField";
import { Box, Typography } from "@mui/material";
import { useState } from "react";

export default function MakeBlogPage() {
    const [inputs, setInputs] = useState("");
    const [markdownFile, setMarkdownFile] = useState<File | null>(null);

    const updateInputValue = (value: string) => {
        setInputs(value);
    };

    const handleMarkdownFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const selectedFile = event.target.files?.[0];

        if (selectedFile) {
            if (selectedFile.name.endsWith('.md')) {
                setMarkdownFile(selectedFile);
            } else {
                setMarkdownFile(null);
                alert('Markdown（.md）ファイルのみを選択してください');
            }
        } else {
            setMarkdownFile(null);
            alert('markdownファイルを選択してください');
        }
    };

    return (
        <>
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    gap: 4, // 子要素の縦の間隔
                }}
            >
                <OriginTextField
                    title="Title"
                    boxWidth="50%"
                    onChange={(val) => updateInputValue(val)}
                />
                <OriginTextField
                    title="Contents(GitHub Flavored Markdown対応)"
                    boxWidth="50%"
                    onChange={(val) => updateInputValue(val)}
                />
                <Box
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        // alignContent: "center", なぜかContentだとうまくいかない
                    }}
                >
                    <Typography
                        variant="h6"
                        sx={{ display: "flex" }}
                    >もしくはMarkdownファイルをアップロードしてください
                    </Typography>
                    <input
                        type="file"
                        accept=".md" //バリデーション
                        // multiple //複数ファイルのアップロード
                        onChange={handleMarkdownFileChange} //ファイル選択時のイベント
                    />
                </Box>
                <Box
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                    }}
                >
                    <Typography variant="h4">Attachments</Typography>
                    <input
                        type="file"
                        accept=".pdf" //バリデーション
                        // multiple //複数ファイルのアップロード
                        onChange={handleMarkdownFileChange} //ファイル選択時のイベント
                    />
                </Box>
            </Box>
        </>

    );
}
