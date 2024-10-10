import React from 'react';
import { AppBar, Toolbar, Typography, IconButton, Grid, Box, Link } from '@mui/material';
import LinkedInIcon from '../assests/linkdin.png';
import ballIcon from '../assests/ball.png';
import BehanceIcon from '../assests/be.png';

const Header = () => {
    return (
        <AppBar position="static" style={{ backgroundColor: '#171716' }}>
            <Toolbar>
                <Grid container alignItems="center">
                    <Grid item xs={6} sm={6}>
                        <Typography variant="h6" component="div" style={{ color: '#fff' }}>
                            Wajiha
                        </Typography>
                    </Grid>

                    <Grid item xs={6} sm={6}  container justifyContent="flex-end" alignItems={'center'}>
                        <Box component="nav" sx={{ display: { xs: 'none', sm: 'none',md:'flex' } }}>
                            <Link href="#portfolio" underline="none" color="inherit" style={{ margin: '0 15px',fontSize:'15px' }}>
                                PORTFOLIO
                            </Link>
                            <Link href="#about" underline="none" color="inherit" style={{ margin: '0 15px',fontSize:'15px' }}>
                                ABOUT
                            </Link>
                            <Link href="#contact" underline="none" color="inherit" style={{ margin: '0 15px' ,fontSize:'15px'}}>
                                CONTACT
                            </Link>
                        </Box>
                        <Box>
                        <IconButton href="https://www.linkedin.com" target="_blank" color="inherit">
                            <Box component={'img'} src={LinkedInIcon} width={'24px'}></Box>
                        </IconButton>
                        <IconButton href="https://github.com" target="_blank" color="inherit">
                            <Box component={'img'} src={ballIcon}  width={'24px'}></Box>
                        </IconButton>
                        <IconButton href="https://www.behance.net" target="_blank" color="inherit">
                            <Box component={'img'} src={BehanceIcon}  width={'24px'}></Box>
                        </IconButton>
                        </Box>
                    </Grid>
                </Grid>
            </Toolbar>
        </AppBar>
    );
};

export default Header;
