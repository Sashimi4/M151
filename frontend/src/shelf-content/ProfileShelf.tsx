import React from 'react';
import styled, { css } from 'styled-components';
import { useAuth0 } from '@auth0/auth0-react';

//AppState = PROFILE
const ProfileShelf = () => {
  const { user, isLoading } = useAuth0();

  //Needsa to contain form for editing user -> if necessary make is so that only an admin can alter profiles ???
    return (
      <div>
        Profile Shelf
        <div>
          <img src={user?.picture} alt={user?.name} />
          <h2>{user?.name}</h2>
          <p>{user?.email}</p>
        </div>
        <button>
          Logout
        </button>
      </div>
    );
  }
  export default ProfileShelf;