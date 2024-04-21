import React, { useEffect, useState } from 'react';
import Screens from './Screens/index';
import {
  Routes,
  Route,
  useNavigate,
  useLocation,
  useSearchParams,
} from 'react-router-dom';
import './App.scss';
import { baseUrl } from './Services/APIConstant';

function App() {
  const location = useLocation();
  const navigate = useNavigate();

  const [searchParams] = useSearchParams();
  const token: any = searchParams.get('token');

  localStorage.setItem('aageToken', token);

  // useEffect(() => {
  //   const getToken = async () => {
  //     try {
  //       // setIsLoading(true);
  //       axios
  //         .get(`${baseUrl}/token_code`, {
  //           headers: {
  //             'Access-Control-Allow-Origin': '*',
  //           },
  //         })
  //         .then((res: any) => {
  //           console.log('res', res);
  //           if (res?.success === true) {
  //           }
  //         });
  //     } catch (err: any) {
  //       console.log('error', err.message);
  //       // setTokenExpired(true);
  //     } finally {
  //       // setIsLoading(false);
  //     }
  //   };
  //   getToken();
  // }, []);

  useEffect(() => {
    if (location.pathname === '/') {
      navigate('/authorize');
    }
  }, []);

  return (
    <div className='main-container'>
      <Routes>
        <Route path='/authorize' element={<Screens />} />
      </Routes>
    </div>
  );
}

export default App;
