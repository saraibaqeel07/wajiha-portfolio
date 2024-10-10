import React from 'react'
import { AppBar, Box, Button, Container, Divider, Grid, IconButton, Toolbar, Typography } from '@mui/material'
import LayerLeft from '../assests/layerLeft.png'
import img1 from '../assests/figma-icon.png'
import img2 from '../assests/adobe-photoshop-2.png'
import img3 from '../assests/illus.png'
import img4 from '../assests/adobe-xd-2.png'
import img5 from '../assests/medium-4.png'
import img6 from '../assests/notion-2.png'
import { Link } from 'react-router-dom'
import LinkedInIcon from '../assests/linkdin.png';
import ballIcon from '../assests/ball.png';
import BehanceIcon from '../assests/be.png';


function Footer() {
    const Images = [
        { name: "Figma", image: img1 },
        { name: "Photoshop", image: img2 },
        { name: "Illustrator", image: img3 },
        { name: "XD", image: img4 },
        { name: "Notion", image: img5 },
        { name: "Medium", image: img6 },
    ];

    return (
        <Box sx={{ backgroundColor: '#171716' }}>
            <Grid container alignItems={'center'}>
                <Grid item lg={6} md={6} sm={12} sx={{ backgroundImage: `url(${LayerLeft})`, backgroundSize: 'cover', width: '400px', height: '400px', backgroundRepeat: 'no-repeat', backgroundPosition: 'center', objectFit: 'contain',display:{md:"flex",sm:"none",xs:'none'} }} >

                </Grid>

                <Grid item lg={6} md={6} sm={12} p={5} >
                    <Typography variant="h4" gutterBottom sx={{ fontFamily: 'Inter', fontWeight: 'bold', color: '#D95732' }}>
                        Found Me Competitive?
                    </Typography>
                    <Typography variant="body1" sx={{ fontFamily: 'Inter', color: 'white', fontWeight: '300' }}>
                        Ready to learn more about my qualifications and experience? Download my resume for a comprehensive overview.
                    </Typography>
                    <Grid container mt={2} p={1.8} spacing={2}>
                        <Button variant="text" color="primary" sx={{ backgroundColor: '#D95732', color: 'black', textTransform: 'capitalize' }} >
                            Download Resume
                        </Button>
                    </Grid>
                </Grid>





            </Grid>
            <AppBar position="static" style={{ backgroundColor: 'transparent' }}>
                <Toolbar>
                    <Grid container alignItems="center">
                        <Grid item xs={12} sm={6}>
                            <Typography variant="h6" component="div" style={{ color: '#fff',fontSize:'15px' }}>
                                2024 Wajiha. All right reserved.
                            </Typography>
                        </Grid>

                        <Grid item xs={6} sm={6}  container justifyContent="flex-end" alignItems={'center'}>
                        <Box component="nav" sx={{ display: { xs: 'none', sm: 'none',md:'flex' } }}>
                            <Box href="#portfolio" underline="none" color="inherit" style={{ margin: '0 15px',fontSize:'15px' }}>
                                PORTFOLIO
                            </Box>
                            <Box href="#about" underline="none" color="inherit" style={{ margin: '0 15px',fontSize:'15px' }}>
                                ABOUT
                            </Box>
                            <Box href="#contact" underline="none" color="inherit" style={{ margin: '0 15px' ,fontSize:'15px'}}>
                                CONTACT
                            </Box>
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
        </Box>
    )
}

export default Footer