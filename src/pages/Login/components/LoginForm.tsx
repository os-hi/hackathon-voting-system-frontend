import { useFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { Link, Navigate, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../context/authContext';

import { ActionType, setLoginToken } from '../../../actions/authActions';
import { useContext, useEffect} from 'react';
import { authAPI } from '../../../service/api';
import { getLocalStorageItem } from '../../../utility/helper';

function LoginForm() {
  const navigate = useNavigate();
  const { dispatch } = useContext(AuthContext);

  const location = useLocation();

  useEffect(() => {
    if(getLocalStorageItem('token') !== null && location.pathname === '/login') {
      dispatch({
        type: ActionType.LOGOUT,
      });
    }
  }, [])

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: Yup.object().shape({
      email: Yup.string().email('Invalid Email').required('Email is required'),
      password: Yup.string().required('Password is required'),
    }),
    onSubmit: async (values) => {
      try {
        console.log('asdasd');
        // Simulate a login request to the backend
        const response = await axios.post(authAPI.LOGIN, values, 
        {
          headers: {
            'Content-Type': 'application/json'
          }
        });

        // Handle successful login (e.g., store tokens, redirect)
        console.log('Login successful', response.data);
        dispatch(setLoginToken(response.data))
        navigate('/dashboard');
        // Redirect to the dashboard or any other page
        // You can use React Router for routing
        // Example: history.push('/dashboard');
      } catch (error) {
        console.error('Login error:', error);

        // Handle the case when the backend is not running or login fails
        // You can show an error message to the user
      }
    },
  });

  return (
    <div className='p-10 drop-shadow-md'>
      <h1 className='text-4xl font-bold text-center m-5'>HackVote</h1>
      <form onSubmit={formik.handleSubmit} className='flex flex-col items-center w-96 h-auto gap-4'>
        <div className='flex flex-col w-full'>
          <label htmlFor="username" className='mb-2 font-bold'>Email</label>
          <input
            type="text"
            id="username"
            name="email"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
            placeholder='Enter your email'
            className='border rounded-full p-3'
          />
          {formik.touched.email && formik.errors.email && (
            <div className='text-orange'>{formik.errors.email}</div>
          )}
        </div>
        <div className='flex flex-col w-full'>
          <label htmlFor="password" className='mb-2 font-bold'>Password</label>
          <input
            type="password"
            id="password"
            name="password"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.password}
            placeholder='Enter your password'
            className='border rounded-full p-3'
          />
          {formik.touched.password && formik.errors.password && (
            <div className='text-orange'>{formik.errors.password}</div>
          )}
        </div>
        <button className='w-full bg-secondary text-white rounded-full p-3 hover:bg-accent' type="submit">Login</button>
        <div>Don't have an account?<Link to='/register' className='text-accent'> Register</Link></div>
      </form>
    </div>
  );
}

export default LoginForm;