import React from 'react';
import styled, { css } from 'styled-components';

const Navbar = () => {

    return (
      <Container>
          <h1>Navbar</h1>
      </Container>
    );
  }

  export default Navbar;

  const Container = styled.div`
    flex-direction: row;
    background-color: #A51080;
    padding-top: 1em;
    padding-bottom: 1.5em;
    padding-right: 1em;
    padding-left: 1em;
  `;