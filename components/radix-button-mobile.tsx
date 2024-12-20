'use client';
import { DropdownMenu, Button, Text, Portal } from '@radix-ui/themes';

const RbuttonMobile = () => {
    return (
        <>
            <DropdownMenu.Root>
                <DropdownMenu.Trigger className="center-items">
                    <Button variant="soft" highContrast>
                        <Text className="center-items space-x-2 cursor-pointer">
                            <span>Options</span>
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
                                <DropdownMenu.Item>New Passport (India/Canada)</DropdownMenu.Item>
                                <DropdownMenu.Item>Passport Renewal (India/Canada)</DropdownMenu.Item>
                                <DropdownMenu.Item>PCC (Middle-east/India/Canada)</DropdownMenu.Item>
                                <DropdownMenu.Item>OCI Applications</DropdownMenu.Item>
                                <DropdownMenu.Item>Surrender Certificate</DropdownMenu.Item>
                                <DropdownMenu.Item>PR Card Renewal</DropdownMenu.Item>
                                <DropdownMenu.Item>Visitor Visa Applications</DropdownMenu.Item>
                                <DropdownMenu.Item>Driving Extract</DropdownMenu.Item>
                            </DropdownMenu.SubContent>
                        </DropdownMenu.Sub>

                        {/* Translation Services */}
                        <DropdownMenu.Sub>
                            <DropdownMenu.SubTrigger>Translation Services</DropdownMenu.SubTrigger>
                            <DropdownMenu.SubContent>
                                <DropdownMenu.Item>Documents</DropdownMenu.Item>
                                <DropdownMenu.Item>Whatsapp Chat</DropdownMenu.Item>
                            </DropdownMenu.SubContent>
                        </DropdownMenu.Sub>

                        {/* Notary Services */}
                        <DropdownMenu.Sub>
                            <DropdownMenu.SubTrigger>Notary Services</DropdownMenu.SubTrigger>
                            <DropdownMenu.SubContent
                                sideOffset={-130} // Adjust horizontal alignment
                                style={{
                                    zIndex: 1100, // Higher than parent content
                                    background: 'white', // Background for visibility
                                    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', // Optional shadow
                                }}
                            >
                                <DropdownMenu.Item>Affidavits</DropdownMenu.Item>
                                <DropdownMenu.Item>Document Notarization</DropdownMenu.Item>
                            </DropdownMenu.SubContent>
                        </DropdownMenu.Sub>

                        {/* Power of Attorney (POA) */}
                        <DropdownMenu.Sub>
                            <DropdownMenu.SubTrigger>Power of Attorney (POA)</DropdownMenu.SubTrigger>
                            <DropdownMenu.SubContent>
                                <DropdownMenu.Item>General POA</DropdownMenu.Item>
                                <DropdownMenu.Item>Specific POA</DropdownMenu.Item>
                            </DropdownMenu.SubContent>
                        </DropdownMenu.Sub>

                        {/* Run Away Marriages */}
                        <DropdownMenu.Sub>
                            <DropdownMenu.SubTrigger>Run Away Marriages</DropdownMenu.SubTrigger>
                            <DropdownMenu.SubContent>
                                <DropdownMenu.Item>In Middle-east</DropdownMenu.Item>
                            </DropdownMenu.SubContent>
                        </DropdownMenu.Sub>
                    </DropdownMenu.Content>
                </Portal>
            </DropdownMenu.Root>
        </>
    );
};

export default RbuttonMobile;
