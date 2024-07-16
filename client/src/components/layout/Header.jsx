import {
  AppBar, 
  Backdrop, 
  Box, 
  IconButton, 
  Toolbar, 
  Tooltip, 
  Typography } from '@mui/material'
import React, { Suspense, lazy, useState } from 'react'
import { orange } from '../../constants/color'
import {
  Menu as MenuIcon, 
  Search as SearchIcon,
  Add as AddIcon,
  Group as GroupIcon, 
  Logout as LogoutIcon,
  Notifications as NotificationsIcon
} from '@mui/icons-material'
import {useNavigate} from 'react-router-dom'
// import SearchDialog from '../specific/Search'      //lazy load on request 👇

const SearchDialog = lazy (() => import('../specific/Search'));
const NotificationDialog = lazy (() => import('../specific/Notifications'));
const NewGroupDialog = lazy (() => import('../specific/NewGroup'));

const Header = () => {
  const navigate = useNavigate();
  // const [isMobile, setIsMobile] = React.useState(false); same declaration as below
  const [isMobile, setIsMobile] = useState(false);
  const [isSearch, setIsSearch] = useState(false);
  const [isNewGroup, setIsNewGroup] = useState(false);
  const [isNotification, setIsNotification] = useState(false);

  const handleMobile = () => {
    setIsMobile(prev => !prev);
  }
  const openSearch = ()=>{
    setIsSearch(prev => !prev);
  }
  const openNewGroup = ()=>{
    setIsNewGroup(prev => !prev);
  }
  const openNotification = ()=>{
    setIsNotification(prev => !prev);
  }
  const logoutHandler = ()=>{
    console.log('logout');
  }
  const navigateToGroup = ()=> navigate('/groups');

  const IconBtn = ({ title, icon, onClick }) => {
    return(
      <Tooltip title={title}>
        <IconButton
          color='inherit'
          size='large'
          onClick={onClick}
        >
          {icon}
        </IconButton>
      </Tooltip>
    );
  };

  return (
    <>
    <Box 
      sx={{
        flexGrow: 1,
        }}
      height={'4rem'}
      marginBottom={'1.3rem'}   // style between header and Grid element in AppLayout component
    >
      <AppBar 
        position='static'
        sx={{
          bgcolor: orange,
        }}
      >
        <Toolbar>
          <Typography
            variant='h6'
            sx={{
              display:{
                xs: 'none',
                sm: 'block'
              },
            }}
          >
            Space
          </Typography>
          <Box
            sx={{
              display:{
                xs: 'block',
                sm: 'none'
              },
            }}
          >
            <IconButton
              color='inherit'
              onClick={handleMobile}
            >
              <MenuIcon />
            </IconButton>
          </Box>
          <Box 
            sx={{
              flexGrow: 1,
            }}
          />
          <Box>
            {/* Destructure Tooltip elements into IconBtn from above */}
            <IconBtn 
              title={'Search'}
              icon={<SearchIcon />}
              onClick={openSearch}
            />
            {/* <Tooltip title='Search'>
              <IconButton
                color='inherit'
              size='large'
                onClick={openSearch}
              >
                <SearchIcon />
              </IconButton>
            </Tooltip> */}

            <IconBtn 
              title={'New Group'}
              icon={<AddIcon />}
              onClick={openNewGroup}
            />
            {/* <Tooltip title='New Group'>
              <IconButton
                color='inherit'
                size='large'
                onClick={openNewGroup}
              >
                <AddIcon />
              </IconButton>
            </Tooltip> */}

            <IconBtn 
              title={'Manage Groups'}
              icon={<GroupIcon />}
              onClick={navigateToGroup}
            />
            {/* <Tooltip title='Manage Groups'>
              <IconButton
                color='inherit'
                size='large'
                onClick={navigateToGroup}
              >
                <GroupIcon />
              </IconButton>
            </Tooltip> */}

            <IconBtn 
              title={'Notifications'}
              icon={<NotificationsIcon />}
              onClick={openNotification}
            />

            <IconBtn 
              title={'Logout'}
              icon={<LogoutIcon />}
              onClick={logoutHandler}
            />
          </Box>
        </Toolbar>
      </AppBar>
    </Box>

    {
      isSearch && (
        <Suspense 
          fallback={
            <Backdrop open />
            }
          >
            <SearchDialog />
          </Suspense>
      )
    }
    {
      isNotification && (
        <Suspense 
          fallback={
            <Backdrop open />
            }
          >
            <NotificationDialog />
          </Suspense>
      )
    }
    {
      isNewGroup && (
        <Suspense 
          fallback={
            <Backdrop open />
            }
          >
            <NewGroupDialog />
          </Suspense>
      )
    }
    </>
  )
}

export default Header