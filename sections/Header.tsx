import React from 'react';

const Header = () => {
    const navLinks = [
        { name: 'About Us', href: '#' },
        { name: 'Programs', href: '#' },
        { name: 'Global Internship', href: '#' },
        { name: 'Research Paper', href: '#' },
        { name: 'Community', href: '#' },
    ];

    return (
        <header className="w-full h-[90px] flex items-center justify-between px-10 py-5 bg-white border-b border-black-800">
            <div className='justify-self-start'>
                {/* 1. Logo Placeholder */}
                <div className="flex items-center min-w-[150px]">
                    <img className="h-[45px] w-[180px]" src="Logo.svg" alt="" />
                </div>
            </div>

            <div className='flex justify-self-end'>
                {/* 2. Navigation Links */}
                <nav className="hidden lg:flex items-center space-x-10">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="relative text-[15px] font-medium text-gray-800 transition-colors duration-200 hover:text-[#007bff] group py-1"
                        >
                            {link.name}
                            {/* Hover Underline effect */}
                            <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-[#007bff] transition-all duration-300 group-hover:w-full"></span>
                        </a>
                    ))}
                </nav>

                {/* 3. Contact Us Button */}
                <div className="flex items-center pl-10">
                    <button className="bg-[#007bff] text-white px-7 py-2.5 rounded-xl text-[15px] hover:bg-blue-600 transition-all active:scale-95 shadow-sm">
                        Contact Us
                    </button>
                </div>
            </div>
        </header>
    );
};

export default Header;