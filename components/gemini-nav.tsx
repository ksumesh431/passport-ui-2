'use client';
import React, { useState, useEffect, useRef } from 'react';
import { HamburgerMenuIcon } from '@radix-ui/react-icons';
import { Button, Flex } from '@radix-ui/themes';
import Rbutton from './radix-button';

function GeminiNav() {
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
        <nav className="bg-slate-100 text-black relative">
            <div className="container mx-auto px-4 py-2 flex justify-between items-center">
                <div className="flex items-center">
                    <h1 className="text-lg font-bold">My App</h1>
                </div>

                {/* Desktop menu */}
                <div className="hidden md:flex space-x-4">



                        <Rbutton />
                        <Button variant="outline">Options</Button>
                        <Button variant="outline">Options</Button>
                        <Button variant="outline">Options</Button>
                        <Button variant="outline">Options</Button>
 

                </div>

                {/* Hamburger button */}
                <button
                    ref={buttonRef}
                    className="md:hidden focus:outline-none"
                    onClick={toggleMenu}
                    aria-label="Toggle menu"
                >
                    <HamburgerMenuIcon className="w-6 h-6" />
                </button>
            </div>

            {/* Mobile dropdown menu */}
            <div
                ref={menuRef}
                className={`absolute top-full right-0 bg-slate-100 text-black p-4 rounded-md shadow-md transform transition-all duration-300 ease-in-out w-48 ${isMenuOpen ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'
                    }`}
            >
                <div className="flex flex-col space-y-3">
                    <Rbutton />

                    <Button variant="outline">Options</Button>
                </div>
            </div>
        </nav>
    );
}

export default GeminiNav;