import React from 'react';
import { Phone, Mail } from 'lucide-react';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-white text-gray-800 pt-12 pb-6 px-6 md:px-16 font-sans">
            <div className="max-w-7xl mx-auto">
                {/* Top Section: Logo */}
                <div className="mb-10">
                    <div className="flex items-center gap-1">
                        {/* Replace 'logo.png' with your actual file path */}
                        <img
                            src="Logo.svg"
                            alt="UNLOX Logo"
                            className="h-10 w-auto object-contain"
                        />
                    </div>
                </div>

                <hr className="border-black mb-10" />

                {/* Main Links Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
                    {/* Quick Links */}
                    <div>
                        <h3 className="font-semibold mb-4 text-lg">Quick Links</h3>
                        <ul className="space-y-2 text-sm text-black font-light">
                            <li><a href="#" className="hover:text-blue-600">About</a></li>
                            <li><a href="#" className="hover:text-blue-600">Unlox Careers</a></li>
                            <li><a href="#" className="hover:text-blue-600">Unlox Blog</a></li>
                            <li><a href="#" className="hover:text-blue-600">For Business</a></li>
                            <li><a href="#" className="hover:text-blue-600">Campus Ambassador</a></li>
                        </ul>
                    </div>

                    {/* Programs */}
                    <div>
                        <h3 className="font-semibold mb-4 text-lg">Programs</h3>
                        <ul className="space-y-2 text-sm text-black font-light">
                            <li><a href="#" className="hover:text-blue-600">Mentorship Programs</a></li>
                            <li><a href="#" className="hover:text-blue-600">Global Internship</a></li>
                            <li><a href="#" className="hover:text-blue-600">Research Paper</a></li>
                        </ul>
                    </div>

                    {/* Unlox Academy */}
                    <div>
                        <h3 className="font-semibold mb-4 text-lg">Unlox Academy</h3>
                        <ul className="space-y-2 text-sm text-black font-light">
                            <li><a href="#" className="hover:text-blue-600">Student Community</a></li>
                            <li><a href="#" className="hover:text-blue-600">Free Live Sessions</a></li>
                            <li><a href="#" className="hover:text-blue-600">Webinars</a></li>
                            <li><a href="#" className="hover:text-blue-600">Ask "Blu"</a></li>
                            <li><a href="#" className="hover:text-blue-600">Ai Mock Interviews</a></li>
                            <li><a href="#" className="hover:text-blue-600">Ai Resume Building</a></li>
                        </ul>
                    </div>

                    {/* Support */}
                    <div>
                        <h3 className="font-semibold mb-4 text-lg">Support</h3>
                        <div className="space-y-4 text-sm text-black font-light">
                            <div className="flex flex-col">
                                <a href="mailto:support@unlox.com" className="hover:text-blue-600 flex items-center gap-2">
                                    <Mail size={18} className="text-black font-light" />
                                    <span>support@unlox.com</span>
                                </a>
                                <span className="flex items-center gap-2"><Phone size={18} className="text-black font-light" />080 6548 4568</span>
                            </div>
                            <div className="flex flex-col">
                                <a href="mailto:Business@unlox.com" className="hover:text-blue-600 flex items-center gap-2">
                                    <Mail size={18} className="text-black font-light" />
                                    <span>Business@unlox.com</span>
                                </a>
                                <span className="flex items-center gap-2"><Phone size={18} className="text-black font-light" />080 5544 66 88</span>
                            </div>
                            <div className="flex flex-col">
                                <a href="mailto:Marketing@unlox.com" className="hover:text-blue-600 flex items-center gap-2">
                                    <Mail size={18} className="text-black font-light" />
                                    <span>Marketing@unlox.com</span>
                                </a>
                                <span className="flex items-center gap-2"><Phone size={18} className="text-black font-light" />080 2489 3568</span>
                            </div>
                        </div>
                    </div>
                </div>

                <hr className="border-black mb-10" />

                {/* Bottom Domains Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                    {/* Browse Domains */}
                    <div>
                        <h3 className="font-semibold mb-4 text-lg">Browse Domains</h3>
                        <ul className="space-y-2 text-sm text-black font-light">
                            <li>Artificial Intelligence</li>
                            <li>Data Science</li>
                            <li>Data Analysis</li>
                            <li>UI/UX Design</li>
                            <li>Web Development</li>
                            <li>Metaverse</li>
                            <li>Human Resources</li>
                            <li>Digital Marketing</li>
                        </ul>
                    </div>

                    {/* Global Internship */}
                    <div>
                        <h3 className="font-semibold mb-4 text-lg">Global Internship</h3>
                        <ul className="space-y-2 text-sm text-black font-light">
                            <li>USA</li>
                            <li>UK</li>
                            <li>Canada</li>
                            <li>Dubai</li>
                            <li>Russia</li>
                            <li>Germany</li>
                        </ul>
                    </div>

                    {/* Research Paper */}
                    <div>
                        <h3 className="font-semibold mb-4 text-lg">Research Paper</h3>
                        <ul className="space-y-2 text-sm text-black font-light">
                            <li>Computer Science</li>
                            <li>Electrical & Electronics</li>
                            <li>Mechanical / Civil</li>
                            <li>Management</li>
                            <li>Aeronautical</li>
                            <li>BioTechnology</li>
                        </ul>
                    </div>
                </div>

                {/* Legal Footer */}
                <div className="flex flex-col font-light md:flex-row justify-between items-center text-xs text-gray-400 border-t border-black pt-6">
                    <div className="flex gap-4 mb-4 md:mb-0">
                        <a href="#" className="hover:underline">Security</a>
                        <span>|</span>
                        <a href="#" className="hover:underline">Terms</a>
                        <span>|</span>
                        <a href="#" className="hover:underline">Privacy</a>
                        <span>|</span>
                        <span>Copyright © {currentYear} UnloxAcademy</span>
                    </div>
                    <p>Unlox - Learning Made Easy</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;