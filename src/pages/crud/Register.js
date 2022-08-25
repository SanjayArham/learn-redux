import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { dispatchRegister } from '../../features/users/UsersSlice';

// ROUTER DOM
import { Link } from 'react-router-dom';

// MUI
import { Box, Typography, TextField, Button } from '@mui/material';

// LAYOUT
import CrudLayout from '../../layouts/CrudLayout'

function Register() {

  const dispatch = useDispatch()

  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleRegister = () => {
    var registerData = {
      registerFirstname: firstname,
      registerLastname: lastname,
      registerEmail: email,
      registerPassword: password,
      registerConfirmPassword: confirmPassword
    }

    dispatch(dispatchRegister(registerData));
  }

  return (
    <CrudLayout>
        <div className='form_box'>
          <Box fullWidth sx={{ p: 5, boxShadow: 2 }} component="form" noValidate autoComplete="off">
            <div>
              <Typography fullWidth sx={{ mb: 5 }} variant="h4" gutterBottom align="center">Register</Typography>
            </div>
            <div>
              <TextField fullWidth sx={{ mb: 2 }} size="small" required id="firstname" name="firstname" label="First Name" value={firstname} onChange={(e) => setFirstname(e.target.value)} />
            </div>
            <div>
              <TextField fullWidth sx={{ mb: 2 }} size="small" required id="lastname" name="lastname" label="Last Name" value={lastname} onChange={(e) => setLastname(e.target.value)} />
            </div>
            <div>
              <TextField fullWidth sx={{ mb: 2 }} size="small" required id="email" name="email" label="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div>
              <TextField fullWidth sx={{ mb: 2 }} size="small" required id="password" name="password" label="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
            </div>
            <div>
              <TextField fullWidth sx={{ mb: 2 }} size="small" required id="confirmPassword" name="confirmPassword" label="Confirm Password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
            </div>
            <div>
              <Button fullWidth sx={{ mt: 2, mb: 2 }} variant='contained' size='medium' onClick={handleRegister}>Register</Button>
            </div>
            <div>
              <Typography fullWidth sx={{ mt: 5 }} variant="body2" gutterBottom align="center">Already have an Account! <Link to={"/"}>Login</Link></Typography>
            </div>
          </Box>
        </div>
    </CrudLayout>
  )
}

export default Register
