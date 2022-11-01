import React, { useEffect, useState } from 'react'
import styled, { css } from 'styled-components'
import { AiOutlineEnvironment } from "react-icons/ai"
import { TbHeartPlus } from "react-icons/tb"
import { CgClose } from "react-icons/cg"

import { Box, Card, CardContent, CardMedia, CircularProgress, Fab } from '@mui/material'
import Typography from '@mui/material/Typography'
import ColorScheme from '../assets/ColorScheme'
import axios from 'axios'
import { useAuth0 } from '@auth0/auth0-react'

const ProfileCard = () => {

    const { getAccessTokenWithPopup } = useAuth0();

    const [match, setMatch] = useState({
        name: "Lorene",
        age: 26,
        imgSrc: "https://imgur.com/OckVkRo.jpg",
        city: "Madrid",
        country: "Spain",
        aboutMe: "Hi my name is Lorene and I love long walks on the beach. Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque corporis, repellendus ipsum atque quibusdam reprehenderit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem mollitia alias vitae placeat quae hic facilis consequatur cumque quod reprehenderit?"
    })

    const retreiveToken = async () => {
        const accessToken = await getAccessTokenWithPopup({
            domain: "dev-opmozjaa.us.auth0.com",
            client_id: "c2myyEju3WbyPYQLqrzTb5wdqoxBbqsF",
            audience: "https://tinder.space.com",
        })
        return accessToken
    }

    const fetchUserProfile = async () => {
        try{
        const response = await fetch("http://localhost:8080/profile/Janet", {
            method: 'GET',
            mode: 'cors',
            cache: 'no-cache',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Basic ${retreiveToken}`
            },
        })
        }catch(e) {
            console.error(e)
        }
    }

    useEffect(() => {
        fetchUserProfile()
    }, [])

    return (
        <>
            { match ? 
            <Box sx={{backgroundColor: ColorScheme.BLACK, padding: "1em", marginTop: "1em", width: "60%"}}>
                <img src={`${match.imgSrc}`} srcSet={`${match.imgSrc}`} style={{width: 350, height: 550, objectFit: "cover"}} alt="Profile Picture"/>
                    <Box>
                        <Typography sx={{color: ColorScheme.WHITE, fontSize: "25px"}}>{match.name}, {match.age}</Typography>
                        <Box sx={{display: "flex", alignItems: "center", marginBottom: "0.8em"}}>
                            <AiOutlineEnvironment color={ColorScheme.WHITE}/>
                            <Typography sx={{color: ColorScheme.WHITE, fontSize: "15px", marginLeft: "0.5em"}}> {match.country} | {match.city} </Typography>
                        </Box>
                    </Box>
                    <Fab aria-label="Like"
                    size="medium"
                    sx={{backgroundColor: ColorScheme.BACKGROUND_BLACK, color: ColorScheme.WHITE, marginRight: "5px"}}>
                        <TbHeartPlus color={ColorScheme.HEART_GREEN} size={24}/>
                    </Fab>
                    <Fab aria-label="Dislike"
                    size="medium"
                    sx={{backgroundColor: ColorScheme.BACKGROUND_BLACK, color: ColorScheme.WHITE, marginRight: "5px"}}>
                        <CgClose color={ColorScheme.CLOSE_RED} size={24}/>
                    </Fab>
                <Typography sx={{color: ColorScheme.WHITE}}>{match.aboutMe}</Typography>
            </Box>
            :
            <Box sx={{justifyContent: "center", alignSelf: "center"}}>
                <CircularProgress color="secondary"/>
            </Box>
            }

        </>
    )
}

export default ProfileCard
