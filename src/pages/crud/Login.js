import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { dispatchLogin } from '../../features/users/UsersSlice';

// ROUTER DOM
import { Link } from 'react-router-dom';

// MUI
import { Box, Typography, TextField, Button } from '@mui/material';

// LAYOUT
import CrudLayout from '../../layouts/CrudLayout'

function Login() {
  const dispatch = useDispatch();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    var loginData = {
      loginEmail: email,
      loginPassword: password
    }

    dispatch(dispatchLogin(loginData));
  }

  return (
    <CrudLayout>
        <div className='form_box'>
          <Box fullWidth sx={{ p: 5, boxShadow: 2 }} component="form" noValidate autoComplete="off">
            <div>
              <Typography fullWidth sx={{ mb: 5 }} variant="h4" gutterBottom align="center">Login</Typography>
            </div>
            <div>
              <TextField fullWidth sx={{ mb: 2 }} size="small" type={'email'} required id="email" name="email" label="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div>
              <TextField fullWidth sx={{ mb: 2 }} size="small" type={'password'} required id="password" name="password" label="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
            </div>
            <div>
              <Button fullWidth sx={{ mt: 2, mb: 2 }} variant='contained' size='medium' onClick={handleLogin}>Login</Button>
            </div>
            <div>
              <Typography fullWidth sx={{ mt: 5 }} variant="body2" gutterBottom align="center">Don't have an Account! <Link to={"/register"}>Register</Link></Typography>
            </div>
          </Box>
        </div>
    </CrudLayout>
  )
}

export default Login
