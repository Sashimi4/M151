import React from 'react';
import styled, { css } from 'styled-components';
import { useAuth0 } from '@auth0/auth0-react';

const LandinPage = () => {

  const printClick = () =>{
    console.log("click")
  }

  const { loginWithRedirect } = useAuth0();

    return (
      <div style={container}>
        <div style={navbar}>
          <h1>Navbar</h1>
        </div>
        <Button onClick={() => loginWithRedirect()}>
          <h2>Login</h2>
        </Button>
        <div style={footer}>
          <h1>Footer</h1>
        </div>
      </div>
    );
  }

  const container = {
    
  }

  const Button = styled.button`
    background: transparent;
    border-radius: 3px;
    border: 2px solid palevioletred;
    color: palevioletred;
    margin: 0 1em;
    padding: 0.25em 1em;
  `;

  const navbar = {
    backgroundColor: "#44014C"
  }

  const footer = {
    backgroundColor: "#44014C"
  }
  
  export default LandinPage;