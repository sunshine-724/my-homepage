"use client";
import OriginTextField from "@/app/component/OriginTextField/OriginTextField";
import FileIcon from "@/app/component/FileIcon/FileIcon";
import CancelIcon from "@mui/icons-material/Cancel";
import DownloadIcon from "@mui/icons-material/Download";
import { Backdrop, Box, Button, Chip, Collapse, Typography } from "@mui/material";
import { useState } from "react";
import { useChipColors } from "@/app/component/ProjectCard/useChipColors";
import { ChipList } from "@/types/chip";
import { useRouter } from "next/navigation";

function FileUploadSection({ label, accept, multiple = false, onChange, }: { label: string; accept: string; multiple?: boolean; onChange: (e: React.ChangeEvent<HTMLInputElement>) => void; }) {
    return (
        <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
            <Typography variant="h6">{label}</Typography>
            <input type="file" accept={accept} multiple={multiple} onChange={onChange} />
        </Box>
    );
}

function AttachmentList({ files, onActionClick }: { files: File[]; onActionClick: () => void; }) {
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

function DisplayTechnicalList({ selectedChips, setSelectedChips, }: { selectedChips: ChipList | null; setSelectedChips: React.Dispatch<React.SetStateAction<ChipList | null>>; }) {
    const [isClicked, setIsClicked] = useState(false);

    const { getAllChips, getChipColor } = useChipColors(); //チップを取得する関数を取得

    const chipList = getAllChips();

    const groupedChips: Record<string, { name: string; color: string; category: string }[]> =
        Object.entries(chipList).reduce((acc, [name, data]) => {
            const chipWithName = { name, ...data };
            if (!acc[data.category]) {
                acc[data.category] = [];
            }
            acc[data.category].push(chipWithName);
            return acc;
        }, {} as Record<string, { name: string; color: string; category: string }[]>);


    //Chipがクリックされたら
    const handleChipClick = (chip: { name: string; color: string; category: string }) => {
        setSelectedChips((prev) => {
            if (!prev) {
                return { [chip.name]: { color: chip.color, category: chip.category } }; // 初回選択
            }

            // すでに存在する場合 → 削除
            if (chip.name in prev) {
                const updated = { ...prev };
                delete updated[chip.name];
                return updated;
            }

            // 存在しない場合 → 追加
            return {
                ...prev,
                [chip.name]: { color: chip.color, category: chip.category },
            };
        });
    };


    return (
        <>
            <Collapse in={!isClicked}>
                {!selectedChips || Object.keys(selectedChips).length === 0 ? (
                    <Button
                        size="large"
                        sx={{ background: "#40E0D0", color: "white", textTransform: "none" }}
                        onClick={() => setIsClicked(true)}
                    >
                        Chipsを選択してください
                    </Button>
                ) : (
                    <>
                        <Box
                            sx={{
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "center", // ✅ 要素を水平方向に中央寄せ
                                textAlign: "center",  // ✅ テキストも中央に
                            }}
                        >
                            <Typography variant="body1">選択したChipsは以下の通りです</Typography>
                            <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap', justifyContent: "center" }}>
                                {Object.entries(selectedChips).map(([name]) => (
                                    <Chip
                                        key={name}
                                        label={name}
                                        sx={{
                                            backgroundColor: getChipColor(name),
                                            color: "#f8f8f8",
                                        }}
                                    />
                                ))}
                            </Box>
                        </Box>
                    </>
                )}
            </Collapse>

            <Collapse in={isClicked}>
                {/*Backdrop:薄いグレーのレイヤーを挿入する*/}
                <Backdrop
                    open={isClicked}
                    sx={{ zIndex: 1400 }}
                    onClick={() => setIsClicked(false)}
                >
                    <Box // ← 全画面ボックス（親）
                        onClick={(e) => e.stopPropagation()} // ← Box内部をクリックしたときは閉じない
                        sx={{ position: "fixed", left: "5%", width: "90%", height: "90%", overflowY: "auto", backgroundColor: "white", zIndex: 1500, boxShadow: 3, borderRadius: 2, p: 3 }}
                    >
                        {Object.entries(groupedChips).map(([category, chips]) => (
                            <Box key={category} sx={{ mb: 4 }}>
                                <Typography variant="h6" sx={{ mb: 1 }}>{category}</Typography>
                                <Box sx={{ display: "flex", flexWrap: "wrap", gap: 2, justifyContent: "flex-start" }}>
                                    {chips.map((chip) => {
                                        const isSelected = selectedChips && chip.name in selectedChips;

                                        return (
                                            <Button
                                                key={chip.name}
                                                variant="contained"
                                                sx={{
                                                    background: isSelected ? "#1E90FF" : "#40E0D0", // 選択中は青系、それ以外はターコイズ
                                                    color: "white"
                                                }}
                                                onClick={() => handleChipClick(chip)}
                                            >
                                                {chip.name}
                                            </Button>
                                        );
                                    })}
                                </Box>
                            </Box>
                        ))}

                    </Box>
                </Backdrop>
            </Collapse>
        </>
    )
}

function handleClickNextPageButton(inputTitle: string, inputContent: string, markdownFile: File | null, router: ReturnType<typeof useRouter>) {
    console.log(markdownFile);
    router.push(`/admin/blog/preview?inputTitle=${encodeURIComponent(inputTitle)}&inputContent=${encodeURIComponent(inputContent)}`);
}

export default function MakeBlogPage() {
    /*データ*/
    const [inputTitle, setInputTitle] = useState(""); //タイトル
    const [inputContent, setInputContent] = useState(""); //内容

    const [aboutTechChips, setAboutTechChips] = useState<ChipList | null>(null); //関連技術

    const [markdownFile, setMarkdownFile] = useState<File | null>(null); //Markdownファイル
    const [attachmentFiles, setAttachmentFiles] = useState<File[]>([]); //添付ファイル

    const router = useRouter();

    const updateInputValue = (name: string, value: string) => {
        if (name === "title") {
            setInputTitle(value);
        } else {
            setInputContent(value);
        }
    };


    const handleMarkdownFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0]; //ファイルは一つを想定
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
        <>
            <Box sx={{ position: "relative", minHeight: "90vh" }}>
                <Box sx={{ width: "10%", height: "10%" }}>
                    <Button onClick={() => router.push('/')} sx={{ background: "#40E0D0", color: "white", width: "100%", height: "100%" }}>
                        戻る
                    </Button>
                </Box>
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
                            <Box sx={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
                                <Button onClick={handleDummyAction} sx={{ background: "#40E0D0", color: "white" }}>
                                    ファイル選択をやり直す
                                </Button>
                                <Button onClick={handleDummyAction} sx={{ background: "#40E0D0", color: "white" }}>
                                    ファイルを追加する
                                </Button>
                            </Box>
                        </Collapse>
                    </Box>
                    <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                        <Typography variant="h4">Chips</Typography>
                        <DisplayTechnicalList selectedChips={aboutTechChips} setSelectedChips={setAboutTechChips}></DisplayTechnicalList>
                    </Box>
                </Box>
                <Box sx={{ position: "absolute", right: "10px", bottom: "10px", width: "20%", height: "10%" }}>
                    <Button
                        onClick={() => handleClickNextPageButton(inputTitle, inputContent, markdownFile, router)}
                        sx={{ background: "#40E0D0", color: "white", width: "100%", height: "100%" }}
                    >
                        プレビューへ
                    </Button>
                </Box>
            </Box >
        </>
    );
}
