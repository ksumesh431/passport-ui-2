'use client';
import { DropdownMenu, Tabs, Button, Flex, Link, Text } from '@radix-ui/themes';
const RbuttonMobile = () => {
    return (
        <>
            <DropdownMenu.Root>
                <DropdownMenu.Trigger className="center-items">









                    <Button color="gray" variant="outline" highContrast >
                       <Text className="center-items space-x-2 cursor-pointer"><span>Options</span><DropdownMenu.TriggerIcon /></Text> 
                    </Button>



                </DropdownMenu.Trigger>
                <DropdownMenu.Content>
                    <DropdownMenu.Item shortcut="⌘ E">Edit</DropdownMenu.Item>
                    <DropdownMenu.Item shortcut="⌘ D">Duplicate</DropdownMenu.Item>
                    <DropdownMenu.Separator />
                    <DropdownMenu.Item shortcut="⌘ N">Archive</DropdownMenu.Item>

                    <DropdownMenu.Sub>
                        <DropdownMenu.SubTrigger>More</DropdownMenu.SubTrigger>
                        <DropdownMenu.SubContent>
                            <DropdownMenu.Item><Link href="/about">Move to project…</Link></DropdownMenu.Item>
                            <DropdownMenu.Item>Move to folder…</DropdownMenu.Item>

                            <DropdownMenu.Separator />
                            <DropdownMenu.Item>Advanced options…</DropdownMenu.Item>

                            {/* First Nested Submenu */}
                            <DropdownMenu.Sub>
                                <DropdownMenu.SubTrigger>NestedMore</DropdownMenu.SubTrigger>
                                <DropdownMenu.SubContent>
                                    <DropdownMenu.Item>Nested Option 1</DropdownMenu.Item>
                                    <DropdownMenu.Item>Nested Option 2</DropdownMenu.Item>
                                    <DropdownMenu.Separator />
                                    <DropdownMenu.Item>Nested Option 3</DropdownMenu.Item>

                                    {/* Second Nested Submenu */}
                                    <DropdownMenu.Sub>
                                        <DropdownMenu.SubTrigger>DeepNestedMore</DropdownMenu.SubTrigger>
                                        <DropdownMenu.SubContent>
                                            <DropdownMenu.Item>Deep Option 1</DropdownMenu.Item>
                                            <DropdownMenu.Item>Deep Option 2</DropdownMenu.Item>
                                            <DropdownMenu.Separator />
                                            <DropdownMenu.Item>Deep Option 3</DropdownMenu.Item>
                                        </DropdownMenu.SubContent>
                                    </DropdownMenu.Sub>
                                </DropdownMenu.SubContent>
                            </DropdownMenu.Sub>
                        </DropdownMenu.SubContent>
                    </DropdownMenu.Sub>

                    <DropdownMenu.Separator />
                    <DropdownMenu.Item>Share</DropdownMenu.Item>
                    <DropdownMenu.Item>Add to favorites</DropdownMenu.Item>
                    <DropdownMenu.Separator />
                    <DropdownMenu.Item shortcut="⌘ ⌫" color="red">
                        Delete
                    </DropdownMenu.Item>
                </DropdownMenu.Content>
            </DropdownMenu.Root>

        </>
    );
};

export default RbuttonMobile;