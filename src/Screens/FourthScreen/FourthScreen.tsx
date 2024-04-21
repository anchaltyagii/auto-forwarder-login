import React, { useEffect } from 'react';
import { Strings } from '../../Constants/Strings';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const FourthScreen = () => {
  const { successPasswordMsg } = Strings;
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
    <>
      <div>
        <h4>{successPasswordMsg}</h4>

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
    </>
  );
};

export default FourthScreen;
