'use client';
import React, { useState } from 'react';
import { DropdownMenu, Text } from '@radix-ui/themes';
import Link from 'next/link';

const Rbutton = () => {
    const [isOpen, setIsOpen] = useState(false);
    const closeDropdown = () => setIsOpen(false);
    const dropdownItemStyles = "cursor-pointer hover:cursor-pointer";
    const dropdownItemLinkStyles = "w-full h-full flex items-center";

    return (
        <>
            <DropdownMenu.Root open={isOpen} onOpenChange={setIsOpen}>
                <DropdownMenu.Trigger>
                    <Text weight="bold" size="4" className="center-items space-x-2 cursor-pointer select-none group">
                        <span className="transition-transform duration-300 hover:scale-105 inline-block relative">
                            Services
                            <span className="absolute left-1/2 bottom-0 w-0 h-0.5 bg-current transform -translate-x-1/2 transition-all duration-300 group-hover:w-full"></span>
                        </span>
                        <DropdownMenu.TriggerIcon />
                    </Text>
                </DropdownMenu.Trigger>

                <DropdownMenu.Content className='z-40'>
                    <DropdownMenu.Item onClick={closeDropdown} className={dropdownItemStyles}>
                        <Link href="/ieltsCoaching" className="w-full">
                            IELTS Coaching
                        </Link>
                    </DropdownMenu.Item>

                    <DropdownMenu.Sub>
                        <DropdownMenu.SubTrigger><Link href="/newApplications"  className={dropdownItemLinkStyles}>New Applications</Link></DropdownMenu.SubTrigger>
                        <DropdownMenu.SubContent className='z-40'>
                            <DropdownMenu.Item onClick={closeDropdown} className={dropdownItemStyles}>
                                <Link href="/contactus"  className={dropdownItemLinkStyles}>New Passport (India/Canada)</Link>
                            </DropdownMenu.Item>
                            <DropdownMenu.Item onClick={closeDropdown} className={dropdownItemStyles}>
                                <Link href="/newApplications/passportRenewals"  className={dropdownItemLinkStyles}>Passport Renewal (India/Canada)</Link>
                            </DropdownMenu.Item>
                            <DropdownMenu.Item onClick={closeDropdown} className={dropdownItemStyles}>
                                <Link href="/newApplications/PCC"  className={dropdownItemLinkStyles}>PCC (Middle-east/India/Canada)</Link>
                            </DropdownMenu.Item>
                            <DropdownMenu.Item onClick={closeDropdown} className={dropdownItemStyles}>
                                <Link href="/newApplications/OCIApplications"  className={dropdownItemLinkStyles}>OCI Applications</Link>
                            </DropdownMenu.Item>
                            <DropdownMenu.Item onClick={closeDropdown} className={dropdownItemStyles}>
                                <Link href="/contactus"  className={dropdownItemLinkStyles}>Surrender Certificate</Link>
                            </DropdownMenu.Item>
                            <DropdownMenu.Item onClick={closeDropdown} className={dropdownItemStyles}>
                                <Link href="/contactus"  className={dropdownItemLinkStyles}>PR Card Renewal</Link>
                            </DropdownMenu.Item>
                            <DropdownMenu.Item onClick={closeDropdown} className={dropdownItemStyles}>
                                <Link href="/newApplications/visaApplications"  className={dropdownItemLinkStyles}>Visitor Visa Applications</Link>
                            </DropdownMenu.Item>
                            <DropdownMenu.Item onClick={closeDropdown} className={dropdownItemStyles}>
                                <Link href="/newApplications/drivingExtracts"  className={dropdownItemLinkStyles}>Driving Extract</Link>
                            </DropdownMenu.Item>
                            <DropdownMenu.Item onClick={closeDropdown} className={dropdownItemStyles}>
                                <Link href="/newApplications/consentLetter"  className={dropdownItemLinkStyles}>Child Travel Consent</Link>
                            </DropdownMenu.Item>
                        </DropdownMenu.SubContent>
                    </DropdownMenu.Sub>

                    <DropdownMenu.Sub>
                        <DropdownMenu.SubTrigger>Translation Services</DropdownMenu.SubTrigger>
                        <DropdownMenu.SubContent className='z-40'>
                            <DropdownMenu.Item onClick={closeDropdown} className={dropdownItemStyles}><Link href="/translationServices/documents"  className={dropdownItemLinkStyles}>Documents</Link></DropdownMenu.Item>
                            <DropdownMenu.Item onClick={closeDropdown} className={dropdownItemStyles}><Link href="/translationServices/whatsappChat"  className={dropdownItemLinkStyles}>Whatsapp Chat</Link></DropdownMenu.Item>
                        </DropdownMenu.SubContent>
                    </DropdownMenu.Sub>

                    <DropdownMenu.Sub>
                        <DropdownMenu.SubTrigger>Notary Services</DropdownMenu.SubTrigger>
                        <DropdownMenu.SubContent className='z-40'>
                            <DropdownMenu.Item onClick={closeDropdown} className={dropdownItemStyles}><Link href="/notaryServices/affidavits" className={dropdownItemLinkStyles}>Affidavits</Link> </DropdownMenu.Item>
                            <DropdownMenu.Item onClick={closeDropdown} className={dropdownItemStyles}><Link href="/notaryServices/documentsNotarization"  className={dropdownItemLinkStyles}>Document Notarization</Link></DropdownMenu.Item>
                        </DropdownMenu.SubContent>
                    </DropdownMenu.Sub>

                    <DropdownMenu.Sub>
                        <DropdownMenu.SubTrigger><Link href="/poa"  className={dropdownItemLinkStyles}>Power of Attorney (POA)</Link></DropdownMenu.SubTrigger>
                        <DropdownMenu.SubContent className='z-40'>
                            <DropdownMenu.Item onClick={closeDropdown} className={dropdownItemStyles}><Link href="/poa/generalPOA"  className={dropdownItemLinkStyles}>General POA</Link></DropdownMenu.Item>
                            <DropdownMenu.Item onClick={closeDropdown} className={dropdownItemStyles}><Link href="/poa/specificPOA"  className={dropdownItemLinkStyles}>Specific POA</Link></DropdownMenu.Item>
                        </DropdownMenu.SubContent>
                    </DropdownMenu.Sub>

                    <DropdownMenu.Sub>
                        <DropdownMenu.SubTrigger>Run Away Marriages</DropdownMenu.SubTrigger>
                        <DropdownMenu.SubContent className='z-40'>
                            <DropdownMenu.Item onClick={closeDropdown} className={dropdownItemStyles}><Link href="/contactus"  className={dropdownItemLinkStyles}>Middle-east</Link></DropdownMenu.Item>
                        </DropdownMenu.SubContent>
                    </DropdownMenu.Sub>
                </DropdownMenu.Content>
            </DropdownMenu.Root>
        </>
    );
};

export default Rbutton;