import React, { memo } from 'react'
import { Avatar, 
    IconButton, 
    ListItem, 
    Stack, 
    Typography } from '@mui/material'
import { 
    Add as AddIcon, 
    Remove as RemoveIcon} from '@mui/icons-material'

const UserItem = ({
    user, 
    handler, 
    handlerIsLoading, 
    isAdded = false}) => {

    const {name, _id, avatar} = user
  return (
    <ListItem>
        <Stack 
            direction={"row"} 
            alignItems={"center"} 
            spacing={"1rem"}
            width={"100%"}
        >
            <Avatar />

            <Typography
                variant='body1'
                sx={{
                    flexGlow: 1,
                    dispay: "-webkit-box",
                    WebkitLineClamp: 1,
                    WebkitBoxOrient: "vertical",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    width: "100%",
                }}
            >{name}</Typography>

            <IconButton 
                size='small'
                sx={{
                    bgcolor: isAdded?
                        'error.main':'primary.main',
                    color: 'white',
                    "&:hover": {
                        bgcolor: isAdded?
                            'error.dark':'primary.dark',
                    }
                }}
                onClick={()=>handler(_id)}
                disabled={handlerIsLoading}>

                    {
                        isAdded?
                        <RemoveIcon /> :
                        // handlerIsLoading?
                        // <CircularProgress size={20} /> :
                        // null
                        <AddIcon />
                    }

            </IconButton>
        </Stack>
    </ListItem>
  )
}

export default memo(UserItem)