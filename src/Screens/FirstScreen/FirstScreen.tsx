import React, { useState } from 'react';
import { Button, InputAdornment, Select, TextField } from '@mui/material';
import {
  isPasswordValid,
  mobileNumberValidation,
} from '../../Constants/Validations';
import { Strings } from '../../Constants/Strings';
import Layout from '../../components/Layout.tsx/Layout';
import './FirstScreen.scss';
import PhoneInput from 'react-phone-input-2';
import { useNavigate } from 'react-router-dom';
import MuiPhoneNumber from 'material-ui-phone-number';
import SecondScreen from '../SecondScreen/SecondScreen';
import ThirdScreen from '../ThirdScreen/ThirdScreen';

const FirstScreen = () => {
  const navigate = useNavigate();

  const { mobileNoLabel, mobileNoErrMsg } = Strings;
  const [countryCode, setCountryCode] = useState('');
  const [mobNo, setMobNo] = useState('');
  const [inputDisabled, setInputDisabled] = useState(false);
  const [mobNoErr, setMobNoErr] = useState(false);
  const [firstScreen, setFirstScreen] = useState(true);
  const [secondScreen, setSecondScreen] = useState(false);
  const [thirdScreen, setThirdScreen] = useState(false);

  const handleMobileSubmission = () => {
    console.log('mobile number', mobNo);
    if (!mobileNumberValidation(mobNo)) {
      setMobNoErr(true);
    } else {
      setSecondScreen(true);
      setFirstScreen(false);
      setInputDisabled(true);
      setMobNoErr(false);
    }
  };

  function handleOnChange(value: any) {
    setMobNo(removeWhitespaceAndHyphens(value));
  }

  function removeWhitespaceAndHyphens(inputString: string) {
    return inputString.replace(/[\s-]/g, '');
  }

  return (
    <Layout>
      {firstScreen && (
        <div>
          <div className='mobile_no_field_container'>
            <label>{mobileNoLabel}</label>

            <MuiPhoneNumber
              defaultCountry={'in'}
              onChange={handleOnChange}
              variant='outlined'
              value={mobNo}
              size='small'
              error={mobNoErr}
              type='tel'
              autoComplete='off'
              disabled={inputDisabled}
            />
          </div>

          <div>{mobNoErr && <p className='error-msg'>{mobileNoErrMsg}</p>}</div>
          <div className='btn-container'>
            <Button
              variant='contained'
              className='login-code-btn'
              disabled={!mobileNumberValidation(mobNo)}
              onClick={handleMobileSubmission}
            >
              Send Login Code
            </Button>
          </div>
        </div>
      )}

      {secondScreen && (
        <SecondScreen
          mobNo={mobNo}
          inputDisabled={inputDisabled}
          setThirdScreen={setThirdScreen}
          setSecondScreen={setSecondScreen}
          setFirstScreen={setFirstScreen}
        />
      )}

      {thirdScreen && (
        <ThirdScreen
          mobNo={mobNo}
          inputDisabled={inputDisabled}
          setThirdScreen={setThirdScreen}
          setSecondScreen={setSecondScreen}
          setFirstScreen={setFirstScreen}
        />
      )}
    </Layout>
  );
};

export default FirstScreen;
