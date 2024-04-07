import React from 'react';
import { Button, TextField } from '@mui/material';

const FirstScreen = () => {
  return (
    <div>
      <TextField
        id='outlined-basic'
        label='Mobile No.'
        variant='outlined'
        placeholder='Enter Mobile No.'
        size='small'
        inputProps={{ maxLength: 10 }}
      />

      <Button variant='contained'>Continue</Button>
    </div>
  );
};

export default FirstScreen;
