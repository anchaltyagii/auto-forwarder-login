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

const Index = () => {
  const [mobNo, setMobNo] = useState('');
  const [inputDisabled, setInputDisabled] = useState(false);
  const [mobNoErr, setMobNoErr] = useState(false);
  const [firstScreen, setFirstScreen] = useState(true);
  const [secondScreen, setSecondScreen] = useState(false);
  const [thirdScreen, setThirdScreen] = useState(false);
  const [fourthScreen, setFourthScreen] = useState(false);

  const token = localStorage.getItem('token');

  const handleMobile = () => {
    if (!mobileNumberValidation(removeWhitespaceAndHyphens(mobNo))) {
      setMobNoErr(true);
    } else {
      setInputDisabled(true);
      setFirstScreen(false);
      setSecondScreen(true);
      try {
        axios
          .post(`${baseUrl}/send_login_code`, {
            phone: removeWhitespaceAndHyphens(mobNo),
            token: token,
          })
          .then((res: any) => {
            // console.log('res', res);
            if (res?.success === true) {
              setInputDisabled(true);
              setFirstScreen(false);
              setSecondScreen(true);
            }
          });
      } catch (err) {
        console.log('error', err);
      } finally {
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
      </Layout>
    </>
  );
};

export default Index;
