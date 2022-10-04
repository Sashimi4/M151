import React from 'react';
import MessageList from '../components/MessageList';
import ProfileCard from '../components/ProfileCard';
import styled, { css } from 'styled-components';

const SearchShelf = () => {

    return (
      <Wrapper>
        <MessageList/>
        <ProfileCard/>
      </Wrapper>
    );
  }

  const Wrapper = styled.div`
    display: flex;
    height: 50em;
    background-color: blue;
  `

  export default SearchShelf;