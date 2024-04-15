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

function App() {
  const location = useLocation();
  const navigate = useNavigate();

  const [searchParams] = useSearchParams();
  const token: any = searchParams.get('token');

  localStorage.setItem('token', token);

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
