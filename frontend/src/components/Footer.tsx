import React from 'react';
import styled, { css } from 'styled-components';

const Footer = () => {

    return (
      <Container>
        <ContentWrapper>

          <h1>Footer</h1>

          <p>Description</p>

          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum dignissimos quo a inventore nihil nesciunt consectetur, vero nisi ipsum. Dolorum cumque eum exercitationem dolorem veritatis. Nostrum eos quos maxime beatae! Doloremque quidem, quasi eos ipsam nemo sapiente voluptatum veniam repudiandae?</p>

        </ContentWrapper>
      </Container>
    );
  }

  export default Footer;

  const Container = styled.div`
    background-color:  #E0E0E0;
    padding-top: 1em;
    padding-bottom: 1.5em;
    padding-right: 1em;
    padding-left: 1em;
  `;

  const ContentWrapper = styled.div`
    flex-direction: row;
    justify-content: '';
  `;