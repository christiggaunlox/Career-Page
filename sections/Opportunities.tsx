import React from 'react';
import { ArrowUpRight } from 'lucide-react';

const CareerBentoGrid = () => {
  return (
    <div 
      className="relative min-h-screen py-16 px-6 md:px-12 lg:px-20 font-sans overflow-hidden flex items-center justify-center"
      style={{
        backgroundColor: '#FFFFFF',
        backgroundImage: `
          linear-gradient(to right, rgba(200, 215, 235, 0.2) 1px, transparent 1px),
          linear-gradient(to bottom, rgba(200, 215, 235, 0.2) 1px, transparent 1px)
        `,
        backgroundSize: '70px 40px, 40px 40px, 100% 100%',
        backgroundRepeat: 'repeat, repeat, no-repeat'
      }}
    >
      {/* Main Container: Stack vertically on mobile/tablet (flex-col), horizontal on large screens (xl:flex-row) */}
      <div className="flex flex-col xl:flex-row gap-12 xl:gap-2 justify-end items-start max-w-7xl w-full relative z-10">

        {/* Left Section: Header */}
        {/* Adjusted spacing and width for mobile */}
        <div className="flex-1 flex flex-col justify-between py-2 pr-0 xl:pr-8 mr-0 xl:mr-6 self-stretch w-full xl:w-auto">
          <div>
            <span className="px-5 py-2 border border-[#0373FF] text-[#0373FF] rounded-full text-sm font-light bg-white/50 backdrop-blur-sm">
              Opportunities
            </span>
            <h1 className="text-4xl md:text-5xl font-medium text-gray-800 leading-[1.15] mt-8">
              A career that opens new horizons.
            </h1>
            <p className="mt-4 text-black font-light text-lg leading-relaxed max-w-md">
              Grow through opportunities that elevate your skills, thinking, and future.
            </p>
          </div>
          
          {/* Adjusted Arrow: Scaled down on mobile to fit screen better */}
          <div className="mt-8 xl:mt-auto pt-0 xl:pt-12 transform scale-75 origin-left lg:scale-100">
            <ArrowUpRight size={180} strokeWidth={1.5} />
          </div>
        </div>

        {/* The Grid of Boxes */}
        {/* Mobile: Vertical Stack | Tablet: Horizontal Row (flex-row) with wrap if needed */}
        <div className="flex flex-col md:flex-row gap-4 w-full xl:w-auto justify-center xl:justify-start">
          
          {/* Column 1 */}
          {/* Width: Full on mobile, Fixed [260px] on desktop */}
          <div className="flex flex-col gap-4 w-full md:w-[260px] flex-shrink-0">
            <div className="bg-[#003E8B] text-white p-8 rounded-3xl flex flex-col h-[320px] justify-between shadow-sm">
              <h3 className="text-2xl font-medium leading-tight">Discover New Domain</h3>
              <p className="text-md opacity-80 leading-relaxed">Watch your ideas turn into products used by thousands of learners.</p>
            </div>
            <div className="bg-[#71AFFCD1] text-black p-8 rounded-3xl flex items-end h-[240px] shadow-sm">
              <h3 className="text-2xl font-medium leading-tight">Build Future Skills</h3>
            </div>
          </div>

          {/* Column 2 */}
          <div className="flex flex-col gap-4 w-full md:w-[260px] flex-shrink-0">
            <div className="bg-[#0373FF] text-white p-8 rounded-3xl flex items-end h-[240px] shadow-sm">
              <h3 className="text-2xl font-medium leading-tight">Real-World Exposure</h3>
            </div>
            <div className="bg-[#D4E7FF] text-slate-900 p-8 rounded-3xl flex flex-col h-[320px] justify-between shadow-sm">
              <h3 className="text-2xl font-medium leading-tight">See Impact Up Close</h3>
              <p className="text-md text-black opacity-80 leading-relaxed">Watch your ideas turn into products used by thousands of learners.</p>
            </div>
          </div>

          {/* Column 3 */}
          <div className="flex flex-col gap-4 w-full md:w-[260px] flex-shrink-0">
            <div className="bg-white border-2 border-black p-8 rounded-3xl flex flex-col h-[320px] justify-between shadow-sm">
              <h3 className="text-2xl text-black font-medium leading-tight">Work With The Best</h3>
              <p className="text-md text-black opacity-80 leading-relaxed font-light">Collaborate with mentors, industry experts, and our academic partners.</p>
            </div>
            <div className="bg-[#012756] text-white p-8 rounded-3xl flex items-end h-[240px] shadow-sm">
              <h3 className="text-2xl font-medium leading-tight">Grow Beyond Your Roles</h3>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default CareerBentoGrid;