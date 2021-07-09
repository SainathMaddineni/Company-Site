import React from "react"
import { ChakraProvider } from "@chakra-ui/react"
import Navbar from "./Navbar/Navbar"
import LoginIntegration from "./LoginIntegration/LoginIntegration"
function LoginIntro() {
        return ( 
            <ChakraProvider>
                <Navbar />
                <LoginIntegration />
            </ChakraProvider>
         );
    }
 
export default LoginIntro ;