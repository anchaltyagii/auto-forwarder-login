import React, { useState } from 'react';
import FirstScreen from './FirstScreen/FirstScreen';
import SecondScreen from './SecondScreen/SecondScreen';
import Layout from '../components/Layout.tsx/Layout';
import { Strings } from '../Constants/Strings';
import ThirdScreen from './ThirdScreen/ThirdScreen';
import FourthScreen from './FourthScreen/FourthScreen';
import './style.scss';
import {
  mobileNumberValidation,
  removeWhitespaceAndHyphens,
} from '../Constants/Validations';
import axios from 'axios';
import { useLocation, useSearchParams } from 'react-router-dom';
import { baseUrl } from '../Services/APIConstant';
import TokenExpired from '../components/TokenExpired/TokenExpired';
import Alert from '@mui/material/Alert';

const Index = () => {
  const [mobNo, setMobNo] = useState('');
  const [inputDisabled, setInputDisabled] = useState(false);
  const [mobNoErr, setMobNoErr] = useState(false);
  const [firstScreen, setFirstScreen] = useState(true);
  const [secondScreen, setSecondScreen] = useState(false);
  const [thirdScreen, setThirdScreen] = useState(false);
  const [fourthScreen, setFourthScreen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const token = localStorage.getItem('token');

  const handleMobile = async () => {
    if (!mobileNumberValidation(removeWhitespaceAndHyphens(mobNo))) {
      setMobNoErr(true);
    } else {
      // setInputDisabled(true);
      // setFirstScreen(false);
      // setSecondScreen(true);
      try {
        setIsLoading(true);
        const response = await axios
          .post(
            `${baseUrl}/send_login_code/`,
            {
              phone: removeWhitespaceAndHyphens(mobNo),
              token: token,
            },
            {
              headers: {
                'Access-Control-Allow-Origin': '*',
              },
            }
          )
          .then((res: any) => {
            // console.log('res data mobile', res.response.data.success);
            if (res.response.data.success === 200) {
              setInputDisabled(true);
              setFirstScreen(false);
              setSecondScreen(true);
            } else {
              console.log('Error', res.response.data.success);
            }
          });
        console.log('response', response);
      } catch (err) {
        console.log('error', err);
        alert(err);
      } finally {
        setIsLoading(false);
      }
    }
  };

  return (
    <>
      <Layout>
        {firstScreen && (
          <FirstScreen
            mobNo={mobNo}
            setMobNo={setMobNo}
            handleMobile={handleMobile}
            inputDisabled={inputDisabled}
            mobNoErr={mobNoErr}
            isLoading={isLoading}
          />
        )}

        {secondScreen && (
          <SecondScreen
            mobNo={mobNo}
            inputDisabled={inputDisabled}
            setThirdScreen={setThirdScreen}
            setSecondScreen={setSecondScreen}
            setFirstScreen={setFirstScreen}
            setFourthScreen={setFourthScreen}
          />
        )}

        {thirdScreen && (
          <ThirdScreen
            mobNo={mobNo}
            inputDisabled={inputDisabled}
            setThirdScreen={setThirdScreen}
            setSecondScreen={setSecondScreen}
            setFirstScreen={setFirstScreen}
            setFourthScreen={setFourthScreen}
          />
        )}

        {fourthScreen && <FourthScreen />}

        {/* {<TokenExpired />} */}
      </Layout>
    </>
  );
};

export default Index;
