'use client';
import React, { useState } from 'react';
import { DropdownMenu, Button, Text, Portal } from '@radix-ui/themes';
import Link from 'next/link';

interface RbuttonMobileProps {
    closeParentMenu: () => void; // Prop to close the parent menu
}


const RbuttonMobile: React.FC<RbuttonMobileProps> = ({ closeParentMenu }) => {
    const [isOpen, setIsOpen] = useState(false);
    const closeDropdown = () => setIsOpen(false);

    const handleItemClick = () => {
        closeDropdown();        // Close the current dropdown
        closeParentMenu();      // Close the parent menu (from CustomNav)
    };

    const dropdownItemStyles = "";
    const dropdownItemLinkStyles = "w-full h-full flex items-center";
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
                            zIndex: 1100, // Ensure it's above other content
                            maxHeight: '90vh', // Prevents large dropdowns from overflowing the viewport
                            overflow: 'auto', // Makes it scrollable if needed
                            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                        }}
                    >
                        {/* IELTS Coaching */}
                        <DropdownMenu.Item onClick={handleItemClick}>
                            <Link href="/ieltsCoaching"   className={dropdownItemLinkStyles}>
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
                                <DropdownMenu.Item onClick={handleItemClick}>
                                    <Link href="/contactus"  className={dropdownItemLinkStyles}>New Passport (India/Canada)</Link>
                                </DropdownMenu.Item>


                                <DropdownMenu.Item onClick={handleItemClick}>
                                    <Link href="/newApplications/passportRenewals"  className={dropdownItemLinkStyles}>Passport Renewal (India/Canada)</Link>
                                </DropdownMenu.Item>


                                <DropdownMenu.Item onClick={handleItemClick}>
                                    <Link href="/newApplications/PCC"  className={dropdownItemLinkStyles}>PCC (Middle-east/India/Canada)</Link>
                                </DropdownMenu.Item>


                                <DropdownMenu.Item onClick={handleItemClick}>
                                    <Link href="/newApplications/OCIApplications"  className={dropdownItemLinkStyles}>OCI Applications</Link>
                                </DropdownMenu.Item>


                                <DropdownMenu.Item onClick={handleItemClick}>
                                    <Link href="/contactus"  className={dropdownItemLinkStyles}>Surrender Certificate</Link>
                                </DropdownMenu.Item>


                                <DropdownMenu.Item onClick={handleItemClick}>
                                    <Link href="/contactus"  className={dropdownItemLinkStyles}>PR Card Renewal</Link>
                                </DropdownMenu.Item>


                                <DropdownMenu.Item onClick={handleItemClick}>
                                    <Link href="/newApplications/visaApplications"  className={dropdownItemLinkStyles}>Visitor Visa Applications</Link>
                                </DropdownMenu.Item>


                                <DropdownMenu.Item onClick={handleItemClick}>
                                    <Link href="/newApplications/drivingExtracts"  className={dropdownItemLinkStyles}>Driving Extract</Link>
                                </DropdownMenu.Item>


                                <DropdownMenu.Item onClick={handleItemClick}>
                                    <Link href="/newApplications/consentLetter"  className={dropdownItemLinkStyles}>Child Travel Consent</Link>
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
                                <DropdownMenu.Item onClick={handleItemClick} className={dropdownItemStyles}><Link href="/translationServices/documents"  className={dropdownItemLinkStyles}>Documents</Link></DropdownMenu.Item>
                                <DropdownMenu.Item onClick={handleItemClick} className={dropdownItemStyles}><Link href="/translationServices/whatsappChat"  className={dropdownItemLinkStyles}>Whatsapp Chat</Link></DropdownMenu.Item>
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
                                <DropdownMenu.Item onClick={handleItemClick} className={dropdownItemStyles}><Link href="/notaryServices/affidavits"  className={dropdownItemLinkStyles}>Affidavits</Link> </DropdownMenu.Item>
                                <DropdownMenu.Item onClick={handleItemClick} className={dropdownItemStyles}><Link href="/notaryServices/documentsNotarization"  className={dropdownItemLinkStyles}>Document Notarization</Link></DropdownMenu.Item>
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
                                <DropdownMenu.Item onClick={handleItemClick} className={dropdownItemStyles}><Link href="/poa/generalPOA"  className={dropdownItemLinkStyles}>General POA</Link></DropdownMenu.Item>
                                <DropdownMenu.Item onClick={handleItemClick} className={dropdownItemStyles}><Link href="/poa/specificPOA"  className={dropdownItemLinkStyles}>Specific POA</Link></DropdownMenu.Item>
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
                                <DropdownMenu.Item onClick={handleItemClick} className={dropdownItemStyles}> <Link href="/contactus"  className={dropdownItemLinkStyles}>Middle-east</Link></DropdownMenu.Item>
                            </DropdownMenu.SubContent>
                        </DropdownMenu.Sub>
                    </DropdownMenu.Content>
                </Portal>
            </DropdownMenu.Root>
        </>
    );
};

export default RbuttonMobile;
