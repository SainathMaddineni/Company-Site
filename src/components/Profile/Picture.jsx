import React, { useState } from 'react'
import { IconButton } from "@chakra-ui/react"
import { DragHandleIcon, SearchIcon} from "@chakra-ui/icons"
import { Menu, MenuButton, MenuList, MenuItem,InputGroup,InputLeftElement } from "@chakra-ui/react"
import { ChakraProvider, Flex, theme, Avatar, FormControl, FormLabel, Input } from '@chakra-ui/react';

function Picture(){
    const [image,setimage] = useState(null)
    const handleChange = (e) =>{
        console.log(e)
        setimage(URL.createObjectURL(e.target.files[0]))
    }
    console.log(image)
        return (
                <ChakraProvider theme={theme}>
                        <InputGroup marginLeft="60%">
                            <InputLeftElement pointerEvents="none" children={<SearchIcon />} />
                            <Input type="text"backgroundColor="white" placeholder="Search.." width="sm"/>
                        </InputGroup>
                    <Flex >
                        <FormControl id="profile">
                            <FormLabel><Avatar src={image} /></FormLabel>
                            <Input type="file" hidden onChange={handleChange} />
                        </FormControl>
                    <Menu>
                        <MenuButton as={IconButton} aria-label="Options" icon={<DragHandleIcon/>} size="lg" variant="outline" />
                            <MenuList>
                                <MenuItem>Profile</MenuItem>
                                <MenuItem>Profile Settings</MenuItem>
                                <MenuItem>Virtual Chat</MenuItem>
                                <MenuItem>SignOut</MenuItem>
                            </MenuList>
                    </Menu>
                    </Flex>
                </ChakraProvider>
        )
    }
export default Picture;