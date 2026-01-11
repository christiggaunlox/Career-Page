"use client";

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Hero = () => {

    const imageList = [
        { id: 1, src: "hero/img1.jpeg", height: "md:h-[550px]" },
        { id: 2, src: "hero/img2.jpeg", height: "md:h-[400px]" },
        { id: 3, src: "hero/img3.jpeg", height: "md:h-[350px]" },
        { id: 4, src: "hero/img4.jpeg", height: "md:h-[450px]" },
    ];

    const extendedList = [...imageList, ...imageList.slice(0, 3)];

    const [currentIndex, setCurrentIndex] = useState(0);
    const [isSnapping, setIsSnapping] = useState(false);

    const [visibleItems, setVisibleItems] = useState(3);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 768) {
                setVisibleItems(1);
            } else {
                setVisibleItems(3);
            }
        };

        // Set initial value
        handleResize();

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    useEffect(() => {
        const interval = setInterval(() => {
            // Check if we have reached the end of the original list
            if (currentIndex >= imageList.length) {
                setIsSnapping(true);
                setCurrentIndex(0);
            } else {
                setIsSnapping(false);
                setCurrentIndex((prev) => prev + 1);
            }
        }, 2500);

        return () => clearInterval(interval);
    }, [currentIndex, imageList.length]);

    // Handle the specific snap-back logic seamlessly
    useEffect(() => {
        if (isSnapping) {
            const timer = setTimeout(() => {
                setIsSnapping(false);
                setCurrentIndex(1);
            }, 20);
            return () => clearTimeout(timer);
        }
    }, [isSnapping]);

    return (
        <section className="relative overflow-hidden bg-white font-sans w-full min-h-screen flex flex-col pt-10 md:pt-0">
            {/* Curve Arc */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden bg-transparent pointer-events-none opacity-0 md:opacity-100">
                <div
                    className="
                        absolute left-1/2 -translate-x-1/2
                        top-[-60px] md:top-[-420px]
                        w-[140%] md:w-[60%] h-[200px] md:h-[500px]
                        rounded-[100%]
                        border-2 border-[#D6E3F4]
                        [mask-image:linear-gradient(to_right,transparent_0%,transparent_15%,black_30%,black_70%,transparent_85%,transparent_100%)]
                        [-webkit-mask-image:linear-gradient(to_right,transparent_0%,transparent_15%,black_30%,black_70%,transparent_85%,transparent_100%)]
                    "
                />
                <div
                    className="
                        absolute left-1/2 -translate-x-1/2
                        top-[-60px] md:top-[-340px]
                        w-[140%] md:w-[60%] h-[200px] md:h-[500px]
                        rounded-[100%]
                        bg-transparent
                        blur-xs
                        shadow-[0_0_200px_#D0E5FF,inset_0_0_50px_#D0E5FF]
                        "
                />
            </div>

            {/* Header Text */}
            <div className="relative max-w-7xl mx-auto px-6 text-center mt-12 md:mt-20 mb-10">
                <div className="mb-10 md:mb-16">
                    <h1 className="text-4xl md:text-7xl font-sans font-semibold text-[#00284D] mb-6 tracking-tight bg-transparent">
                        Where Talent <br/> Feels at home.
                    </h1>
                    <p className="max-w-4xl mx-auto text-[#516C86] text-lg md:text-xl leading-relaxed">
                        Life at Unlox blends purpose and passion, where collaboration feels natural and every day moves us closer to creating meaningful impact for millions of students across India.
                    </p>
                </div>
            </div>

            {/* IMAGE SLIDER */}
            <div className="relative w-full overflow-hidden pb-10">
                <motion.div
                    className="flex items-end"
                    animate={{
                        // UPDATED: Math uses visibleItems instead of hardcoded '3'
                        x: `-${currentIndex * (100 / visibleItems)}%`,
                    }}
                    transition={{
                        duration: isSnapping ? 0 : 0.8,
                        ease: "easeInOut",
                    }}
                >
                    {extendedList.map((img, idx) => {
                        const isLeaving = idx === currentIndex - 1;
                        // UPDATED: Logic uses visibleItems to know which item is "entering" the frame
                        const isEntering = idx === currentIndex + visibleItems;

                        return (
                            <div
                                key={`${img.id}-${idx}`}
                                // UPDATED: basis-full for mobile (100% width), 1/3 for desktop
                                className="flex-shrink-0 basis-full md:basis-1/3 px-2 box-border"
                            >
                                <motion.div
                                    // UPDATED: Default h-[400px] for mobile, dynamic 'md:h-...' for desktop
                                    className={`h-[400px] ${img.height} w-full rounded-[2.5rem] overflow-hidden flex items-center justify-center`}

                                    animate={{
                                        // UPDATED: Less aggressive scaling on entering/leaving for cleaner mobile look
                                        scale: isLeaving ? 0.9 : isEntering ? 0.9 : 1,
                                    }}
                                    initial={{ scale: 0.85 }}
                                    transition={{
                                        duration: 0.8,
                                        ease: "easeInOut",
                                    }}
                                >
                                    <img
                                        src={img.src}
                                        alt={`Hero ${img.id}`}
                                        className="w-full h-full object-cover"
                                        onError={(e) => {
                                            e.currentTarget.src = "https://via.placeholder.com/400x500?text=Image+Not+Found";
                                        }}
                                    />
                                </motion.div>
                            </div>
                        );
                    })}
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;