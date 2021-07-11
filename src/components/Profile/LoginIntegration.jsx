import React from 'react'
import { FormControl, FormLabel, Input, Button, Select,Box } from "@chakra-ui/react"
import {AddIcon } from "@chakra-ui/icons"

function LoginIntegration() {
    return ( 
        <Box bg="#c2c1be">
        <Box marginLeft="40%" width="350px">
            <br />
        <FormControl>
            <FormLabel><strong>Quote Of The Project :</strong></FormLabel>
            <Select placeholder="Select" borderColor="black" >
                <option>Web</option>
                <option>Mobile</option>
                <option>IOS</option>
            </Select><br />
            <FormLabel><strong>Scale Of Project :  </strong></FormLabel>
            <Select placeholder="Select" borderColor="black">
                <option>Small</option>
                <option>Medium</option>
                <option>Large</option>
            </Select><br/>
            <FormLabel><strong>Email or Phone Number : </strong></FormLabel>
            <Input placeholder="Enter Email or Phone" borderColor="black" _placeholder={{color:"black"}} /><br /><br />
            <FormLabel><strong>Vender Ship :</strong> </FormLabel>
                    <FormLabel border="1.5px solid black" borderRadius="10px" width="350px">
                    <label for="file"> 
                    <AddIcon color="white" border="1px solid white" borderRadius="80%" padding="5px" 
                    backgroundColor="green" boxSize="40px" />choose a file... 
                    <Input  hidden type="file" id="file"/> </label>
                    </FormLabel><br />
                    <Button colorScheme="teal" variant="solid">Submit</Button>
        </FormControl>
        <br />
        </Box>
        </Box>
    )
}
export default LoginIntegration;