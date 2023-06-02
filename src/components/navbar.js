import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

import {
  AppBar,
  Button,
  IconButton,
  Box,
  Grid,
  Toolbar,
  Typography,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Drawer,
  CssBaseline,
} from '@mui/material';

import MenuIcon from '@mui/icons-material/Menu';

const navItems = [
  ['Aim', '/'],
  ['Theory', '/theory'],
  ['Procedure', '/procedure'],
  ['Pre-Test', '/pre_test'],
  ['Simulation', '/simulation'],
  ['Post-Test', '/post_test'],
  ['References', '/references'],
  ['Feedback', '/feedback'],
];

const drawerWidth = 240;
export default function Navbar(props) {
  const navigate = useNavigate();

  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };
  const handleClick = (page) => {
    console.log(page);
    navigate(page);
  };
  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Grid
        item
        xs={3}
        component="img"
        sx={{
          height: 40,
        }}
        my={2}
        alt={'engg-logo.png'}
        src={require('../img/engg-logo.png')}
      />
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton
              sx={{ textAlign: 'center' }}
              onClick={() => {
                handleClick(item[1]);
              }}
            >
              <Grid container justifyContent={'center'}>
                <Grid
                  item
                  xs={3}
                  component="img"
                  sx={{
                    height: 40,
                  }}
                  alt={item[0] + '.png'}
                  src={require('../img/' + item[0] + '.png')}
                />
                <Grid item xs={9}>
                  <ListItemText primary={item[0]} />
                </Grid>
              </Grid>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;
  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar component="nav" position="static">
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { lg: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Grid
            item
            xs={3}
            component="img"
            sx={{
              height: 35,
              flexGrow: 1,
              display: { xs: 'none', lg: 'block' },
            }}
            my={2}
            alt={'engg-logo.png'}
            src={require('../img/engg-logo.png')}
          />
          <Box sx={{ display: { xs: 'none', lg: 'block' } }}>
            {navItems.map((item) => (
              <Button
                key={item}
                sx={{ color: '#fff' }}
                onClick={() => {
                  handleClick(item[1]);
                }}
              >
                <Grid container justifyContent={'center'}>
                  <Grid
                    item
                    component="img"
                    sx={{
                      height: 45,
                    }}
                    alt={item[0] + '.png'}
                    src={require('../img/' + item[0] + '.png')}
                  />
                  <Grid item xs={12}>
                    {item[0]}
                  </Grid>
                </Grid>
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: 'block', lg: 'none' },
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
  );
}
