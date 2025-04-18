"use client";
import React, { useState } from "react";
import { Swiper as SwiperClass } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

interface MediaSwiperProps {
    files: string[];
    defaultDelay?: number;
    title?: string;
}

const MediaSwiper: React.FC<MediaSwiperProps> = ({ files, defaultDelay = 5000, title = "" }) => {
    const [slideDelay, setSlideDelay] = useState(defaultDelay);

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
                    <SwiperSlide key={index}>
                        {isVideo ? (
                            <video
                                src={file}
                                controls
                                autoPlay
                                muted
                                loop
                                style={{
                                    maxWidth: "50%",
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
                                    maxWidth: "50%",
                                    maxHeight: "20%",
                                    height: "auto",
                                    display: "block",
                                    margin: "0 auto",
                                    borderRadius: "10px"
                                }}
                            />
                        )}
                    </SwiperSlide>
                );
            })}
        </Swiper>
    );
};

export default MediaSwiper;
