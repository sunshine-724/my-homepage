"use client";
import OriginTextField from "@/app/component/OriginTextField/OriginTextField";
import FileIcon from "@/app/component/FileIcon/FileIcon"
import CancelIcon from '@mui/icons-material/Cancel';
import DownloadIcon from '@mui/icons-material/Download';
import { Box, Button, Collapse,Typography } from "@mui/material";
import { useState } from "react";

export default function MakeBlogPage() {
    const [inputTitle, setInputTitle] = useState("");
    const [inputContent, setInputContent] = useState("");

    const [markdownFile, setMarkdownFile] = useState<File | null>(null);
    const [attachmentFiles, setAttachmentFiles] = useState<File[]>([]);

    const [hasFile, setHasFile] = useState(false);

    const updateInputValue = (name: string, value: string) => {
        if (name === "title") {
            setInputTitle(value);
        } else if (name === "content") {
            setInputContent(value);
        }
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

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const selectedFiles = event.target.files;

        if (selectedFiles) {
            setAttachmentFiles(Array.from(selectedFiles)); //Array.from(キャスト)
            setHasFile(true);
        } else {
            setHasFile(false);
        }
    };

    const handleButton = () => {
        console.log("hello,world");
    }

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
                    onChange={(val) => updateInputValue("title", val)}
                />
                <OriginTextField
                    title="Contents(GitHub Flavored Markdown対応)"
                    boxWidth="50%"
                    onChange={(val) => updateInputValue("content", val)}
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
                    <Collapse in={!hasFile}>
                        <input
                            type="file"
                            accept=".pdf,.png,.jpg,.jpeg" //バリデーション
                            // multiple //複数ファイルのアップロード
                            onChange={handleFileChange} //ファイル選択時のイベント
                        />
                    </Collapse>
                    <Collapse in={hasFile}>
                        <Box>
                            {hasFile && attachmentFiles && attachmentFiles.length > 0 ? (
                                <Box sx={{ display: 'flex', flexDirection: 'row' }}>
                                    {attachmentFiles.map((file, index) => (
                                        <Box key={index} sx={{ marginBottom: '8px' }}>
                                            <Button onClick={handleButton}>
                                                <FileIcon fileName={file.name}></FileIcon>
                                            </Button>
                                            <Button onClick={handleButton}>
                                                <Typography variant="body2">{file.name}</Typography>
                                            </Button>
                                            <Button onClick={handleButton}>
                                                <DownloadIcon />
                                            </Button>
                                            <Button onClick={handleButton}>
                                                <CancelIcon />
                                            </Button>
                                        </Box>
                                    ))}
                                </Box>
                            ) : (
                                <Typography variant="body2">No files selected.</Typography>
                            )}
                        </Box>
                    </Collapse>
                </Box>
            </Box>
        </>

    );
}
