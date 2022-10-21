import { useAuth0 } from '@auth0/auth0-react';
import { Avatar, Box, Typography } from '@mui/material'
import React from 'react'
import AppStaticStrings from '../assets/AppStaticStrings';
import ColorScheme from '../assets/ColorScheme';

const UserProfileCard = () => {

    const { user, isLoading } = useAuth0();

    return (
        <>
            <Box sx={{display: "flex", alignItems: "center"}}>
                <Avatar src={user?.picture} alt="Personal Avatar" sx={{width: 56, height: 56}}/>
                <Box sx={{marginLeft: "0.8em"}}>
                    <Typography sx={{color: ColorScheme.WHITE, fontSize: "20px"}}>Username</Typography>
                    <Typography sx={{color: ColorScheme.WHITE, fontSize: "10px"}}>{AppStaticStrings.USERPROFILECARD_SEE_PROFILE}</Typography>
                </Box>
            </Box>
        </>
    )
}

export default UserProfileCard
