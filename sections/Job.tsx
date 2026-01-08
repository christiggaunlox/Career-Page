"use client"

import React, { useRef } from 'react';
import { MapPin, Briefcase, Clock, Zap, ChevronLeft, ChevronRight, IndianRupee } from 'lucide-react';

// 1. Interface
interface Job {
    id: number;
    title: string;
    company: string;
    location: string;
    salary: string;
    type: string;
    experience: string;
    status: string;
    statusType: string;
    logo: string;
}

const JOBS_DATA: Job[] = [
    { id: 1, title: "Sr. Visual Designer", company: "Google Cloud", location: "Bangalore, India", salary: "₹ 3,00,000 - 4,00,000/ Year", type: "Remote/Hybrid", experience: "1-3 Years Exp", status: "Posted: 1 week ago", statusType: "secondary", logo: "job/GoogleLogo.svg" },
    { id: 2, title: "Product Manager", company: "Google Cloud", location: "Bangalore, India", salary: "3 - 4 LPA", type: "Remote/Hybrid", experience: "1-3 Years Exp", status: "Actively Hiring", statusType: "primary", logo: "job/GoogleLogo.svg" },
    { id: 3, title: "Data Analyst", company: "Google Cloud", location: "Bangalore, India", salary: "3 - 4 LPA", type: "Remote/Hybrid", experience: "1-3 Years Exp", status: "Actively Hiring", statusType: "primary", logo: "job/GoogleLogo.svg" },
    { id: 4, title: "AI/ML developer", company: "Google Cloud", location: "Bangalore, India", salary: "3 - 4 LPA", type: "Remote/Hybrid", experience: "1-3 Years Exp", status: "Actively Hiring", statusType: "primary", logo: "job/GoogleLogo.svg" },
    { id: 5, title: "AI/ML developer 2", company: "Google Cloud", location: "Bangalore, India", salary: "3 - 4 LPA", type: "Remote/Hybrid", experience: "1-3 Years Exp", status: "Actively Hiring", statusType: "primary", logo: "job/GoogleLogo.svg" },
    { id: 6, title: "AI/ML developer 3", company: "Google Cloud", location: "Bangalore, India", salary: "3 - 4 LPA", type: "Remote/Hybrid", experience: "1-3 Years Exp", status: "Actively Hiring", statusType: "primary", logo: "job/GoogleLogo.svg" }
];

const JobCard = ({ job }: { job: Job }) => (
    <div className="bg-[#E7F0FF]/80 backdrop-blur-sm rounded-3xl p-7 flex flex-col h-full border border-white/50 hover:shadow-sm transition-all duration-300">
        <div className="mb-6 mt-4">
            <span className={`text-xs px-4 py-2 rounded-full font-medium tracking-wider bg-[#C7DEFF] text-[#5B6F8E]`}>
                {job.status}
            </span>
        </div>

        <div className="flex justify-between items-start mb-6">
            <div>
                <h3 className="text-xl font-medium text-gray-800 tracking-tight leading-snug truncate pr-2">{job.title}</h3>
                <p className="text-gray-400 mt-1">{job.company}</p>
            </div>
            <div className="bg-white p-1 rounded-full shrink-0 shadow-sm relative bottom-[-25] flex items-center justify-center w-10 h-10 overflow-hidden">
                <img src={job.logo} alt={`${job.company} logo`} className="w-90% h-90% object-contain" />
            </div>
        </div>

        <div className="w-full h-[1.5px] bg-gray-400/30 mb-6" />

        <div className="space-y-3 mb-8 flex-grow">
            <div className="flex items-center text-black text-sm font-medium">
                <MapPin size={18} className="mr-3 text-gray-400" /> {job.location}
            </div>
            <div className="flex items-center text-black text-sm font-medium">
                <IndianRupee size={18} className="mr-3 text-gray-400" /> {job.salary}
            </div>
            <div className="flex items-center text-black text-sm font-medium">
                <Briefcase size={18} className="mr-3 text-gray-400" /> {job.type}
            </div>
            <div className="flex items-center text-black text-sm font-medium">
                <Clock size={18} className="mr-3 text-gray-400" /> {job.experience}
            </div>
        </div>

        <button className="w-full bg-[#0061FF] text-sm hover:bg-blue-700 text-white py-2.5 rounded-full flex items-center justify-center gap-2 transition-all active:scale-[0.98]">
            <Zap size={16} /> View Job
        </button>
    </div>
);

export default function CareersDashboard() {
    const scrollRef = useRef<HTMLDivElement>(null);

    const scroll = (direction: 'left' | 'right') => {
        if (scrollRef.current) {
            const { clientWidth } = scrollRef.current;
            const scrollAmount = direction === 'left' ? -clientWidth : clientWidth;
            scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
        }
    };

    return (
        <div
            className="relative min-h-screen py-16 px-6 md:px-12 lg:px-20 font-sans overflow-hidden"
            style={{
                backgroundColor: '#FFFFFF', // Fallback base color
                backgroundImage: `
            linear-gradient(to right, rgba(200, 215, 235, 0.2) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(200, 215, 235, 0.2) 1px, transparent 1px),
            linear-gradient(to bottom, #FFFFFF 0%, #C7DFFF66 60%)
        `,
                backgroundSize: '70px 40px, 40px 40px, 100% 100%', // Match grid size for first two, full size for the third
                backgroundRepeat: 'repeat, repeat, no-repeat'
            }}
        >

            <div className="relative max-w-[1400px] mx-auto z-10">
                <header className="mb-12">
                    <span className="px-5 py-2 border-1 border-[#0373FF] text-[#0373FF] rounded-full text-md font-light bg-transparent backdrop-blur-sm">
                        Current Roles
                    </span>

                    <div className="flex flex-col md:flex-row md:items-end justify-between mt-8 gap-6">
                        <h1 className="text-4xl font-medium text-gray-800 leading-[1.15]">
                            See what we are <br /> currently hiring for.
                        </h1>

                        <div className="flex gap-3">
                            <button onClick={() => scroll('left')} className="p-2 rounded-full bg-[#C7DEFF] text-[#5A6F8E] hover:bg-blue-200 transition-colors shadow-sm">
                                <ChevronLeft size={28} strokeWidth={2.5} />
                            </button>
                            <button onClick={() => scroll('right')} className="p-2 rounded-full bg-[#C7DEFF] text-[#5A6F8E] hover:bg-blue-200 transition-colors shadow-sm">
                                <ChevronRight size={28} strokeWidth={2.5} />
                            </button>
                        </div>
                    </div>
                </header>

                <div
                    ref={scrollRef}
                    className="flex gap-6 overflow-x-auto scrollbar-hide snap-x snap-mandatory pb-4"
                    style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                >
                    {JOBS_DATA.map((job) => (
                        <div key={job.id} className="snap-start shrink-0 w-full sm:w-[calc(50%-12px)] lg:w-[calc(25%-18px)]">
                            <JobCard job={job} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}