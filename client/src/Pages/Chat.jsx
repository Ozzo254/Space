import React, { Fragment, useRef } from 'react';
import AppLayout from '../components/layout/AppLayout';
import { IconButton, Stack } from '@mui/material';
import { grayColor } from '../constants/color';
import { 
  AttachFile as AttachFileIcon, 
  Send as SendIcon} from '@mui/icons-material';
import { InputBox } from '../components/styles/StyledComponents';

const Chat = () => {

  const containerRef = useRef(null);
  return (
    <Fragment>
      <Stack 
        ref={containerRef}
        boxSizing={"border-box"}
        padding={"1rem"}
        spacing={"1rem"}
        bgcolor={grayColor}
        height={"90%"}
        sx={{
          overflowX: "hidden",
          overflowY: "auto",
        }}
      >
        {/** Messages Render **/}
      </Stack>

      <form style={{
        height: "100%",
      }}>
        <Stack 
          direction={"row"} 
          height={"100%"}
          padding={"1rem"}
          alignItems={"center"}
          position={"relative"}>
          <IconButton>
            <AttachFileIcon />
          </IconButton>

          <InputBox />

          <IconButton>
            <SendIcon />
          </IconButton>
        </Stack>
      </form>
    </Fragment>
  )
}

export default AppLayout()(Chat)