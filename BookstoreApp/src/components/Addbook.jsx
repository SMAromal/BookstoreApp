import React, { useEffect, useState } from 'react';
import { Box, Button, TextField, Checkbox, FormControlLabel, colors, Typography } from '@mui/material';

const Addbook = () => {
  return (
    <Box
      sx={{
        position: 'relative',
        backgroundImage: 'url(https://images.wallpaperscraft.com/image/single/books_library_shelves_138556_1920x1080.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: 'auto',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 4,
      }}
    >
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '100ch' },
        backgroundColor: 'rgba(255, 255, 255, 0.8)',
        padding: 2,
        borderRadius: 2,
        backgroundSize: 'cover',
        boxShadow: 10,
        maxWidth: '1000px',  
        margin: 'auto',
        
      }}
      noValidate
      autoComplete="off"
    >
      <h1 style={{ color: 'black' ,fontFamily: 'Lobster', alignItems: 'left' }}>Add a Book</h1>
      <div>
        <TextField
          required
          id="outlined-required"
          label="ISBN Number"
        />
      </div>
      <div>
        <TextField
          required
          id="outlined-required"
          label="Title"
        />
      </div>
      <div>
        <TextField
          required
          id="outlined-password-input"
          label="Author"
        />
      </div>
      <div>
        <TextField
          required
          id="outlined-required"
          label="Genre"
          
        />
      </div>
      <div>
        <TextField
          required
          id="outlined-read-only-input"
          label="Publication Year"
         
        />
      </div>
      <div>
        <TextField
          required
          id="outlined-read-only-input"
          label="Image URL"
          
        />
      </div>
      <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 2 }}>
          <Button sx={{ backgroundColor: "sandybrown" }} variant="contained">Add Book</Button>
        </Box>
    </Box>
    </Box>
  );
};

export default Addbook;
