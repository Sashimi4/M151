import React from 'react';
import styled, { css } from 'styled-components';
import { useAuth0 } from '@auth0/auth0-react';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

const LandinPage = () => {

  const { loginWithRedirect } = useAuth0();

    return (
      <Container>

        <Navbar/>

        <ContentWrapper>

        <div>
          <BackgroundImage src={"https://cdn.vox-cdn.com/thumbor/ffLuinvyEVnOyL-QxxKyRKkVw0Y=/0x0:2040x1360/1400x1400/filters:focal(1020x680:1021x681)/cdn.vox-cdn.com/uploads/chorus_asset/file/12445491/acastro_180822_1777_tinder_0002.jpg"}/>
        </div>

        <Button onClick={() => loginWithRedirect()}>
          <h2>Login</h2>
        </Button>

        </ContentWrapper>

        <Footer/>

      </Container>
    );
  }

  const Container = styled.div`
    flex: 1;
    position: relative;
  `;

  const BackgroundImage = styled.img`
    width: 100%;
    height: 50%;
  `;

  const ContentWrapper = styled.div`
    background-color: #000000;
    x-overflow: 0;
  `;

  const Button = styled.button`
    background: transparent;
    border-radius: 50px;
    border: 2px solid palevioletred;
    color: palevioletred;
    margin: 0 1em;
    padding: 0.25em 1em;
    :hover {
      cursor: pointer;
    }
  `;
  
  export default LandinPage;