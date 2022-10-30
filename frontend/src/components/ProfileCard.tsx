import React, { useEffect, useState } from 'react'
import styled, { css } from 'styled-components'
import { AiOutlineEnvironment } from "react-icons/ai"
import { TbHeartPlus } from "react-icons/tb"
import { CgClose } from "react-icons/cg"

import { Box, Card, CardContent, CardMedia, Fab } from '@mui/material'
import Typography from '@mui/material/Typography'
import ColorScheme from '../assets/ColorScheme'
import axios from 'axios'
import { useAuth0 } from '@auth0/auth0-react'

const ProfileCard = () => {

    const { getAccessTokenWithPopup } = useAuth0();

    //match stands for users matches and represents other users
    //These are the only necessary fields as of now
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

    //https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch -> available options
    const fetchUserProfile = async () => {
        const response = await fetch("http://localhost:8080/profile/Janet", {
            method: 'GET',
            mode: 'cors',
            cache: 'no-cache',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Basic ${retreiveToken}`
            },
        })
        console.log("response: " + response)
    }

    useEffect(() => {
        fetchUserProfile()
    }, [])

    //array of users -> grab like 5 and then reload or just always grab a new one.
    return (
        <>
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
        </>
    )
}

export default ProfileCard

const CardContainer = styled.div`
    position: relative;
    //display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 8px;
    margin-right: 2em;
    margin-left: 2em;
    align-items: center;
    width: 50%;
    border-radius: 10px;

    //test purposes
    background-color: salmon;
`

const ProfileImage = styled.img`
    position: relative;
    height: auto;
    width: 100%;
    object-fit: contain;
    border-radius: 10px;
`

const TextWrapper = styled.div`
    position: relative;
    justify-content: center;
    align-items: center;
    margin-left: 10px;
    margin-right: 10px;

    //test purposes
    background-color: pink;
`

const LocationText = styled.h3`
    color: blue;
`

const UserTitle = styled.h1`
    color: red;
`

const AboutText = styled.p`
    color: white;
`