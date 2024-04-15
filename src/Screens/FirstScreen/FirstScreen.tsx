import React, { useState } from 'react';
import { Button } from '@mui/material';
import { Strings } from '../../Constants/Strings';
import './FirstScreen.scss';
import MuiPhoneNumber from 'material-ui-phone-number';

const FirstScreen = ({
  mobNo,
  setMobNo,
  handleMobile,
  inputDisabled,
  mobNoErr,
}: any) => {
  const { mobileNoLabel, mobileNoErrMsg } = Strings;

  function handleOnChange(value: any) {
    setMobNo(value);
  }
  return (
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
          disabled={mobNo === ''}
          onClick={handleMobile}
        >
          Send Login Code
        </Button>
      </div>
    </div>
  );
};

export default FirstScreen;
