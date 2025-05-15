"use client";
import React, { useEffect, useState } from "react";
import { Swiper as SwiperClass } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

interface MediaSwiperProps {
    files: string[];
    defaultDelay?: number;
    slideHeight?: string;
    title?: string;
    mediaStyle?: React.CSSProperties;
}


const MediaSwiper: React.FC<MediaSwiperProps> = ({
    files,
    defaultDelay = 5000,
    title = "",
    slideHeight = "auto",
    mediaStyle = {},
}) => {
    const [slideDelay, setSlideDelay] = useState(defaultDelay);

    const commonMediaStyle: React.CSSProperties = {
        maxWidth: "50%",
        height: "auto",
        display: "block",
        margin: "0 auto",
        borderRadius: "10px",
        objectFit: "contain",
        aspectRatio: "16 / 9", // 必要に応じて変更可能
        ...mediaStyle,
    }

    return (
        <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={10}
            slidesPerView={1}
            centeredSlides={true}
            navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: slideDelay, disableOnInteraction: false }}
            onTransitionStart={(swiper) => {
                const nextFile = files[(swiper as SwiperClass).realIndex];
                const isNextVideo = nextFile.endsWith(".mp4") || nextFile.endsWith(".webm");

                if (!isNextVideo) {
                    setSlideDelay(defaultDelay);
                } else {
                    const video = document.createElement("video");
                    video.src = nextFile;
                    video.preload = "metadata";
                    video.onloadedmetadata = () => {
                        const duration = Math.ceil(video.duration * 1000);
                        setSlideDelay(duration);
                    };
                }
            }}
        >
            {files.map((file, index) => {
                const isVideo = file.endsWith(".mp4") || file.endsWith(".webm");
                return (
                    <SwiperSlide style={{ height: slideHeight, display: "flex", alignItems: "center", justifyContent: "center" }}>
                        {isVideo ? (
                            <video
                                src={file}
                                controls
                                autoPlay
                                muted
                                loop
                                style={commonMediaStyle}
                            />
                        ) : (
                            <img
                                src={file}
                                alt={`${title} ${index + 1}`}
                                style={commonMediaStyle}
                            />
                        )}
                    </SwiperSlide>
                );
            })}
        </Swiper>
    );
};
export default MediaSwiper;
