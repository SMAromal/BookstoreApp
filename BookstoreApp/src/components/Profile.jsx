import React, { useState } from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';

const Profile = ( ) =>{
  const[form,setForm]=useState({
    name:" ",
    place:" ",
    age:" ",
    password:"",
    email:" ",
    phoneno:" "

  })
  function valueAdd(){
    console.log(form)
  }
  function valueCap(e){
    setForm({...form,[e.target.name]:e.target.value})

  }



  return (
    
        <Box
      component="form"
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh', 
        padding: '20px',
      }}
      noValidate
      autoComplete="off"
      
      
    >
        <h1 style={{ color: 'white' ,fontFamily: 'Lobster' }}>Profile Details</h1>
      
      <div>
        <br />
        <TextField
          id="outlined-required"
          label="NAME"
          name='name'
          value={form.name}
          onChange={valueCap}
        />
        <br />
        <br />
        
        <TextField
          id="outlined-disabled"
          label="PLACE"
          type='place'
          name='place'
          value={form.place}
          onChange={valueCap}
        />
        <br />
        <br />

        <TextField
        id="outlined-disabled"
          label="AGE"
          type='age'
          name='age'
          value={form.age}
          onChange={valueCap}
          />
          <br />
          <br />

          <TextField
        id="outlined-disabled"
          label="PASSWORD"
          type='password'
          name='password'
          value={form.password}
          onChange={valueCap}
          />
          <br />
          <br />

          <TextField
        id="outlined-disabled"
          label="EMAIL"
          type='email'
          name='email'
          value={form.email}
          onChange={valueCap}
          />
          <br />
          <br />

          <TextField
        id="outlined-disabled"
          label="PHONE NO"
          type='phoneno'
          name='phoneno'
          value={form.phoneno}
          onChange={valueCap}
          />
          <br />
          <br />

    </div>
    <br />
    <div className="detail">
         <label>Books Rented:</label>
    </div>
    
    <div>
    <br />
     <Button variant='contained' onClick={valueAdd}>Edit Profile</Button> 
    </div>
    </Box>
  )

}
export default Profile