"use client";
import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { ChipData } from "@/types/chip";
import { Typography, Box, Chip, Button } from "@mui/material";
import { useChipColors } from "@/app/component/ProjectCard/useChipColors";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

export default function PreviewPage() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const { getChipColor } = useChipColors(); //チップを取得する関数を取得


  const [inputTitle, setInputTitle] = useState("");
  const [inputContent, setInputContent] = useState("");
  const [aboutTechChips, setAboutTechChips] = useState<Record<string, ChipData>>({});

  const today = new Date();


  useEffect(() => {
    const title = searchParams?.get("inputTitle") || "";
    const content = searchParams?.get("inputContent") || "";
    const chipsJson = searchParams?.get("aboutTechChips");

    setInputTitle(title);
    setInputContent(content);

    if (chipsJson) {
      try {
        const parsed = JSON.parse(chipsJson);
        setAboutTechChips(parsed);
      } catch (e) {
        console.error("Failed to parse aboutTechChips:", e);
      }
    }
  }, [searchParams]);

  return (
    <>
      <Box sx={{
        display: "flex",
        flexDirection: "column",
      }}>
        <Box sx={{ width: { xs: "30%", md: "10%" } }}>
          <Button size="large"
            onClick={() => router.push('/admin/blog/makeBlogPage')}
            sx={{
              background: "#696969", color: "white", width: "100%", height: "100%", fontSize: "1.5rem", borderRadius: "12px"
            }}>
            戻る
          </Button>
        </Box>

        <Typography sx={{ fontSize: "1.4rem", color: "red", textAlign: "center", marginTop: "20px" }}>これはブログのプレビューページです</Typography>
        <Typography variant="h2" sx={{ fontSize: "2.8rem", textAlign: "center", marginTop: "20px" }}>
          {inputTitle}
        </Typography>
        <Typography variant="h6" sx={{ fontSize: "1.2rem", textAlign: "center", marginTop: "10px" }}>
          {today.getFullYear()}-{today.getMonth() + 1}-{today.getDate()}
        </Typography>
        <ReactMarkdown remarkPlugins={[remarkGfm]}>{inputContent}</ReactMarkdown>

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
          }}
        >
          <Typography variant="body1">選択したChipsは以下の通りです</Typography>
          <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap', justifyContent: "center" }}>
            {aboutTechChips &&
              Object.entries(aboutTechChips).map(([name]) => (
                <Chip
                  key={name}
                  label={name}
                  sx={{
                    backgroundColor: getChipColor(name),
                    color: "#f8f8f8",
                  }}
                />
              ))
            }
          </Box>
        </Box>
        <Box sx={{ width: { xs: "30%", md: "10%", alignSelf: "flex-end", marginTop: "auto" } }}>
          <Button size="large"
            onClick={() => router.push('/')}
            sx={{
              background: "#696969", color: "white", width: "100%", height: "100%", fontSize: "1.5rem", borderRadius: "12px"
            }}>
            投稿する
          </Button>
        </Box>
      </Box>
    </>
  );
}

