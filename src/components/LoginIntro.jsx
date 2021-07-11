import React from "react"
import { ChakraProvider } from "@chakra-ui/react"
import LoginIntegration from "./Profile/LoginIntegration"
import Navbar from "./Profile/Navbar"
function LoginIntro() {
        return ( 
            <ChakraProvider>
                <Navbar />
                <LoginIntegration />
            </ChakraProvider>
         );
    }
 
export default LoginIntro ;