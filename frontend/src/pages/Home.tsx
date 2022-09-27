import React from 'react';
import ProfileShelf from '../shelf-content/ProfileShelf';
import { withAuthenticationRequired } from '@auth0/auth0-react';
import ProfileCard from '../components/ProfileCard';

const Home = () => {

    return (
      /* Interchangeable shelf content */
      <div>
        <ProfileCard />
        <hr></hr>
        <ProfileShelf/>
      </div>
    );
  }

  export default withAuthenticationRequired(Home, {
    // Update message with loading icon
    onRedirecting: () => (<div>Redirecting you to the login page...</div>)
  });