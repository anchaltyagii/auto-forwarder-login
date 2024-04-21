import React, { useState } from 'react';
import { Button, IconButton, InputAdornment, TextField } from '@mui/material';
import { Strings } from '../../Constants/Strings';
import MuiPhoneNumber from 'material-ui-phone-number';
import axios from 'axios';
import { baseUrl } from '../../Services/APIConstant';
import { removeWhitespaceAndHyphens } from '../../Constants/Validations';
import { Visibility, VisibilityOff } from '@mui/icons-material';

const ThirdScreen = ({
  mobNo,
  inputDisabled,
  setThirdScreen,
  setFourthScreen,
}: any) => {
  const { mobileNoLabel, passwordLabel, passwordErrorMsg } = Strings;
  const [password, setPassword] = useState('');
  const [passwordErrMsg, setPasswordErrMsg] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const token = localStorage.getItem('aageToken');

  const handleChange = () => {};

  const handlePassword = async () => {
    try {
      setIsLoading(true);
      const response = await axios.post(`${baseUrl}/login_with_password`, {
        phone: removeWhitespaceAndHyphens(mobNo),
        password: password,
        token: token,
      });
      if (response.data.success === true) {
        setPasswordErrMsg(false);
        setThirdScreen(false);
        setFourthScreen(true);
      } else {
        setPasswordErrMsg(true);
      }
    } catch (err) {
      console.log('error', err);
    } finally {
      setIsLoading(false);
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
          type={!showPassword ? 'password' : 'text'}
          size='small'
          onChange={(e: any) => setPassword(e.target.value)}
          InputProps={{
            endAdornment: (
              <InputAdornment position='end'>
                <IconButton
                  aria-label='toggle password visibility'
                  onClick={() => setShowPassword(!showPassword)}
                  edge='end'
                >
                  {!showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            ),
          }}
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
            {isLoading ? 'Loading...' : 'Login'}
          </Button>
        </div>
      </div>
    </>
  );
};

export default ThirdScreen;
