'use client';
import React, { useState } from 'react';
import { DropdownMenu, Text } from '@radix-ui/themes';
import Link from 'next/link';

const Rbutton = () => {
    const [isOpen, setIsOpen] = useState(false);
    const closeDropdown = () => setIsOpen(false);
    const dropdownItemStyles = "cursor-pointer hover:cursor-pointer";

    return (
        <>
            <DropdownMenu.Root open={isOpen} onOpenChange={setIsOpen}>
                <DropdownMenu.Trigger>
                    <Text weight="bold" size="4" className="center-items space-x-2 cursor-pointer select-none ">
                        <span>Services</span><DropdownMenu.TriggerIcon />
                    </Text>
                </DropdownMenu.Trigger>

                <DropdownMenu.Content className='z-40'>
                    <DropdownMenu.Item onClick={closeDropdown} className={dropdownItemStyles}>
                        <Link href="/ieltsCoaching" className="w-full">
                            IELTS Coaching
                        </Link>
                    </DropdownMenu.Item>

                    <DropdownMenu.Sub>
                        <DropdownMenu.SubTrigger><Link href="/newApplications">New Applications</Link></DropdownMenu.SubTrigger>
                        <DropdownMenu.SubContent className='z-40'>
                            <DropdownMenu.Item onClick={closeDropdown} className={dropdownItemStyles}>
                                <Link href="/">New Passport (India/Canada)</Link>
                            </DropdownMenu.Item>
                            <DropdownMenu.Item onClick={closeDropdown} className={dropdownItemStyles}>
                                <Link href="/newApplications/passportRenewals">Passport Renewal (India/Canada)</Link>
                            </DropdownMenu.Item>
                            <DropdownMenu.Item onClick={closeDropdown} className={dropdownItemStyles}>
                                <Link href="/newApplications/PCC">PCC (Middle-east/India/Canada)</Link>
                            </DropdownMenu.Item>
                            <DropdownMenu.Item onClick={closeDropdown} className={dropdownItemStyles}>
                                <Link href="/newApplications/OCIApplications">OCI Applications</Link>
                            </DropdownMenu.Item>
                            <DropdownMenu.Item onClick={closeDropdown} className={dropdownItemStyles}>
                                <Link href="/">Surrender Certificate</Link>
                            </DropdownMenu.Item>
                            <DropdownMenu.Item onClick={closeDropdown} className={dropdownItemStyles}>
                                <Link href="/">PR Card Renewal</Link>
                            </DropdownMenu.Item>
                            <DropdownMenu.Item onClick={closeDropdown} className={dropdownItemStyles}>
                                <Link href="/newApplications/visaApplications">Visitor Visa Applications</Link>
                            </DropdownMenu.Item>
                            <DropdownMenu.Item onClick={closeDropdown} className={dropdownItemStyles}>
                                <Link href="/newApplications/drivingExtracts">Driving Extract</Link>
                            </DropdownMenu.Item>
                            <DropdownMenu.Item onClick={closeDropdown} className={dropdownItemStyles}>
                                <Link href="/newApplications/consentLetter">Child Travel Consent</Link>
                            </DropdownMenu.Item>
                        </DropdownMenu.SubContent>
                    </DropdownMenu.Sub>

                    <DropdownMenu.Sub>
                        <DropdownMenu.SubTrigger>Translation Services</DropdownMenu.SubTrigger>
                        <DropdownMenu.SubContent className='z-40'>
                            <DropdownMenu.Item onClick={closeDropdown} className={dropdownItemStyles}><Link href="/translationServices/documents">Documents</Link></DropdownMenu.Item>
                            <DropdownMenu.Item onClick={closeDropdown} className={dropdownItemStyles}><Link href="/translationServices/whatsappChat">Whatsapp Chat</Link></DropdownMenu.Item>
                        </DropdownMenu.SubContent>
                    </DropdownMenu.Sub>

                    <DropdownMenu.Sub>
                        <DropdownMenu.SubTrigger>Notary Services</DropdownMenu.SubTrigger>
                        <DropdownMenu.SubContent className='z-40'>
                            <DropdownMenu.Item onClick={closeDropdown} className={dropdownItemStyles}><Link href="/notaryServices/affidavits">Affidavits</Link> </DropdownMenu.Item>
                            <DropdownMenu.Item onClick={closeDropdown} className={dropdownItemStyles}><Link href="/notaryServices/documentsNotarization">Document Notarization</Link></DropdownMenu.Item>
                        </DropdownMenu.SubContent>
                    </DropdownMenu.Sub>

                    <DropdownMenu.Sub>
                        <DropdownMenu.SubTrigger><Link href="/poa">Power of Attorney (POA)</Link></DropdownMenu.SubTrigger>
                        <DropdownMenu.SubContent className='z-40'>
                            <DropdownMenu.Item onClick={closeDropdown} className={dropdownItemStyles}><Link href="/poa/generalPOA">General POA</Link></DropdownMenu.Item>
                            <DropdownMenu.Item onClick={closeDropdown} className={dropdownItemStyles}><Link href="/poa/specificPOA">Specific POA</Link></DropdownMenu.Item>
                        </DropdownMenu.SubContent>
                    </DropdownMenu.Sub>

                    <DropdownMenu.Sub>
                        <DropdownMenu.SubTrigger>Run Away Marriages</DropdownMenu.SubTrigger>
                        <DropdownMenu.SubContent className='z-40'>
                            <DropdownMenu.Item onClick={closeDropdown} className={dropdownItemStyles}><Link href="/">Middle-east</Link></DropdownMenu.Item>
                        </DropdownMenu.SubContent>
                    </DropdownMenu.Sub>
                </DropdownMenu.Content>
            </DropdownMenu.Root>
        </>
    );
};

export default Rbutton;