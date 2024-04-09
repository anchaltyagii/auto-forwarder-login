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
import MuiPhoneNumber from 'material-ui-phone-number';

const FirstScreen = () => {
  const { mobileNoLabel, mobileNoErrMsg } = Strings;
  const [countryCode, setCountryCode] = useState('');
  const [mobNo, setMobNo] = useState('');
  const [mobNoErr, setMobNoErr] = useState(false);

  const handleMobileSubmission = () => {
    console.log('mobile number', mobNo);
    if (!mobileNumberValidation(mobNo)) {
      setMobNoErr(true);
    } else {
      setMobNo('');
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
          // onlyCountries={'us', 'kz'}
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
    </Layout>
  );
};

export default FirstScreen;
