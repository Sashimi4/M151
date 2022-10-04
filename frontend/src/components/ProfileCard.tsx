import React, { useState } from 'react'
import styled, { css } from 'styled-components'
import Carousel from 'styled-components-carousel'
import { AiOutlineEnvironment } from "react-icons/ai"

import { Card, CardContent, CardMedia } from '@mui/material'
import Typography from '@mui/material/Typography'

const ProfileCard = (props: any) => {

    //match stands for users matches and represents other users
    const [match, setMatch] = useState({
        name: "Lorene",
        age: 26,
        city: "Madrid",
        country: "Spain",
        aboutMe: "Hi my name is Lorene and I love long walks on the beach. Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque corporis, repellendus ipsum atque quibusdam reprehenderit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem mollitia alias vitae placeat quae hic facilis consequatur cumque quod reprehenderit?"
    })

    //array of users -> grab like 5 and then reload or just always grab a new one.
    return (
        <Card>
            <CardMedia
                component="img"
                image="https://imgur.com/OckVkRo.jpg"
                height="100%"
                width="100%"
                alt="Profile Picture"
            />
            <CardContent>
                <Typography>{match.name}, {match.age}</Typography>
                <Typography><AiOutlineEnvironment/> {match.country} | {match.city} </Typography>
                <Typography>{match.aboutMe}</Typography>
            </CardContent>
        </Card>
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