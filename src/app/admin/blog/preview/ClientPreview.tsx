"use client";
import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { ChipData } from "@/types/chip";
import { Typography, Box, Chip, Button } from "@mui/material";
import { useChipColors } from "@/app/component/ProjectCard/useChipColors";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { BlogDetail } from "@/types/blog";
import { PostTablePayload } from "@/types/payload/postTable"

async function handleClickNextPageButton(blogDetail: BlogDetail | undefined, router: ReturnType<typeof useRouter>) {

  if (blogDetail === undefined) {
    return;
  }
  const payload: PostTablePayload = {
    id: blogDetail.id,
    isPublished: true, // 今は仮でtrueにする
  }


  const res = await fetch("/api/blog/publishPostTable", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload)
  })

  if (!res.ok) {
    alert("正常に投稿できませんでした");
  } else {
    alert("正常に投稿できました");
    router.push(`/`);
  }
}

export default function PreviewPage() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const { getChipColor, getChipCategory } = useChipColors(); //チップの情報を取得する関数を取得


  const [blogDetail, setBlogDetail] = useState<BlogDetail>();
  const [inputTitle, setInputTitle] = useState("");
  const [inputContent, setInputContent] = useState("");
  const [aboutTechChips, setAboutTechChips] = useState<Record<string, ChipData>>({});

  const today = new Date();

  useEffect(() => {
    const id = searchParams?.get('encodedID') || "";
    if (id == "") return;

    (async () => {
      const res = await fetch("/api/blog/getDraftTableItem", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(id),
      })
      const data = await res.json();
      const blogDetail: BlogDetail = data;
      setBlogDetail(blogDetail);
    })();
  }, [searchParams]);

  useEffect(() => {
    if (!blogDetail) return;
    setInputTitle(blogDetail?.title);
    setInputContent(blogDetail?.content);
    const newChips = blogDetail.chips.reduce<Record<string, ChipData>>((acc, chip) => {
      acc[chip] = {
        color: getChipColor(chip),
        category: getChipCategory(chip),
      };
      return acc;
    }, {});
    setAboutTechChips(newChips);
  }, [blogDetail, getChipCategory, getChipColor]);

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
            onClick={() => handleClickNextPageButton(blogDetail, router)}
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

