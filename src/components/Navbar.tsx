import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Avatar from '@mui/material/Avatar';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Button from '@mui/material/Button';

interface MenuAppBarProps {
    handleDrawerToggle: Function;
    drawerWidth: number;
}

export default function NavBar({handleDrawerToggle, drawerWidth}: MenuAppBarProps) {
  

  return (
    <Box sx={{ flexGrow: 1 }}>
      
      <AppBar position="fixed"  sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 , ml:{sm:`${drawerWidth}px`} }}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            onClick={(e) => {
                handleDrawerToggle();
            }}
            aria-label="menu"
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <IconButton  sx={{ p: 0 , mr:2}}>
                <Avatar variant="square" alt="Remy Sharp" src="./images/khad.png" />
              </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Khatim PKI Server
          </Typography>
          <Button color="inherit">Adnan | Super Admin</Button>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ ml: 1 }}
          >
            <MoreVertIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    </Box>
  );
}