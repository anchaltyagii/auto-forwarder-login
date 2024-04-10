import { Button, TextField } from '@mui/material';
import React from 'react';
import { Strings } from '../../Constants/Strings';
import MuiPhoneNumber from 'material-ui-phone-number';

const ThirdScreen = ({ mobNo, inputDisabled }: any) => {
  const { mobileNoLabel, passwordLabel, passwordErrorMsg } = Strings;
  const handleChange = () => {};
  return (
    <>
      <div className='mobile_no_field_container'>
        <label>{mobileNoLabel}</label>

        <MuiPhoneNumber
          defaultCountry={'in'}
          variant='outlined'
          value={mobNo}
          size='small'
          type='tel'
          autoComplete='off'
          disabled={inputDisabled}
          onChange={handleChange}
        />
      </div>

      <div className='mobile_no_field_container'>
        <label>{passwordLabel}</label>
        <TextField placeholder='Enter password' type='password' size='small' />

        <div>{<p className='error-msg'>{passwordErrorMsg}</p>}</div>
        <div className='btn-container'>
          <Button
            variant='contained'
            className='login-code-btn'
            // disabled={}
            // onClick={handleCodeSubmit}
          >
            Login
          </Button>
        </div>
      </div>
    </>
  );
};

export default ThirdScreen;
