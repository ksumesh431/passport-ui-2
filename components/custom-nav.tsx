'use client';
import React, { useState, useEffect, useRef } from 'react';
import { HamburgerMenuIcon } from '@radix-ui/react-icons';
import { Button, Text, } from '@radix-ui/themes';
import Rbutton from './radix-button';
import RbuttonMobile from './radix-button-mobile';
import Link from 'next/link';

function CustomNav() {
    const menuClassNames = "center-items space-x-2 cursor-pointer";
    const menuTextProps = {
        weight: 'bold' as const,
        size: '2' as const,
        className: menuClassNames,
        as: 'span' as const,
    };
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const menuRef = useRef<HTMLDivElement | null>(null);
    const buttonRef = useRef<HTMLButtonElement | null>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (
                menuRef.current &&
                !menuRef.current.contains(event.target as Node) &&
                buttonRef.current &&
                !buttonRef.current.contains(event.target as Node)
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

    return (
        <nav className="bg-white text-black sticky top-0 z-10 shadow-md">
            <div className="container mx-auto px-4 py-2 flex justify-center items-center">
                {/* Left side (Logo + Menu items) */}
                <div className="flex items-center space-x-8">
                    {/* Icon/logo div */}
                    <div className="flex items-center">
                        <Link href="/dashboard"><img src="logo.jpeg" className="h-10 w-auto" alt="Docoaid Logo" /> </Link>
                    </div>

                    {/* Desktop menu */}
                    <div className="hidden md:flex space-x-9">
                        <Rbutton />
                        <Text {...menuTextProps}>
                            <Link href="/about"><span>Options</span></Link>

                        </Text>
                        <Text {...menuTextProps}>
                            <Link href="/about"><span>Options</span></Link>

                        </Text>
                        <Text {...menuTextProps}>
                            <Link href="/about"><span>Options</span></Link>

                        </Text>

                    </div>
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
                    <RbuttonMobile />
                    <Button variant="outline"><Link href="/about">Options</Link></Button>
                    <Button variant="outline"><Link href="/about">Options</Link></Button>
                    <Button variant="outline"><Link href="/about">Options</Link></Button>
                    <Button variant="outline"><Link href="/about">Options</Link></Button>

                </div>
            </div>
        </nav>
    );
}

export default CustomNav;
