import { useAuth0 } from '@auth0/auth0-react'
import { Box, Button, Typography } from '@mui/material'
import React from 'react'
import ColorScheme from '../assets/ColorScheme'
import NavbarItems from './NavbarItems'
import UserProfileCard from './UserProfileCard'

const Navbar = () => {
    
  const { logout } = useAuth0();

    return (
        <>
            <Box sx={{backgroundColor: ColorScheme.LIGHTER_PURPLE, position: "absolute", top: 0, left: 0, height: "100%", width: "17.5%", 
            }}>
                <Box sx={{paddingLeft: "0.5em", paddingRight: "1.5em", paddingTop: "1em"}}>
                    <UserProfileCard/>
                    <NavbarItems/>
                    <Box sx={{marginTop: "2em", marginBottom: "2em"}}>
                        <Button sx={{background: "red", borderRadius: "10px", border: `2px solid ${ColorScheme.WHITE}`,
                        color: ColorScheme.WHITE, width: "100%"}}
                        onClick={() => logout({returnTo: "http://localhost:3000/welcome"})}>
                            <Typography>Sign out</Typography>
                        </Button>
                    </Box>
                </Box>
            </Box>
        </>
    )
}

export default Navbar
