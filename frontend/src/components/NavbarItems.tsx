import { Box, Typography } from '@mui/material'
import React from 'react'

import { RiUserSettingsLine, RiHeart2Line } from "react-icons/ri"
import ColorScheme from '../assets/ColorScheme'

const NavbarItems = () => {
    return (
        <>
            <Box>
                <Box sx={{display: "flex", alignItems: "center", paddingTop: "1em",
                paddingBottom: "0.5em", cursor: "pointer", marginBottom: "1em", marginTop: "1em", color: ColorScheme.WHITE}}>
                    <RiHeart2Line size={40}/> <Typography sx={{marginLeft: "1.5em", fontSize: "20px"}}>Home</Typography>
                </Box>
                <Box sx={{display: "flex", alignItems: "center", paddingTop: "1em",
                paddingBottom: "0.5em", cursor: "pointer", marginBottom: "1em", color: ColorScheme.WHITE}}>
                    <RiUserSettingsLine size={40}/> <Typography sx={{marginLeft: "1.5em", fontSize: "20px"}}>Settings</Typography>
                </Box>
            </Box>
        </>
    )
}

export default NavbarItems
