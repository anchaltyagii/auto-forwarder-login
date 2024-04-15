import { Button, TextField } from '@mui/material';
import React, { useState } from 'react';
import { Strings } from '../../Constants/Strings';
import MuiPhoneNumber from 'material-ui-phone-number';
import axios from 'axios';
import { baseUrl } from '../../Services/APIConstant';
import { removeWhitespaceAndHyphens } from '../../Constants/Validations';

const ThirdScreen = ({
  mobNo,
  inputDisabled,
  setFirstScreen,
  setSecondScreen,
  setThirdScreen,
  setFourthScreen,
}: any) => {
  const { mobileNoLabel, passwordLabel, passwordErrorMsg } = Strings;
  const [password, setPassword] = useState('');
  const [passwordErrMsg, setPasswordErrMsg] = useState(false);

  const token = localStorage.getItem('token');

  const handleChange = () => {};

  const handlePassword = () => {
    setThirdScreen(false);
    setFourthScreen(true);
    try {
      axios
        .post(`${baseUrl}/login_with_password`, {
          phone: removeWhitespaceAndHyphens(mobNo),
          password: password,
          token: token,
        })
        .then((res: any) => {
          // console.log('res', res);
          if (res?.success === true) {
            setThirdScreen(false);
            setFourthScreen(true);
          }
        });
    } catch (err) {
      console.log('error', err);
    } finally {
    }
  };

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
        <TextField
          placeholder='Enter password'
          type='password'
          size='small'
          onChange={(e: any) => setPassword(e.target.value)}
        />

        <div>
          {passwordErrMsg && <p className='error-msg'>{passwordErrorMsg}</p>}
        </div>
        <div className='btn-container'>
          <Button
            variant='contained'
            className='login-code-btn'
            disabled={password === ''}
            onClick={handlePassword}
          >
            Login
          </Button>
        </div>
      </div>
    </>
  );
};

export default ThirdScreen;
