import React from 'react'
import { autocompleteClasses, Stack } from '@mui/material'
import ChatItem from '../shared/ChatItem'
import { bgGradient } from '../../constants/color'

const ChatList = ({
    w = '100%',
    chats = [],
    chatId,
    onlineUsers = [],
    newMessagesAlert = [
        {
            chatId: "",
            count: 0,
        },
    ],
    handleDeleteChat,
}) => {
  return (
    <Stack 
        width={w} 
        height={"100%"}
        direction={"column"}
        overflow={"auto"}
        // sx={{
        //     backgroundImage: bgGradient,
        // }}
    >
        {chats?.map((data, index ) => {
            const{
                avatar, 
                _id, 
                name, 
                groupChat, 
                members
                } = data;

                const newMessageAlert = 
                    newMessagesAlert.find(
                        ({chatId}) => 
                            chatId === _id
                    );
                
                const isOnline = members?.some((member
                    ) => onlineUsers.includes(member)
                );

                return (
                <ChatItem 
                    index={index}
                    newMessageAlert={newMessageAlert}
                    isOnline={isOnline}
                    avatar={avatar}
                    name={name}
                    _id={_id}
                    groupChat={groupChat}
                    sameSender={chatId === _id}
                    handleDeletechat={handleDeleteChat}
                    key={_id}
                />)
            })
        }
    </Stack>
  )
}

export default ChatList