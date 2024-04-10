import React, { useState } from 'react';
import { Button, TextField } from '@mui/material';
import Layout from '../../components/Layout.tsx/Layout';
import {
  isPasswordValid,
  mobileNumberValidation,
} from '../../Constants/Validations';
import { Strings } from '../../Constants/Strings';
import PhoneInput from 'react-phone-input-2';
import { useNavigate } from 'react-router-dom';
import MuiPhoneNumber from 'material-ui-phone-number';
import './SecondScreen.scss';

const SecondScreen = ({
  mobNo,
  inputDisabled,
  setThirdScreen,
  setSecondScreen,
  setFirstScreen,
}: any) => {
  const { mobileNoLabel, enterCodeLabel, codeErrMsg } = Strings;
  const [codeErr, setCodeErr] = useState(false);
  const [code, SetCode] = useState('');
  const [codeDisabled, setCodeDisabled] = useState(false);

  const handleChange = () => {};

  const handleCodeSubmit = () => {
    setCodeDisabled(true);
    setThirdScreen(true);
    setSecondScreen(false);
    setFirstScreen(false);
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

      <div className='code_field_container'>
        <label>{enterCodeLabel}</label>
        <TextField
          placeholder='12345'
          inputProps={{ maxLength: 5 }}
          type='tel'
          autoComplete='off'
          size='small'
          onChange={(e: any) => SetCode(e.target.value)}
        />

        <div>{codeErr && <p className='error-msg'>{codeErrMsg}</p>}</div>
        <div className='btn-container'>
          <Button
            variant='contained'
            className='login-code-btn'
            disabled={code.length !== 5}
            onClick={handleCodeSubmit}
          >
            Login with code
          </Button>
        </div>
      </div>
    </>
  );
};

export default SecondScreen;
