'use client';
import React, { useState } from 'react';
import { DropdownMenu, Button, Text, Portal } from '@radix-ui/themes';
import Link from 'next/link';

const RbuttonMobile = () => {
    const [isOpen, setIsOpen] = useState(false);
    const closeDropdown = () => setIsOpen(false);
    const dropdownItemStyles = "";
    return (
        <>
            <DropdownMenu.Root open={isOpen} onOpenChange={setIsOpen}>
                <DropdownMenu.Trigger className="center-items">
                    <Button variant="soft" highContrast>
                        <Text className="center-items space-x-2 cursor-pointer">
                            <span>Services</span>
                            <DropdownMenu.TriggerIcon />
                        </Text>
                    </Button>
                </DropdownMenu.Trigger>
                <Portal>
                    <DropdownMenu.Content
                        style={{
                            zIndex: 1000, // Ensure it's above other content
                            maxHeight: '90vh', // Prevents large dropdowns from overflowing the viewport
                            overflow: 'auto', // Makes it scrollable if needed
                            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                        }}
                    >
                        {/* IELTS Coaching */}
                        <DropdownMenu.Item onClick={closeDropdown}>
                            <Link href="/ieltsCoaching" className="w-full">
                                IELTS Coaching
                            </Link>
                        </DropdownMenu.Item>


                        {/* New Applications */}
                        <DropdownMenu.Sub>
                            <DropdownMenu.SubTrigger>New Applications</DropdownMenu.SubTrigger>
                            <DropdownMenu.SubContent
                                sideOffset={-130} // Adjust horizontal alignment
                                style={{
                                    zIndex: 1100, // Higher than parent content
                                    background: 'white', // Background for visibility
                                    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', // Optional shadow
                                }}
                            >
                                <DropdownMenu.Item onClick={closeDropdown}>
                                    <Link href="/">New Passport (India/Canada)</Link>
                                </DropdownMenu.Item>


                                <DropdownMenu.Item onClick={closeDropdown}>
                                    <Link href="/newApplications/passportRenewals">Passport Renewal (India/Canada)</Link>
                                </DropdownMenu.Item>


                                <DropdownMenu.Item onClick={closeDropdown}>
                                    <Link href="/newApplications/PCC">PCC (Middle-east/India/Canada)</Link>
                                </DropdownMenu.Item>


                                <DropdownMenu.Item onClick={closeDropdown}>
                                    <Link href="/newApplications/OCIApplications">OCI Applications</Link>
                                </DropdownMenu.Item>


                                <DropdownMenu.Item onClick={closeDropdown}>
                                    <Link href="/">Surrender Certificate</Link>
                                </DropdownMenu.Item>


                                <DropdownMenu.Item onClick={closeDropdown}>
                                    <Link href="/">PR Card Renewal</Link>
                                </DropdownMenu.Item>


                                <DropdownMenu.Item onClick={closeDropdown}>
                                    <Link href="/newApplications/visaApplications">Visitor Visa Applications</Link>
                                </DropdownMenu.Item>


                                <DropdownMenu.Item onClick={closeDropdown}>
                                    <Link href="/newApplications/drivingExtracts">Driving Extract</Link>
                                </DropdownMenu.Item>


                                <DropdownMenu.Item onClick={closeDropdown}>
                                    <Link href="/newApplications/consentLetter">Child Travel Consent</Link>
                                </DropdownMenu.Item>


                            </DropdownMenu.SubContent>
                        </DropdownMenu.Sub>

                        {/* Translation Services */}
                        <DropdownMenu.Sub>
                            <DropdownMenu.SubTrigger>Translation Services</DropdownMenu.SubTrigger>
                            <DropdownMenu.SubContent
                                sideOffset={-100} // Adjust horizontal alignment
                                style={{
                                    zIndex: 1100, // Higher than parent content
                                    background: 'white', // Background for visibility
                                    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', // Optional shadow
                                }}
                            >
                                <DropdownMenu.Item onClick={closeDropdown} className={dropdownItemStyles}><Link href="/translationServices/documents">Documents</Link></DropdownMenu.Item>
                                <DropdownMenu.Item onClick={closeDropdown} className={dropdownItemStyles}><Link href="/translationServices/whatsappChat">Whatsapp Chat</Link></DropdownMenu.Item>
                            </DropdownMenu.SubContent>
                        </DropdownMenu.Sub>

                        {/* Notary Services */}
                        <DropdownMenu.Sub>
                            <DropdownMenu.SubTrigger>Notary Services</DropdownMenu.SubTrigger>
                            <DropdownMenu.SubContent
                                sideOffset={-100} // Adjust horizontal alignment
                                style={{
                                    zIndex: 1100, // Higher than parent content
                                    background: 'white', // Background for visibility
                                    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', // Optional shadow
                                }}
                            >
                                <DropdownMenu.Item onClick={closeDropdown} className={dropdownItemStyles}><Link href="/notaryServices/affidavits">Affidavits</Link> </DropdownMenu.Item>
                                <DropdownMenu.Item onClick={closeDropdown} className={dropdownItemStyles}><Link href="/notaryServices/documentsNotarization">Document Notarization</Link></DropdownMenu.Item>
                            </DropdownMenu.SubContent>
                        </DropdownMenu.Sub>

                        {/* Power of Attorney (POA) */}
                        <DropdownMenu.Sub>
                            <DropdownMenu.SubTrigger>Power of Attorney (POA)</DropdownMenu.SubTrigger>
                            <DropdownMenu.SubContent
                                sideOffset={-100} // Adjust horizontal alignment
                                style={{
                                    zIndex: 1100, // Higher than parent content
                                    background: 'white', // Background for visibility
                                    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', // Optional shadow
                                }}
                            >
                                <DropdownMenu.Item onClick={closeDropdown} className={dropdownItemStyles}><Link href="/poa/generalPOA">General POA</Link></DropdownMenu.Item>
                                <DropdownMenu.Item onClick={closeDropdown} className={dropdownItemStyles}><Link href="/poa/specificPOA">Specific POA</Link></DropdownMenu.Item>
                            </DropdownMenu.SubContent>
                        </DropdownMenu.Sub>

                        {/* Run Away Marriages */}
                        <DropdownMenu.Sub>
                            <DropdownMenu.SubTrigger>Run Away Marriages</DropdownMenu.SubTrigger>
                            <DropdownMenu.SubContent
                                sideOffset={-100} // Adjust horizontal alignment
                                style={{
                                    zIndex: 1100, // Higher than parent content
                                    background: 'white', // Background for visibility
                                    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', // Optional shadow
                                }}
                            >
                                <DropdownMenu.Item onClick={closeDropdown} className={dropdownItemStyles}> <Link href="/">In Middle-east</Link></DropdownMenu.Item>
                            </DropdownMenu.SubContent>
                        </DropdownMenu.Sub>
                    </DropdownMenu.Content>
                </Portal>
            </DropdownMenu.Root>
        </>
    );
};

export default RbuttonMobile;
