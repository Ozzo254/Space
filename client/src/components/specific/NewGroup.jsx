import React, { useState } from 'react'
import { useInputValidation } from '6pp'
import { 
  Button,
  Dialog, 
  DialogTitle,  
  Stack, 
  TextField, 
  Typography} from '@mui/material'
import { sampleUsers } from '../../constants/sampleData'
import UserItem from '../shared/UserItem'

const NewGroup = () => {
  const groupName = useInputValidation("");

  const [members, setMembers] = useState(sampleUsers)
  const [selectedMembers, setSelectedMembers] = useState([]);

  const selectMemberHandler = (id) => {

    // setMembers(prev =>
      //  prev.map(user =>
      //    user._id === id ? 
      //    { ...user, isAdded: !user.isAdded } : 
      //    user)
      //   );

    setSelectedMembers((prev) => prev.includes(id) 
    ? prev.filter((currElement) => currElement !== id) 
    : [...prev, id]);
    // const newMembers = [...selectedMembers];
    // const index = newMembers.findIndex((m) => m._id === id);
    // if (index === -1) {
    //   newMembers.push(id);
    // } else {
    //   newMembers.splice(index, 1);
    // }
    // setSelectedMembers(newMembers);
  };
  console.log(selectedMembers);
  
  const submitHandler = () => {};

  const closeHandler = () => {};

  return (
    <Dialog open onClose={closeHandler}>
      <Stack 
        p={{ xs: "1rem", sm: "3rem"}}
        spacing={"2rem"}
        width={"35rem"}>
          <DialogTitle 
            textAlign={"center"}
            variant='h4'>
              New Group
          </DialogTitle>

          <TextField 
            label='Group Name'
            value={groupName.value} 
            onChange={groupName.changeHandler}
          />

          <Typography
            variant='body1'>Members</Typography>

          <Stack>
          {members.map((i) =>
              (<UserItem 
                  user={i} 
                  key={i._id}
                  handler={selectMemberHandler}
                  isAdded={selectedMembers.includes(i._id)}
                />)
            )}
          </Stack>

          <Stack 
            direction={'row'}
            justifyContent={'space-evenly'}>
              <Button
                variant='outlined'
                color='error'
                size='large'>Delete</Button>
              <Button 
                variant='contained'
                size='large'
                onClick={submitHandler}>Create</Button>
            </Stack>

          
        </Stack>
    </Dialog>
  )
}

export default NewGroup