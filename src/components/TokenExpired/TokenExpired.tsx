import { Button } from '@mui/material';
import React from 'react';

const TokenExpired = () => {
  return (
    <div>
      <h4>Your input token has expired</h4>

      <div className='btn-container'>
        <a href='http://tg://t.me/auto_forwarder_bot' target='_blank'>
          <Button variant='contained' className='login-code-btn'>
            Go to Auto Forwarder Bot
          </Button>
        </a>
      </div>
    </div>
  );
};

export default TokenExpired;
