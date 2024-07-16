import React from 'react'
import { Avatar, Icon, Stack, Typography } from '@mui/material'
import { 
  Face as FaceIcon, 
  AlternateEmail as UserNameIcon, 
  CalendarMonth as CalendarIcon
} from '@mui/icons-material'
import moment from 'moment'

const Profile = () => {
  return (
    <Stack spacing={"2rem"} direction={"column"} alignItems={"center"}>
      <Avatar 
        sx={{
          width: 150,
          height: 150,
          objectFit: "contain",
          marginBottom: "1rem",
          border: "5px solid white",
        }}/>
      <ProfileCard heading={"Bio"} text={"random sad sandom"}/>
      <ProfileCard heading={"Username"} text={"atf_marq"} Icon={<UserNameIcon />}/>
      <ProfileCard heading={"Name"} text={"Austine The First"} Icon={<FaceIcon />}/>
      <ProfileCard heading={"Joined"} text={moment('1999-12-21T00:00:02.003Z').fromNow()} Icon={<CalendarIcon />}/>
    </Stack>
  )
}
const ProfileCard = ({ 
  text, Icon, heading}) => (
    <Stack 
      direction={"row"} 
      alignItems={"center"} 
      spacing={"1rem"} 
      color={"white"}
      textAlign={"center"}
    >
      {Icon && Icon}

      <Stack direction={"column"}>
        <Typography variant={"body1"}>{text}</Typography>
        <Typography color={"gray"} variant={"caption"}>{heading}</Typography>
      </Stack>
    </Stack>)

export default Profile