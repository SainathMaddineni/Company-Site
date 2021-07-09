import React from 'react'
import { FormControl, FormLabel, Input, Button, Select } from "@chakra-ui/react"
import {AddIcon } from "@chakra-ui/icons"
import "./login1.css";

function LoginIntegration() {
    return ( 
        <div className="afterlogin-form" >    
        <FormControl>
            <FormLabel>Quote Of The Project :</FormLabel>
            <Select placeholder="Select" width="300px">
                <option>Web</option>
                <option>Mobile</option>
                <option>IOS</option>
            </Select><br />
            <FormLabel>Scale Of Project :</FormLabel>
            <Select placeholder="Select" width="300px">
                <option>Small</option>
                <option>Medium</option>
                <option>Large</option>
            </Select><br/>
            <FormLabel>Email or Phone Number :</FormLabel>
            <Input width="300px"/><br /><br />
            <FormLabel>Vender Ship : </FormLabel>
                    <FormLabel border="1.8px solid lightgrey" width="300px">
                    <label for="file"> 
                    <AddIcon color="white" border="1px solid white" borderRadius="100%" padding="5px" backgroundColor="green" boxSize="30px" /> choose a file... 
                    <Input  hidden type="file" id="file" width="300px" /> </label>
                    </FormLabel>
                    <Button colorScheme="teal" variant="solid">Submit</Button>

        </FormControl>
        </div>
    )
}
export default LoginIntegration;