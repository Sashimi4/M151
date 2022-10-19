import { useAuth0 } from '@auth0/auth0-react';
import { Avatar, Box, Typography } from '@mui/material'
import React from 'react'

const UserProfileCard = () => {

    const { user, isLoading } = useAuth0();

    return (
        <>
            <Box sx={{display: "flex", alignItems: "center"}}>
                <Avatar src={user?.picture} alt="Personal Avatar" sx={{width: 56, height: 56}}/>
                <Box sx={{marginLeft: "0.8em"}}>
                    <Typography sx={{color: "white", fontSize: "20px"}}>Sarah</Typography>
                    <Typography sx={{color: "white", fontSize: "10px"}}>see your profile</Typography>
                </Box>
            </Box>
        </>
    )
}

export default UserProfileCard
