import { Paper } from '@mui/material';
import React from 'react';
import MessageItem from '../components/MessageItem';
import TextField from '../components/TextField';
import Grid2 from '@mui/material/Unstable_Grid2';

const MessageShelf = () => {

    return (
      <Paper elevation={0} sx={{width: '100%'}}>
        <TextField/>
      </Paper>
    );
  }

  export default MessageShelf;