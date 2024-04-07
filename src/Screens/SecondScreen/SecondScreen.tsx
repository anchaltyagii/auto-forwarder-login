import React from 'react';
import { Button, TextField } from '@mui/material';

const SecondScreen = () => {
  return (
    <div>
      <TextField
        variant='standard'
        placeholder='Enter code'
        size='small'
        inputProps={{ maxLength: 5 }}
      />

      <Button variant='contained'>Submit</Button>
    </div>
  );
};

export default SecondScreen;
