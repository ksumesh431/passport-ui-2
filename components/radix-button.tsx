'use client';
import React from 'react';
import { DropdownMenu, Button, Box, Text } from '@radix-ui/themes';
import Link from 'next/link';
const Rbutton = () => {
    return (
        <>
            <DropdownMenu.Root>
                <DropdownMenu.Trigger>
                    <Text weight="bold" size="2" className="center-items space-x-2 cursor-pointer "><span>Services</span><DropdownMenu.TriggerIcon /></Text>
                </DropdownMenu.Trigger>

                <DropdownMenu.Content>

                    
                {/* New applications */}
                    <DropdownMenu.Sub>
                        <DropdownMenu.SubTrigger>New Applications</DropdownMenu.SubTrigger>
                        <DropdownMenu.SubContent>
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
                            <DropdownMenu.Item><Link href="/translationServices/documents">Documents</Link></DropdownMenu.Item>
                            <DropdownMenu.Item><Link href="/translationServices/whatsappChat">Whatsapp Chat</Link></DropdownMenu.Item>
                        </DropdownMenu.SubContent>
                    </DropdownMenu.Sub>




                {/* Notary Services */}
                    <DropdownMenu.Sub>
                        <DropdownMenu.SubTrigger>Notary Services</DropdownMenu.SubTrigger>
                        <DropdownMenu.SubContent>
                            <DropdownMenu.Item><Link href="/notaryServices/affidavits">Affidavits</Link> </DropdownMenu.Item>
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
            </DropdownMenu.Root>

        </>
    );
};

export default Rbutton;


{/* 
    
    
    // sample data structure


            //     <DropdownMenu.Sub>
            //     <DropdownMenu.SubTrigger>New Applications</DropdownMenu.SubTrigger>
            //     <DropdownMenu.SubContent>
            //         <DropdownMenu.Item>Move to project…</DropdownMenu.Item>
            //         <DropdownMenu.Item>Move to folder…</DropdownMenu.Item>
            //         <DropdownMenu.Separator />
            //         <DropdownMenu.Item>Advanced options…</DropdownMenu.Item>

            //         First Nested Submenu 
            //         <DropdownMenu.Sub>
            //             <DropdownMenu.SubTrigger>NestedMore</DropdownMenu.SubTrigger>
            //             <DropdownMenu.SubContent>
            //                 <DropdownMenu.Item>Nested Option 1</DropdownMenu.Item>
            //                 <DropdownMenu.Item>Nested Option 2</DropdownMenu.Item>
            //                 <DropdownMenu.Separator />
            //                 <DropdownMenu.Item>Nested Option 3</DropdownMenu.Item>

            //                 Second Nested Submenu
            //                 <DropdownMenu.Sub>
            //                     <DropdownMenu.SubTrigger>DeepNestedMore</DropdownMenu.SubTrigger>
            //                     <DropdownMenu.SubContent>
            //                         <DropdownMenu.Item>Deep Option 1</DropdownMenu.Item>
            //                         <DropdownMenu.Item>Deep Option 2</DropdownMenu.Item>
            //                         <DropdownMenu.Separator />
            //                         <DropdownMenu.Item>Deep Option 3</DropdownMenu.Item>
            //                     </DropdownMenu.SubContent>
            //                 </DropdownMenu.Sub>
            //             </DropdownMenu.SubContent>
            //         </DropdownMenu.Sub>
            //     </DropdownMenu.SubContent>
            // </DropdownMenu.Sub>










            // <DropdownMenu.Item shortcut="⌘ E">New Applications</DropdownMenu.Item>
            // <DropdownMenu.Separator />
            // <DropdownMenu.Item shortcut="⌘ D">Duplicate</DropdownMenu.Item>
            // <DropdownMenu.Item shortcut="⌘ N">Archive</DropdownMenu.Item>

            // <DropdownMenu.Sub>
            //     <DropdownMenu.SubTrigger>More</DropdownMenu.SubTrigger>
            //     <DropdownMenu.SubContent>
            //         <DropdownMenu.Item>Move to project…</DropdownMenu.Item>
            //         <DropdownMenu.Item>Move to folder…</DropdownMenu.Item>

            //         <DropdownMenu.Separator />
            //         <DropdownMenu.Item>Advanced options…</DropdownMenu.Item>

            //          First Nested Submenu
            //         <DropdownMenu.Sub>
            //             <DropdownMenu.SubTrigger>NestedMore</DropdownMenu.SubTrigger>
            //             <DropdownMenu.SubContent>
            //                 <DropdownMenu.Item>Nested Option 1</DropdownMenu.Item>
            //                 <DropdownMenu.Item>Nested Option 2</DropdownMenu.Item>
            //                 <DropdownMenu.Separator />
            //                 <DropdownMenu.Item>Nested Option 3</DropdownMenu.Item>

            //                 Second Nested Submenu 
            //                 <DropdownMenu.Sub>
            //                     <DropdownMenu.SubTrigger>DeepNestedMore</DropdownMenu.SubTrigger>
            //                     <DropdownMenu.SubContent>
            //                         <DropdownMenu.Item>Deep Option 1</DropdownMenu.Item>
            //                         <DropdownMenu.Item>Deep Option 2</DropdownMenu.Item>
            //                         <DropdownMenu.Separator />
            //                         <DropdownMenu.Item>Deep Option 3</DropdownMenu.Item>
            //                     </DropdownMenu.SubContent>
            //                 </DropdownMenu.Sub>
            //             </DropdownMenu.SubContent>
            //         </DropdownMenu.Sub>
            //     </DropdownMenu.SubContent>
            // </DropdownMenu.Sub>

            // <DropdownMenu.Separator />
            // <DropdownMenu.Item>Share</DropdownMenu.Item>
            // <DropdownMenu.Item>Add to favorites</DropdownMenu.Item>
            // <DropdownMenu.Separator />
            // <DropdownMenu.Item shortcut="⌘ ⌫" color="red">
            //     Delete
            // </DropdownMenu.Item> 
            // 
*/}