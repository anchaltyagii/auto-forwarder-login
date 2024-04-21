import { Button } from '@mui/material';
import React, { useEffect } from 'react';
import './TokenExpired.scss';

const TokenExpired = () => {
  useEffect(() => {
    const screenWidth = window.innerWidth;
    const screenHeight = window.innerHeight;

    if (screenWidth < 550 && screenHeight < 1024) {
      setTimeout(() => {
        window.location.href = 'http://tg://t.me/auto_forwarder_bot';
      }, 30000);
    } else {
      setTimeout(() => {
        window.location.href = 'https://t.me/auto_forwarder_bot';
      }, 30000);
    }
  }, []);

  return (
    <div>
      <div className='token-expired-text-wrapper'>
        <h4>Your input token has expired</h4>
        <h4>
          You are being redirected to the bot. Please click the button below to
          do it now
        </h4>
      </div>

      {/* mobile-display */}
      <div className='btn-container mobile-display'>
        <a href='http://tg://t.me/auto_forwarder_bot' target='_self'>
          <Button variant='contained' className='login-code-btn'>
            Go to Auto Forwarder Bot
          </Button>
        </a>
      </div>

      {/* desktop-display */}
      <div className='btn-container desktop-display'>
        <a href='https://t.me/auto_forwarder_bot' target='_self'>
          <Button variant='contained' className='login-code-btn'>
            Go to Auto Forwarder Bot
          </Button>
        </a>
      </div>
    </div>
  );
};

export default TokenExpired;
