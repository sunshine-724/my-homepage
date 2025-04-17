"use client"
import { Card, CardActionArea, CardMedia, CardContent, Typography, Chip, Box } from "@mui/material";
import React, { useState } from "react";
import { useChipColors } from "./useChipColors"; // フックをインポート
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Swiper as SwiperClass } from "swiper"; // 型として使う
import { Swiper, SwiperProps, SwiperSlide } from "swiper/react"; // コンポーネントとして使う
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

interface ProjectCardProps {
    files?: string[];
    title: string;
    description: string;
    chips: string[];
}

const ProjectCard: React.FC<ProjectCardProps> = ({ files = [], title, description, chips }) => {
    const { getChipColor } = useChipColors(); // フックから関数を取得
    const DEFAULT_SLIDE_DELAY = 5000; // デフォルト 5秒
    const [slideDelay, setSlideDelay] = useState(DEFAULT_SLIDE_DELAY);

    return (
        <Card sx={{ minWidth: "100%", maxWidth: "100%" }}>
            {files.length > 0 && (
                <Swiper
                    modules={[Navigation, Pagination, Autoplay]}
                    spaceBetween={10}
                    slidesPerView={1} // 1枚ずつ表示
                    centeredSlides={true}
                    navigation // 左右の矢印ナビゲーション
                    pagination={{ clickable: true }} // ページネーション（ドット）
                    autoplay={{ delay: slideDelay, disableOnInteraction: false }} // 動画の長さに応じて変更

                    // onSlideChange={(swiper) => {
                    //     const nextFile = files[swiper.activeIndex];
                    //     const isNextVideo = nextFile.endsWith(".mp4") || nextFile.endsWith(".webm");

                    //     if (!isNextVideo) {
                    //         console.log(`🖼️ 次のスライドは画像 → 自動スライド時間を ${DEFAULT_SLIDE_DELAY / 1000} 秒にリセット`);
                    //         setSlideDelay(DEFAULT_SLIDE_DELAY); // 画像ならデフォルトの値に戻す
                    //     }
                    // }}

                    onTransitionStart={(swiper) => {
                        const nextFile = files[(swiper as SwiperClass).realIndex];
                        const isNextVideo = nextFile.endsWith(".mp4") || nextFile.endsWith(".webm");

                        if (!isNextVideo) {
                            console.log(`🖼️ 次のスライドは画像 → 自動スライド時間を ${DEFAULT_SLIDE_DELAY / 1000} 秒にリセット`);
                            setSlideDelay(DEFAULT_SLIDE_DELAY); // 画像ならデフォルトのスライド時間に戻す
                        } else {
                            console.log(`🎥 次のスライドは動画 (${nextFile})`);

                            // 動画の長さを取得するために一時的に <video> を作成
                            const video = document.createElement("video");
                            video.src = nextFile;
                            video.preload = "metadata"; // メタデータのみを先読み
                            video.onloadedmetadata = () => {
                                const duration = Math.ceil(video.duration * 1000); // 秒数をミリ秒に変換
                                console.log(`🎞️ 動画の長さ: ${duration / 1000} 秒`);
                                setSlideDelay(duration); // 取得した秒数をスライド遅延に適用
                            };
                        }
                    }}
                >
                    {files.map((file, index) => {
                        const isVideo = file.endsWith(".mp4") || file.endsWith(".webm"); //そのファイルがビデオかどうか
                        return (
                            <SwiperSlide key={index}>
                                {isVideo ? (
                                    <video
                                        src={file}
                                        controls
                                        autoPlay
                                        muted
                                        loop={true}
                                        style={{
                                            Width: "50%",
                                            height: "auto",
                                            display: "block",
                                            margin: "0 auto",
                                            borderRadius: "10px",
                                        }}
                                    />
                                ) : (
                                    <img
                                        src={file}
                                        alt={`${title} ${index + 1}`}
                                        style={{
                                            maxWidth: "50%",  // 画像の最大幅
                                            height: "auto",    // アスペクト比を維持
                                            display: "block",  // 余計な隙間をなくす
                                            margin: "0 auto",  // 中央配置
                                            borderRadius: "10px"
                                        }}
                                    />
                                )}
                            </SwiperSlide>
                        );
                    })}
                </Swiper>
            )}
            <CardContent>
                <Typography gutterBottom variant="h4">
                    {title}
                </Typography>
                <ReactMarkdown remarkPlugins={[remarkGfm]}>{description}</ReactMarkdown>
            </CardContent>
            <Box sx={{ display: "flex", gap: 1, p: 2 }}>
                {chips.map((chip, index) => (
                    <React.Fragment key={index}>
                        <Chip
                            label={chip}
                            sx={{ backgroundColor: getChipColor(chip), color: "#f8f8f8" }} // 背景色適用
                        />
                    </React.Fragment>
                ))}
            </Box>
        </Card>
    );
};

export default ProjectCard;
