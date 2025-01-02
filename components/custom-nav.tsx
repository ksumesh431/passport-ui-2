'use client';
import React, { useState, useEffect, useRef } from 'react';
import { HamburgerMenuIcon } from '@radix-ui/react-icons';
import { Button, Text, } from '@radix-ui/themes';
import Rbutton from './radix-button';
import RbuttonMobile from './radix-button-mobile';
import Link from 'next/link';
import { basePath } from '@/utils/config';

function CustomNav() {
    const menuClassNames = "center-items space-x-2 cursor-pointer select-none";
    const menuTextProps = {
        weight: 'bold' as const,
        size: '4' as const,
        className: menuClassNames,
        as: 'span' as const,
    };
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const menuRef = useRef<HTMLDivElement | null>(null);
    const buttonRef = useRef<HTMLButtonElement | null>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            // Check if the click is on any element with class 'rt-DropdownMenuContent'
            // or its children (Radix UI adds this class to dropdown content)
            const isClickInDropdown = (event.target as Element)?.closest('.rt-DropdownMenuContent');

            if (
                menuRef.current &&
                !menuRef.current.contains(event.target as Node) &&
                buttonRef.current &&
                !buttonRef.current.contains(event.target as Node) &&
                !isClickInDropdown // Only close if not clicking in dropdown
            ) {
                setIsMenuOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const toggleMenu = () => {
        console.log('Toggle menu', !isMenuOpen);
        setIsMenuOpen(!isMenuOpen);
    };
    const closeMenu = () => {
        setIsMenuOpen(false);
    };


    return (
        <nav className="bg-primary text-white sticky top-0 z-30 shadow-md">
            <div className="container mx-auto px-4 py-2 flex justify-center md:justify-between lg:justify-between items-center">
                {/* Icon/logo div */}

                <div className="flex items-center bg-primary px-4 py-2">
                    <Link href="/dashboard" className="flex items-center">
                        <img
                            src={`${basePath}/logo.webp`}
                            className="h-14 w-auto drop-shadow-md rounded-xl transition-transform duration-300 hover:scale-105 hover:drop-shadow-lg"
                            alt="DocoAid Logo"
                        />
                    </Link>
                </div>

                {/* Desktop menu */}
                <div className="hidden md:flex items-center space-x-9">
                    <Text {...menuTextProps}>
                        <Link href="/dashboard">
                            <span className="transition-transform duration-300 hover:scale-105 inline-block">Home</span>
                        </Link>
                    </Text>
                    <Text {...menuTextProps}>
                        <Link href="/about">
                            <span className="transition-transform duration-300 hover:scale-105 inline-block">About Us</span>
                        </Link>
                    </Text>
                    {/* Services */}
                    <Rbutton />
                    <Text {...menuTextProps}>
                        <Link href="/contactus">
                            <span className="transition-transform duration-300 hover:scale-105 inline-block">Contact Us</span>
                        </Link>
                    </Text>
                </div>


                {/* Hamburger button */}
                <button
                    ref={buttonRef}
                    className="md:hidden focus:outline-none absolute right-4"
                    onClick={toggleMenu}
                    aria-label="Toggle menu"
                >
                    <HamburgerMenuIcon className="w-6 h-6" />
                </button>
            </div>

            {/* Mobile dropdown menu */}
            <div
                ref={menuRef}
                className={`absolute top-full right-0 bg-slate-50 text-black p-4 rounded-md shadow-md transform transition-all duration-300 ease-in-out w-48 ${isMenuOpen ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'
                    }`}
            >
                <div className="flex flex-col space-y-3">
                    <Button
                        variant="soft"
                        highContrast
                        onClick={closeMenu}
                    >
                        <Link href="/dashboard">Home</Link>
                    </Button>

                    <RbuttonMobile closeParentMenu={closeMenu} />

                    <Button
                        variant="soft"
                        highContrast
                        onClick={closeMenu}
                    >
                        <Link href="/about">About Us</Link>
                    </Button>
                    <Button
                        variant="soft"
                        highContrast
                        onClick={closeMenu}
                    >
                        <Link href="/contactus">Contact Us</Link>
                    </Button>
                </div>
            </div>
        </nav>
    );
}

export default CustomNav;

