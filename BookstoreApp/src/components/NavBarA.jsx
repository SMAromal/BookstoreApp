import { AppBar, Box, Button, Toolbar, Typography } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';

const NavBar2 = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static"  sx={{ backgroundImage: 'linear-gradient(to bottom right, #D2B48C, #F5DEB3)'}}>
        <Toolbar>
        <Box component="img" src={"https://png.pngtree.com/template/20190316/ourmid/pngtree-books-logo-image_79143.jpg"} alt="book" sx={{  height: 50, marginRight: 70}} align="left" />
        <Link to={'/add'}><Button style={{ color: 'lightyellow',background: 'sandybrown',margin:6}}>Add</Button></Link>
        <Link to={'/userlist'}><Button style={{ color: 'lightyellow',background: 'sandybrown',margin:20 }}>User List</Button></Link>
        <Link to={'/booklist'}><Button style={{ color: 'lightyellow',background: 'sandybrown' ,margin:20}}>Book List</Button></Link>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default NavBar2;