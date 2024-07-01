import React, { useState } from 'react'
import { 
  Avatar, 
  Button, 
  Container, 
  IconButton, 
  Paper, 
  Stack, 
  TextField, 
  Typography,
} from '@mui/material'
import {CameraAlt as CameraAltIcon} from '@mui/icons-material'
import { VisuallyHiddenInput } from '../components/styles/StyledComponents';
import {useFileHandler, useInputValidation, useStrongPassword} from '6pp'
import { usernameValidator } from '../utils/validators';

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);
  const toggleLogin = () => setIsLogin((prev) => !prev);
  const fullName = useInputValidation("");
  const username = useInputValidation("", usernameValidator);
  const email = useInputValidation("");
  const bio = useInputValidation("");
  const password = useInputValidation("");
  // const password = useStrongPassword();

  const avatar = useFileHandler("single");

  const handleLogin = (e) => {
    e.preventDefault();
  };
  const handleSignUp = (e) => {
    e.preventDefault();
  };


  return (
    // <div
    //   style={{
    //     backgroundImage:
    //     "linear-gradient(rgba(200, 200, 200, o.5)rgba(120, 110, 220, .5))"
    //   }}>
    <Container 
      component={"main"} 
      maxWidth="xs"
      sx={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        // padding: '1rem',
        // marginTop: '1rem',
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

          {
            isLogin 
            ? 
            (
            <>
            <Typography variant='h4'>
              Login
            </Typography>

            <form 
              style={{
                width: '100%',
                marginTop: '1rem',
              }}
              onSubmit={handleLogin}
            >

              <TextField 
                label='Username' 
                margin='normal'
                variant='outlined'
                value={username.value}
                onChange={username.changeHandler}
                fullWidth 
                required
              />

              <TextField 
                label='Password' 
                type='password'
                margin='normal'
                variant='outlined'
                value={password.value}
                onChange={password.changeHandler}
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

              <Typography 
                textAlign={'center'}
                m={'1rem'}
              >
                OR
              </Typography>

              <Button
                variant='text'
                fullWidth
                onClick={toggleLogin}
              >
                Sign Up
              </Button>

            </form>
            </>

            ) 
            :            
            (

            <>
              <Typography variant='h4'>
                Sign Up
              </Typography>
  
              <form 
                style={{
                  width: '100%',
                  marginTop: '1rem',
                }}
                onSubmit={handleSignUp}
              >

                <Stack 
                  position={'relative'}
                  width={'10rem'}
                  margin={'auto'}
                >

                  <Avatar 
                    sx={{
                      width: '10rem',
                      height: '10rem',
                      objectFit: 'contain',
                    }}
                    src={avatar.preview}
                  />

                  <IconButton 
                    sx={{
                      position: 'absolute',
                      bottom: '0',
                      right: '0',
                      color: 'white',
                      bgcolor: 'rgb(0, 0, 0, 0.5)',
                      ':hover': {
                        bgcolor: 'rgb(0, 0, 0, 0.7)',
                      },
                    }}
                    component='label'
                  >
                    
                    <>
                    <CameraAltIcon />
                    <VisuallyHiddenInput type='file' 
                      onChange={avatar. changeHandler}/>
                    </>
                  </IconButton>
                </Stack>

                {avatar.error && (
                    <Typography
                      m={'1rem auto'} 
                      width={'fit-content'}
                      display={'block'}
                      color={error}
                      variant='caption'>
                        {avatar.error}
                      </Typography>
                )}

                <TextField 
                  label='name' 
                  margin='normal'
                  variant='outlined'
                  value={fullName.value}
                  onChange={fullName.changeHandler}
                  fullWidth 
                  required
                />

                <TextField 
                  label='Username' 
                  margin='normal'
                  variant='outlined'
                  value={username.value}
                  onChange={username.changeHandler}
                  fullWidth 
                  required
                />

                {username.error && (
                  <Typography 
                      color='error'
                      variant='caption'>
                        {username.error}
                  </Typography>
                )}

                {/* <TextField 
                  label='Phone Number' 
                  margin='normal'
                  variant='outlined'
                  fullWidth 
                  required
                /> */}

                <TextField 
                  label='Email Address' 
                  margin='normal'
                  variant='outlined'
                  value={email.value}
                  onChange={email.changeHandler}
                  fullWidth 
                  required
                />

                <TextField 
                  label='Bio' 
                  margin='normal'
                  variant='outlined'
                  value={bio.value}
                  onChange={bio.changeHandler}
                  fullWidth 
                  required
                />

                <TextField 
                  label='Password' 
                  type='password'
                  margin='normal'
                  variant='outlined'
                  value={password.value}
                  onChange={password.changeHandler}
                  fullWidth 
                  required
                />

                {/* {password.error && (
                  <Typography 
                      color='error'
                      variant='caption'>
                        {password.error}
                  </Typography>
                )} */}
  
                <Button 
                  type='submit'
                  variant='contained'
                  color='primary'
                  sx={{
                      marginTop: '1rem',
                  }}
                  fullWidth
                >
                  Sign Up
                </Button>
  
                <Typography 
                  textAlign={'center'}
                  m={'1rem'}
                >Already have an Account?</Typography>
  
                <Button
                  variant='text'
                  fullWidth
                  onClick={toggleLogin}
                >
                  Login
                </Button>
  
              </form>
            </>
            )
          }

      </Paper>
    </Container>
    // </div>
  )
}

export default Login