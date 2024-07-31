import React from 'react'
import AdminLayout from '../../components/layout/AdminLayout'
import { 
  Box, 
  Container, 
  Paper, 
  Stack, 
  Typography 
} from '@mui/material'
import { 
  AdminPanelSettings as AdminPanelSettingsIcon, 
  Group as GroupIcon, 
  Message as MessageIcon, 
  Notifications as NotificationsIcon,
  Person as PersonIcon, 
} from '@mui/icons-material'
import moment from 'moment'
import { 
  CurveButton,  
  SearchField, 
} from '../../components/styles/StyledComponents'
import { matBlack } from '../../constants/color'
import { 
  LineChart, 
  DoughnutChart, 
} from "../../components/specific/Charts";

const Dashboard = () => {
  const Appbar = (
    <Paper
      elevation={3}
      sx={{
        padding: "2rem",
        margin: {
          xs: "4rem 0",
          md: "2rem 0",
        },
        borderRadius: "1rem",
      }}
    >
      <Stack
        direction={"row"}
        alignItems={"center"}
        spacing={"1rem"}
      >
        <AdminPanelSettingsIcon sx={{ 
          fontSize: "3rem", 
          }}
        />
        <SearchField placeholder='Search' />
        <CurveButton>Search</CurveButton>

        <Box flexGrow={1} />

        <Typography
          display={{
            xs: "none",
            sm: "block",
          }}
          color={"rgba{0, 0, 0, 0.7}"}
          textAlign={'center'}
        >
          {moment().format("dddd, D MMMM YYYY")}
        </Typography>
        <NotificationsIcon />
      </Stack>
    </Paper>
  )

  const Widgets = (
    <Stack direction={{
        xs: "column",
        sm: "row",
      }}
      spacing={"2rem"}
      justifyContent={"space-between"}
      alignItems={"center"}
      margin={"2rem 0"}
    >
      <Widget title={"Users"} value={34} Icon={<PersonIcon />} />
      <Widget title={"Chats"} value={3} Icon={<GroupIcon />} />
      <Widget title={"Messages"} value={459} Icon={<MessageIcon />} />
    </Stack>
  )

  return (
    <AdminLayout>
      <Container component={"main"}>
        {Appbar}
        <Stack
          direction={{
            xs: 'column',
            md: "row",
          }}
          // spacing={"2rem"}
          flexWrap={"wrap"}
          justifyContent={"center"}
          alignItems={{
            xs: "center",
            lg: "stretch",
          }}
          sx={{
            gap: "2rem",
            }
          }
        >
          <Paper
            elevation={3}
            sx={{
              padding: "2rem 3.5rem",
              borderRadius: "1rem",
              width: "100%",
              maxWidth: "30rem",
              // height: "25rem"
            }}
          >
            <Typography variant='h4' margin={"2rem 0"}>
              Last Messages
            </Typography>

            <LineChart value={[23, 56, 33, 67, 35, 2]} />

          </Paper>
          <Paper
            elevation={3}
            sx={{
              padding: "1rem",
              borderRadius: "1rem",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: {
                xs: "100%",
                sm: "50%",
              },
              position: "relative",
              width: "100%",
              maxWidth: "25rem",
              // height: "25rem"
            }}
          >
            <DoughnutChart 
              labels={[
                "single Chats", 
                "Group Chats", 
              ]}
              value={[23, 66]}
            />
            <Stack
              position={"absolute"}
              direction={"row"}
              justifyContent={"center"}
              alignItems={"center"}
              spacing={"0.5rem"}
              width={"100%"}
              height={"100%"}
            >
              <GroupIcon />
              <Typography>VS</Typography>
              <PersonIcon />
            </Stack>
          </Paper>
        </Stack>
        {Widgets}
      </Container>
    </AdminLayout>
  )
}

const Widget = ({ title, value, Icon }) => (
  <Paper elevation={3} sx={{
    padding: "2rem",
    margin: "2rem 0",
    borderRadius: "1.5rem",
    width: "20rem",
  }}>
    <Stack 
      alignItems={"center"}
      spacing={"1rem"}
    >
      <Typography
        sx={{
          color: `"rgba(0, 0, 0, 0.7)"`,
          // color: `${matBlack}`,
          borderRadius: "50%",
          border: `5px solid ${matBlack}`,
          width: "5rem",
          height: "5rem",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {value}
      </Typography>
      <Stack
        direction={"row"}
        spacing={"1rem"}
        alignItems={"center"}
      >
        {Icon}
        <Typography>{title}</Typography>
      </Stack>
    </Stack>
  </Paper>
)

export default Dashboard