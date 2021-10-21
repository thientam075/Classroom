import React from "react";
import { Typography, Toolbar, AppBar, Button, IconButton, } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import AddIcon from '@mui/icons-material/Add';
function Navbar({onClick}) {
  return (
    <AppBar position="relative">
      <Toolbar>
        <IconButton 
        variant="h6" 
        color="inherit"
        sx= {{ mr: 2}}>
            <MenuIcon variant="h5" color="inherit"/>
        </IconButton>
        <Typography variant="h5" color="inherit" sx={{ flexGrow: 1 }} noWrap>
          Classroom
        </Typography>
        <IconButton 
        variant="h5" 
        color="inherit" 
        floating="right" 
        onClick = {onClick}><AddIcon/> </IconButton>
        <Button variant="h5" color="inherit" floating="right"> Login </Button>
      </Toolbar>
    </AppBar>
  );    
}
export default Navbar;
