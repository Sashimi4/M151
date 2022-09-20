import React from 'react';
import styled, { css } from 'styled-components';
import { useAuth0 } from '@auth0/auth0-react';

const ProfileShelf = () => {

  const { logout } = useAuth0();

  //Fetching user information currently from auth0 cloud DB, will be swapped in future to external database.
  const { user, isAuthenticated, isLoading } = useAuth0();

    if (isLoading) {
      return <div>Loading ...</div>;
    }

    return (
      <div>
        Profile Shelf
        <div>
          <img src={user?.picture} alt={user?.name} />
          <h2>{user?.name}</h2>
          <p>{user?.email}</p>
        </div>
        <Button onClick={() => logout({returnTo: "http://localhost:3000/welcome"})}>
          Logout
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