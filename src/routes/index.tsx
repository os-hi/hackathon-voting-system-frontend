import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NotFound from '../pages/NotFound';
import Login from '../pages/Login';
import { AuthContext } from '../context/authContext';
import { useContext } from 'react';
import TokenExpired from '../pages/TokenExpired';
import Dashboard from '../pages/Dashboard';

const Router = () => {
    const { state } = useContext(AuthContext);
    const { token } = state;
  
    console.log('token : ', token);
  
    return (
      <BrowserRouter>
        {token ? (
          <Routes>
            <Route path='/dashboard' element={<Dashboard />}></Route>
            <Route path='*' element={<NotFound />} />
          </Routes>  
        ) : (
          <Routes>
            <Route path='/' element={<Login />}></Route>
            <Route path='/login' element={<Login />}></Route>
            {/* <Route path='/sign-up' element={<SignUp />}></Route> */}
            {/* <Route path='/forgot-password' element={<ResetPassword />}></Route>
            <Route path='/forgot-password/new-password' element={<UpdatePassword />}></Route>
            <Route path='/forgot-password/success' element={<UpdateSuccess />}></Route> */}
            <Route path='/expired' element={<TokenExpired />} />
            <Route path='*' element={<NotFound />} />
          </Routes>
        )}
      </BrowserRouter>
    );
  };
  
  export default Router;
  