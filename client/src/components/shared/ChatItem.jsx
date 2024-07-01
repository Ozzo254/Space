import React, { memo } from 'react'
import { Link } from '../styles/StyledComponents'
import { Box, Stack, Typography } from '@mui/material'

const ChatItem = ({
    avatar = [],
    name,
    _id,
    groupChat = false,
    sameSender,
    isOnline,
    newMessageAlert,
    index = 0,
    handleDeletechat,
}) => {
  return (
    <Link 
      to={`/chat/${_id}`} 
      onContextMenu={(e)=> 
        handleDeletechat(e, _id, groupChat)}
      sx={{
        padding: "0",
      }}>
        <div
            style={{
                display: 'flex',
                gap: '1rem',
                alignItems: "center",
                padding: "1rem",
                backgroundColor: sameSender ? "black" : "unset",
                color: sameSender ? "white" : "unset",
                position: "relative",
            }}>
                {/* Avatar Card */}
                <Stack>
                    <Typography>{name}</Typography>
                    {
                        newMessageAlert && (
                            <Typography>
                                {newMessageAlert.count} New Message
                            </Typography>
                        )
                    }
                </Stack>

                {isOnline && (
                    <Box 
                        sx={{
                            width: '7px',
                            height: '7px',
                            borderRadius: '50%',
                            backgroundColor: 'green',
                            position:"absolute",
                            top: "50%",
                            right:"1rem",
                            transform: "translateY(-50%)",
                        }}
                    />
                )}
            </div>
    </Link>
  )
}

export default memo(ChatItem);