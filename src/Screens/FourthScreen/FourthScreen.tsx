import React from 'react';
import { Strings } from '../../Constants/Strings';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const FourthScreen = () => {
  const { successPasswordMsg } = Strings;
  

  return (
    <>
      <div>
        <h4>{successPasswordMsg}</h4>

        <div className='btn-container'>
          <a href='http://tg://t.me/auto_forwarder_bot' target='_blank'>
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
