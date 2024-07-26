import React, { useState } from 'react'
import {
  Button,
  Container,
  Paper,
  TextField,
  Typography,
} from '@mui/material'
import { bgGradient } from '../../constants/color'
import { useInputValidation } from '6pp'
import { Navigate } from 'react-router-dom';

const isAdmin = false;

const AdminLogin = () => {
  const secretKey = useInputValidation("")
  const submitHandler = (e) => {
    e.preventDefault();
    console.log("submit");
  };

  if (isAdmin) return (
    <Navigate to={"/admin/dashboard"} />
  )

  return (
    <div
      style={{
        backgroundImage: bgGradient,
      }}
    >
      <Container
        component={"main"}
        maxWidth="xs"
        sx={{
          height: '100dvh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          // padding: '1rem',
          marginTop: '3.5rem',
        }}
      >
        <Paper
          elevation={3}
          sx={{
            padding: 4,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}>


              <Typography variant='h4'>
                Admin Login
              </Typography>

              <form
                style={{
                  width: '100%',
                  marginTop: '1rem',
                }}
                onSubmit={submitHandler}
              >

                <TextField
                  label='Secret Key'
                  type='password'
                  margin='normal'
                  variant='outlined'
                  value={secretKey.value}
                  onChange={secretKey.changeHandler}
                  fullWidth
                  required
                />

                <Button
                  type='submit'
                  variant='contained'
                  color='primary'
                  sx={{
                    marginTop: '1rem',
                  }}
                  fullWidth
                >
                  Login
                </Button>
              </form>
        </Paper>
      </Container>
    </div>
  )
}

export default AdminLogin