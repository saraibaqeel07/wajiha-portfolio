import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, IconButton, Grid, Box, Link, Drawer, List, ListItem, ListItemText } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import LinkedInIcon from '../assests/linkdin.png';
import ballIcon from '../assests/ball.png';
import BehanceIcon from '../assests/be.png';

const Header = () => {
    const [drawerOpen, setDrawerOpen] = useState(false);

    const toggleDrawer = (open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }
        setDrawerOpen(open);
    };

    const drawerContent = (
        <Box
            sx={{ width: 250, backgroundColor: '#171716', height: '100vh' }}
            role="presentation"
            onClick={toggleDrawer(false)}
            onKeyDown={toggleDrawer(false)}

        >
            <List>
                <ListItem button component="a" href="#portfolio">
                    <ListItemText sx={{ fontFamily: 'Inter', color: 'white' }} primary="PORTFOLIO" />
                </ListItem>
                <ListItem button component="a" href="/about">
                    <ListItemText sx={{ fontFamily: 'Inter', color: 'white' }} primary="ABOUT" />
                </ListItem>
                <ListItem button component="a" href="#contact">
                    <ListItemText sx={{ fontFamily: 'Inter', color: 'white' }} primary="CONTACT" />
                </ListItem>
            </List>
            <Box sx={{p:1}} >
                <IconButton href="https://www.linkedin.com/in/wajihafatima022001/" target="_blank" color="inherit">
                    <Box component={'img'} src={LinkedInIcon} width={'24px'} />
                </IconButton>
                <IconButton href="https://dribbble.com/wajihafatima02" target="_blank" color="inherit">
                    <Box component={'img'} src={ballIcon} width={'24px'} />
                </IconButton>
                <IconButton href="https://www.behance.net/wajihafatima02" target="_blank" color="inherit">
                    <Box component={'img'} src={BehanceIcon} width={'24px'} />
                </IconButton>
            </Box>
        </Box>
    );

    return (
        <AppBar position="static" style={{ backgroundColor: '#171716' }}>
            <Toolbar>
                <Grid container alignItems="center">
                    <Grid item xs={6}>
                        <Typography variant="h6" component="div" style={{ color: '#fff' }}>
                            Wajiha
                        </Typography>
                    </Grid>

                    <Grid item xs={6} container justifyContent="flex-end" alignItems={'center'}>
                        {/* Links for larger screens */}
                        <Box component="nav" sx={{ display: { xs: 'none', sm: 'none', md: 'flex' } }}>
                            <Link href="#portfolio" underline="none" color="inherit" style={{ margin: '0 15px', fontSize: '15px' }}>
                                PORTFOLIO
                            </Link>
                            <Link href="/about" underline="none" color="inherit" style={{ margin: '0 15px', fontSize: '15px' }}>
                                ABOUT
                            </Link>
                            <Link href="#contact" underline="none" color="inherit" style={{ margin: '0 15px', fontSize: '15px' }}>
                                CONTACT
                            </Link>
                        </Box>

                        {/* Social icons */}
                        <Box sx={{ display: { xs: 'none', sm: 'none', md: 'flex' } }}>
                            <IconButton href="https://www.linkedin.com/in/wajihafatima022001/" target="_blank" color="inherit">
                                <Box component={'img'} src={LinkedInIcon} width={'24px'} />
                            </IconButton>
                            <IconButton href="https://dribbble.com/wajihafatima02" target="_blank" color="inherit">
                                <Box component={'img'} src={ballIcon} width={'24px'} />
                            </IconButton>
                            <IconButton href="https://www.behance.net/wajihafatima02" target="_blank" color="inherit">
                                <Box component={'img'} src={BehanceIcon} width={'24px'} />
                            </IconButton>
                        </Box>

                        {/* Hamburger menu for smaller screens */}
                        <IconButton
                            edge="end"
                            color="inherit"
                            aria-label="menu"
                            sx={{ display: { xs: 'flex', md: 'none' } }}
                            onClick={toggleDrawer(true)}
                        >
                            <MenuIcon />
                        </IconButton>
                    </Grid>
                </Grid>
            </Toolbar>

            {/* Drawer for mobile */}
            <Drawer
                anchor="right"
                open={drawerOpen}
                onClose={toggleDrawer(false)}

            >
                {drawerContent}
            </Drawer>
        </AppBar>
    );
};

export default Header;
