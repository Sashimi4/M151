import React from 'react';
import styled, { css } from 'styled-components';
import { useAuth0 } from '@auth0/auth0-react';
import { Box, Button, Typography } from '@mui/material';

const LandinPage = () => {

  const { loginWithRedirect } = useAuth0();

    return (
      <>
        <Box sx={{backgorundColor: "green", position: "absolute", zIndex: 0, top: 0, left: 0, width: "100%", height: "100%"}}>
          <Box sx={{backgroundColor: "red",position: "absolute", display: "flex"}}>
            <Typography>" App Name " - Simple Selecting Succesfully</Typography>
          </Box>
          <Box sx={{position: "relative",backgroundColor: "magenta", alignItems: "center", justifyContent: "center"}}>
            <Button onClick={() => loginWithRedirect()}>
              <h2>Login</h2>
            </Button>
          </Box>
          <Box sx={{backgroundColor: "red",position: "absolute", display: "flex"}}>
            <Typography>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, neque. Assumenda delectus a blanditiis neque maiores, voluptatem reiciendis tempora autem.</Typography>
          </Box>
        </Box>
      </>
    );
  }
  
  export default LandinPage;