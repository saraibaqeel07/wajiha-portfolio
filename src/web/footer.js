import React from 'react'
import { AppBar, Box, Button, Container, Divider, Grid, IconButton, Toolbar, Typography } from '@mui/material'
import LayerLeft from '../assests/layerLeft.png'
import img1 from '../assests/figma-icon.png'
import img2 from '../assests/adobe-photoshop-2.png'
import img3 from '../assests/illus.png'
import img4 from '../assests/adobe-xd-2.png'
import img5 from '../assests/medium-4.png'
import img6 from '../assests/notion-2.png'
import { Link, useLocation } from 'react-router-dom'
import LinkedInIcon from '../assests/linkdin.png';
import ballIcon from '../assests/ball.png';
import BehanceIcon from '../assests/be.png';
import pdf from '../assests/resume.pdf'


function Footer() {
    const location = useLocation(); // Access current location
    const Images = [
        { name: "Figma", image: img1 },
        { name: "Photoshop", image: img2 },
        { name: "Illustrator", image: img3 },
        { name: "XD", image: img4 },
        { name: "Notion", image: img5 },
        { name: "Medium", image: img6 },
    ];
    const handleDownload = () => {
        const link = document.createElement('a');
        link.href = 'https://drive.google.com/uc?id=1zfI16nsWTSvHQOTC8eTTbaURilXabe9e'; // Use uc parameter instead of view
        link.download = 'Wajiha Fatima, Product Designer, 2+ Years'; // Filename for the download
        link.rel = 'noopener noreferrer'; // Prevent opening new tab
        link.click();
      };

    
    return (
        <Box sx={{ backgroundColor: '#171716' }}>
            {location.pathname === '/' && <Grid container alignItems={'center'}>
                <Grid item lg={6} md={6} sm={12} sx={{ backgroundImage: `url(${LayerLeft})`, backgroundSize: 'cover', width: '400px', height: '400px', backgroundRepeat: 'no-repeat', backgroundPosition: 'center', objectFit: 'contain', display: { md: "flex", sm: "none", xs: 'none' } }} >

                </Grid>

                <Grid item lg={6} md={6} sm={12} p={5} >
                    <Typography variant="h4" gutterBottom sx={{ fontFamily: 'Inter', fontWeight: 'bold', color: '#D95732' }}>
                        Found Me Competitive?
                    </Typography>
                    <Typography variant="body1" sx={{ fontFamily: 'Inter', color: 'white', fontWeight: '300' }}>
                        Ready to learn more about my qualifications and experience? Download my resume for a comprehensive overview.
                    </Typography>
                    <Grid container mt={2} p={1.8} spacing={2}>
                        <Button onClick={() => handleDownload()} variant="text" color="primary"  sx={{ backgroundColor: 'transparent', color: 'black', textTransform: 'capitalize', border: '1px solid #D95732', color: '#D95732',p:{lg:'10px',md:'10px',sm:'20px',xs:'20px'},width: { xs: '100%', sm: 'auto', md: 'auto', lg: 'auto' }, }} >
                            Download My Resume
                        </Button>
                    </Grid>
                </Grid>





            </Grid>}
            <AppBar position="static" style={{ backgroundColor: 'transparent',marginTop:'10px' }}>
                <Toolbar>
                    <Grid container sx={{flexDirection:{lg:'row',md:'row' , sm:'column-reverse',xs:'column-reverse'}}} alignItems="center">
                        <Grid item xs={12} sm={12} md={6} lg={6} sx={{ display: 'flex', justifyContent: { lg: 'flex-start', md: 'flex-start', sm: 'center', xs: 'center'} }}>
                            <Typography variant="h6" component="div" sx={{ color: '#fff', fontSize: { lg: '15px', md: '15px', sm: '15px', xs: '15px' },mb:{lg:0,md:0,sm:3.5,xs:3.5} ,fontWeight:400}}>
                                2024 Wajiha. All right reserved.
                            </Typography>
                        </Grid>

                        <Grid item xs={12} sm={12} md={6} lg={6} container sx={{ justifyContent: { lg: 'flex-end', md: 'flex-end', sm: 'center', xs: 'center' } }} alignItems={'center'}>
                            <Grid item xs={12} sm={12} md={6} lg={6}>
                                <Box component="nav" sx={{display:'flex',justifyContent:'center',mb:{lg:0,md:0,sm:3.5,xs:3.5}}} >
                                    <Box href="#portfolio" underline="none" color="inherit" style={{ margin: '0 15px', fontSize: '15px',fontWeight:'bold' }}>
                                        PORTFOLIO
                                    </Box>
                                    <Box href="/about" underline="none" color="inherit" style={{ margin: '0 15px', fontSize: '15px',fontWeight:'bold' }}>
                                        ABOUT
                                    </Box>
                                    <Box href="#contact" underline="none" color="inherit" style={{ margin: '0 15px', fontSize: '15px',fontWeight:'bold' }}>
                                        CONTACT
                                    </Box>
                                </Box>

                            </Grid>

                            <Box sx={{mb:{lg:0,md:0,sm:3.5,xs:3.5}}}>
                                <IconButton href="https://www.linkedin.com/in/wajihafatima022001/" target="_blank" color="inherit">
                                    <Box component={'img'} src={LinkedInIcon} width={'24px'}></Box>
                                </IconButton>
                                <IconButton href="https://dribbble.com/wajihafatima02" target="_blank" color="inherit">
                                    <Box component={'img'} src={ballIcon} width={'24px'}></Box>
                                </IconButton>
                                <IconButton href="https://www.behance.net/wajihafatima02" target="_blank" color="inherit">
                                    <Box component={'img'} src={BehanceIcon} width={'24px'}></Box>
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