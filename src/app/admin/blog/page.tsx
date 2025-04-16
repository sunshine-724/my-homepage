"use client";
import OriginTextField from "@/app/component/OriginTextField/OriginTextField";
import FileIcon from "@/app/component/FileIcon/FileIcon";
import CancelIcon from "@mui/icons-material/Cancel";
import DownloadIcon from "@mui/icons-material/Download";
import { Box, Button, Collapse, Typography } from "@mui/material";
import { useState } from "react";

function FileUploadSection({
    label,
    accept,
    multiple = false,
    onChange,
}: {
    label: string;
    accept: string;
    multiple?: boolean;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) {
    return (
        <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
            <Typography variant="h6">{label}</Typography>
            <input type="file" accept={accept} multiple={multiple} onChange={onChange} />
        </Box>
    );
}

function AttachmentList({
    files,
    onActionClick,
}: {
    files: File[];
    onActionClick: () => void;
}) {
    if (files.length === 0) return <Typography variant="body2">No files selected.</Typography>;

    return (
        <Box sx={{ display: "flex", flexDirection: "column", alignContent: "center" }}>
            {files.map((file, index) => (
                <Box key={index} sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 1 }}>
                    <FileIcon fileName={file.name} />
                    <Typography variant="h6">{file.name}</Typography>
                    <Box sx={{ display: "flex", gap: 1 }}>
                        <Button onClick={onActionClick}>
                            <DownloadIcon />
                        </Button>
                        <Button onClick={onActionClick}>
                            <CancelIcon />
                        </Button>
                    </Box>
                </Box>
            ))}
        </Box>
    );
}

export default function MakeBlogPage() {
    const [inputTitle, setInputTitle] = useState("");
    const [inputContent, setInputContent] = useState("");

    const [markdownFile, setMarkdownFile] = useState<File | null>(null);
    const [attachmentFiles, setAttachmentFiles] = useState<File[]>([]);

    const updateInputValue = (name: string, value: string) => {
        name === "title" ? setInputTitle(value) : setInputContent(value);
    };

    const handleMarkdownFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (!file) return alert("Markdownファイルを選択してください");

        if (file.name.endsWith(".md")) {
            setMarkdownFile(file);
        } else {
            setMarkdownFile(null);
            alert("Markdown（.md）ファイルのみを選択してください");
        }
    };

    const handleAttachmentChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const files = e.target.files;
        setAttachmentFiles(files ? Array.from(files) : []);
    };

    const handleDummyAction = () => {
        alert("Action triggered");
    };

    return (
        <Box sx={{ display: "flex", flexDirection: "column", gap: 4 }}>
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

            <FileUploadSection
                label="もしくはMarkdownファイルをアップロードしてください"
                accept=".md"
                onChange={handleMarkdownFileChange}
            />

            <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                <Typography variant="h4">Attachments</Typography>

                <Collapse in={attachmentFiles.length === 0}>
                    <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                        <Typography variant="body2">アップロード可能なファイル形式</Typography>
                        <Typography variant="body2">.pdf, .png, .jpg, .jpeg</Typography>
                        <FileUploadSection
                            label=""
                            accept=".pdf,.png,.jpg,.jpeg"
                            multiple
                            onChange={handleAttachmentChange}
                        />
                    </Box>
                </Collapse>

                <Collapse in={attachmentFiles.length > 0}>
                    <AttachmentList files={attachmentFiles} onActionClick={handleDummyAction} />
                </Collapse>
            </Box>
        </Box>
    );
}
