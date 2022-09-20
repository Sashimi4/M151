import React from 'react';
import styled, { css } from 'styled-components';
import { useAuth0 } from '@auth0/auth0-react';

const ProfileShelf = () => {

  const { logout } = useAuth0();

    return (
      <div>
        Profile Shelf
        <Button onClick={() => logout({returnTo: "/login"})}>
          <h2>Logout</h2>
        </Button>
      </div>
    );
  }

  const Button = styled.button`
    background: transparent;
    border-radius: 3px;
    border: 2px solid palevioletred;
    color: palevioletred;
    margin: 0 1em;
    padding: 0.25em 1em;
  `;

  export default ProfileShelf;