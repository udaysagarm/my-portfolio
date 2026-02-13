"use client";

import React, { useState, useEffect } from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'About', href: '#about' },
        { name: 'Experience', href: '#experience' },
        { name: 'Work', href: '#projects' },
        { name: 'Skills', href: '#skills' },
        { name: 'Contact', href: '#contact' },
    ];

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${scrolled ? 'bg-black/80 backdrop-blur-md border-white/5 py-4' : 'bg-transparent border-transparent py-6'
                }`}
        >
            <div className="container-wide flex justify-between items-center">
                {/* Logo */}
                <a href="#home" className="text-xl font-bold tracking-tighter hover:opacity-80 transition-opacity">
                    UDAY
                </a>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <a key={link.name} href={link.href} className="nav-link">
                            {link.name}
                        </a>
                    ))}
                </nav>

                {/* Socials / Mobile Menu Placeholder */}
                <div className="flex items-center gap-4">
                    <a href="https://github.com/udaysagarm" target="_blank" rel="noreferrer" className="text-white/60 hover:text-white transition-colors">
                        <FaGithub size={20} />
                    </a>
                    <a href="http://linkedin.com/in/udaymeka" target="_blank" rel="noreferrer" className="text-white/60 hover:text-white transition-colors">
                        <FaLinkedin size={20} />
                    </a>
                </div>
            </div>
        </header>
    );
};

export default Navbar;
