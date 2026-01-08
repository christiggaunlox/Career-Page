"use client"

import { motion, AnimatePresence } from 'framer-motion';
import { ArrowDownLeft } from 'lucide-react';
import { useState } from 'react';

const features = [
    {
        id: '01',
        title: 'Mission that Matters',
        description: 'Contribute to making education accessible, simple, and impactful for students across India.',
        image: 'why/img1.png',
    },
    {
        id: '02',
        title: 'Innovation-Driven Culture',
        description: 'Build solutions across AI, learning products, and future-ready education models.',
        image: 'why/img2.png',
    },
    {
        id: '03',
        title: 'Growth Without Limits',
        description: 'Access continuous learning, internal upskilling, and opportunities to explore new roles.',
        image: 'why/img3.png',
    },
    {
        id: '04',
        title: 'Ownership at Every Level',
        description: 'Experience a culture where your ideas are valued and your decisions drive real change.',
        image: 'why/img4.png',
    },
    {
        id: '05',
        title: 'People Who Inspire',
        description: 'Work alongside passionate teams who believe in meaningful work, not just busy work.',
        image: 'why/img5.png',
    },
    {
        id: '06',
        title: 'Transparent & Healthy Environment',
        description: 'Zero unnecessary hierarchy, open communication, and a team-first mindset.',
        image: 'why/img6.png',
    },
];

const FeatureSection = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <div
            className="relative min-h-screen py-16 px-6 md:px-12 lg:px-20 font-sans overflow-hidden flex items-center justify-center"
            style={{
                backgroundColor: '#FFFFFF',
                backgroundImage: `
                    linear-gradient(to right, rgba(200, 215, 235, 0.2) 1px, transparent 1px),
                    linear-gradient(to bottom, rgba(200, 215, 235, 0.2) 1px, transparent 1px),
                    linear-gradient(to bottom, #C7DFFF66 0%, #FFFFFF 40%)
                `,
                backgroundSize: '70px 40px, 40px 40px, 100% 100%',
                backgroundRepeat: 'repeat, repeat, no-repeat'
            }}
        >
            <div className='absolute top-15 right-30'>
                <ArrowDownLeft size={140} />
            </div>
            <div className="max-w-7xl w-full z-10">
                {/* Header Section */}
                <div className="mb-12">
                    <span className="px-5 py-2 border-1 border-[#0373FF] text-[#0373FF] rounded-full text-md font-light bg-transparent backdrop-blur-sm">
                        Why Unlox
                    </span>
                    <h2 className="text-4xl font-medium text-gray-800 leading-[1.15] mt-8">
                        Shape the learning revolution.
                    </h2>
                </div>

                <div className="flex flex-col lg:flex-row gap-12 items-start">
                    {/* Left Side: Dynamic Image */}
                    <div className="w-full lg:w-1/2 relative h-[400px] md:h-[600px] overflow-hidden rounded-[2.5rem]">
                        <AnimatePresence>
                            <motion.img
                                key={activeIndex}
                                src={features[activeIndex].image}
                                alt={features[activeIndex].title}
                                initial={{ opacity: 0, scale: 1.1 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, filter: 'blur(10px)' }}
                                transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
                                className="absolute inset-0 w-full h-full object-cover"
                            />
                        </AnimatePresence>
                        {/* Overlay Gradient for depth */}
                        <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/10 to-transparent" />
                    </div>

                    {/* Right Side: Accordion List */}
                    <div className="w-full lg:w-1/2 flex flex-col gap-4">
                        {features.map((feature, index) => {
                            const isActive = activeIndex === index;
                            return (
                                <div
                                    key={feature.id}
                                    onClick={() => setActiveIndex(index)}
                                    className={`group cursor-pointer rounded-2xl transition-all duration-500 border-2 ${isActive
                                        ? 'bg-[#E7F0FF] border-none p-6'
                                        : 'bg-[#E7F0FF] border-transparent p-5'
                                        }`}
                                >
                                    <div className="flex justify-between items-center">
                                        <h3 className={`text-lg transition-colors duration-300 ${isActive ? 'text-[#1D1D1F] font-semibold !text-2xl transition-all duration-300' : 'text-[#1D1D1F] group-hover:text-gray-700 font-medium'
                                            }`}>
                                            {feature.title}
                                        </h3>
                                        <span className={`text-md font-mono transition-colors duration-300 text-[#1D1D1FD1]`}>
                                            {feature.id}
                                        </span>
                                    </div>

                                    <AnimatePresence>
                                        {isActive && (
                                            <motion.div
                                                initial={{ height: 0, opacity: 0, marginTop: 0 }}
                                                animate={{ height: 'auto', opacity: 1, marginTop: 16 }}
                                                exit={{ height: 0, opacity: 0, marginTop: 0 }}
                                                transition={{ duration: 0.4, ease: "circOut" }}
                                                className="overflow-hidden"
                                            >
                                                <p className="text-gray-600 leading-relaxed text-base">
                                                    {feature.description}
                                                </p>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FeatureSection;