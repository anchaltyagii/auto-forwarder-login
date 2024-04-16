import React, { useState } from 'react';
import { Button, TextField } from '@mui/material';
import Layout from '../../components/Layout.tsx/Layout';
import {
  isPasswordValid,
  mobileNumberValidation,
  removeWhitespaceAndHyphens,
} from '../../Constants/Validations';
import { Strings } from '../../Constants/Strings';
import PhoneInput from 'react-phone-input-2';
import { useNavigate, useSearchParams } from 'react-router-dom';
import MuiPhoneNumber from 'material-ui-phone-number';
import './SecondScreen.scss';
import axios from 'axios';
import { baseUrl } from '../../Services/APIConstant';

const SecondScreen = ({
  mobNo,
  inputDisabled,
  setThirdScreen,
  setSecondScreen,
  setFirstScreen,
  setFourthScreen,
}: any) => {
  const { mobileNoLabel, enterCodeLabel, codeErrMsg } = Strings;
  const [codeErr, setCodeErr] = useState(false);
  const [code, SetCode] = useState('');

  const handleChange = () => {};
  const token = localStorage.getItem('token');

  const handleCodeSubmit = async () => {
    try {
      axios
        .post(`${baseUrl}/login_with_code/`, {
          phone: removeWhitespaceAndHyphens(mobNo),
          code: code,
          token: token,
        })
        .then((res: any) => {
          console.log('res login code', res.response.data.success);
          if (res.response.data.success === true) {
            if (res.response.data.two_fa_required === true) {
              setFirstScreen(false);
              setSecondScreen(false);
              setThirdScreen(true);
            } else {
              setSecondScreen(false);
              setFourthScreen(true);
            }
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
