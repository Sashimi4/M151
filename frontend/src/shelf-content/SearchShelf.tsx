import React from 'react';
import MessageList from '../components/MessageList';
import ProfileCard from '../components/ProfileCard';
import styled, { css } from 'styled-components';
import { Box } from '@mui/material';
import ColorScheme from '../assets/ColorScheme';

const SearchShelf = () => {

    return (
      <>
        <Box sx={{backgroundColor: ColorScheme.BACKGROUND_BLACK, paddingRight: "35px", paddingLeft: "25px", 
        alignItems: "center", position: "absolute", top: 0, height: "100%", width: "46%"}}>
          <ProfileCard/>
        </Box>
      </>
    );
  }

  export default SearchShelf;