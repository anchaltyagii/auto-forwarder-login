import React, { useEffect } from 'react';
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
import axios from 'axios';

function App() {
  const location = useLocation();
  const navigate = useNavigate();

  const [searchParams] = useSearchParams();
  const token: any = searchParams.get('token');

  localStorage.setItem(
    'token',
    'gAAAAABmHiw1HVpgAcR3tBo8NtG-8heltIj7FJzuLp-lZppF2X_sm9Ud-xgnTWi8kvqrz1Gh4VXUx490MXGHzg6K7VpIgS2wr_ku4Z5ZdBe03_O5uM9himQ%3D'
  );

  useEffect(() => {
    const getToken = async () => {
      try {
        // setIsLoading(true);
        axios
          .get(`${baseUrl}/token_code`, {
            headers: {
              'Access-Control-Allow-Origin': '*',
            },
          })
          .then((res: any) => {
            console.log('res', res);
            if (res?.success === true) {
            }
          });
      } catch (err) {
        console.log('error', err);
      } finally {
        // setIsLoading(false);
      }
    };
    getToken();
  }, []);

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
