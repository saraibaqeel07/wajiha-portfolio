import { Box, Card, CardContent, CardMedia, createTheme, Grid, Paper, styled, ThemeProvider, Typography, Button, Avatar, Grid2 } from '@mui/material'
import imageUrl from '../assests/project3.png'
import React, { useRef, useState } from 'react'
import card1 from '../assests/youtube.png'
import card2 from '../assests/laptop.png'
import card3 from '../assests/music.png'
import card4 from '../assests/paint.png'
import uiuxcard1 from '../assests/laptop2.png'
import uiuxcard2 from '../assests/sunset.png'
import uiuxcard3 from '../assests/sunrise.png'
import uiuxcard4 from '../assests/selfie.png'
import book1 from '../assests/boook1.png'
import book2 from '../assests//book2.png'
import book3 from '../assests/book3.png'
import book4 from '../assests/book4.png'
import img1 from '../assests/figma-icon.png'
import img2 from '../assests/adobe-photoshop-2.png'
import img3 from '../assests/illus.png'
import img4 from '../assests/adobe-xd-2.png'
import img5 from '../assests/medium-4.png'
import img6 from '../assests/notion-2.png'
import colorLinkdin from '../assests/colorLinkdin.png'
import Dots from '../assests/medium-4.png'
import CallMadeIcon from '@mui/icons-material/CallMade';
import LayerRight from '../assests/layerRight.png'
import LayerLeft from '../assests/layerLeft.png'
import 'swiper/css'
import { Swiper, SwiperSlide } from 'swiper/react'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import CoverImage from '../assests/project3cover1.png';
import CoverImage2 from '../assests/project3cover2.png';
import uperLeftLayer from '../assests/uperLeftlayer.png'








const ThirdProject = () => {

  const [isExpanded, setIsExpanded] = useState(false);
  const contentRef = useRef(null);
  const toggleReadMore = () => {
    setIsExpanded(!isExpanded);
  };

  const theme = createTheme({
    typography: {
      fontFamily: 'Inter, Arial, sans-serif',
    },
  });
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    autoplay: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,

    responsive: [
      {
        breakpoint: 1030,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 980,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 763,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 463,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };



  const Images = [
    { name: "Figma", image: img1 },
    { name: "Photoshop", image: img2 },
    { name: "Illustrator", image: img3 },
    { name: "XD", image: img4 },
    { name: "Notion", image: img5 },
    { name: "Medium", image: img6 },
    { name: "UI UX Design", image: '' },
    { name: "Adaptive Design", image: '' },
    { name: "Design Thinking", image: '' },
    { name: "Design System", image: '' },
    { name: "Prototyping", image: '' },
    { name: "User-Centric Design", image: '' },
    { name: "Responsive Design", image: '' },
  ];

  const testimonials = [
    {
      name: 'Irfan Dahir',
      title: 'Senior UI/UX Designer, Emumba',
      feedback: `I had the pleasure of working closely with Wajiha at Emumba, where she excelled as a UI/UX Designer. Wajiha consistently demonstrated her strong design skills and research abilities, enabling our team to make well-informed decisions. Her ability to quickly adapt to dynamic and fast-paced innovation projects were impressive. 
          One of Wajiha's standout qualities is her exceptional collaboration and communication skills. Her proactive approach to continuous learning and improvement is truly commendable. Wajiha is a valuable asset to any team, and I highly recommend her for any UI/UX design role.`,
    },
    {
      name: 'Sadiq Ali',
      title: 'Senior UI/UX Designer, Emumba',
      feedback: `Wajiha brings a thoughtful and diligent approach to UI/UX design, always striving to connect with both the team and the users. She's deeply invested in her craft, conducting thorough research and staying tuned into the latest trends to create designs that are both beautiful and functional. 
          Wajiha's reliability and calm under pressure are worth noting, as she consistently delivers quality work while navigating challenges with grace. She listens and learns from feedback, and her interactions are always grounded in a genuine care for the user experience and the success of the team.`,
    },
    {
      name: 'Sheikh Daniyal Ali',
      title: 'Product Designer, Emumba',
      feedback: `I’ve been managing Wajiha at Emumba for a while now. She has demonstrated very tremendous architectural sense of design. She’s indeed a very quick learner and a good asset to the team. She has this striking instinct for the best design and UX skills by valid and factual-based reasoning. 
          She’s been a good asset to the team. Moreover, she shows a positive behavior towards feedbacks and critics, makes her more creative in her way of design.`,
    },
  ];
  const skills = [
    'UI UX Design',
    'Design Thinking',
    'Design System',
    'Prototyping',
    'User-Centric Design',
    'Responsive Design',
    'Adaptive Design',
  ];

  const cardData = [
    {
      id: 1,
      title: 'Listening to My Favorite Content Creators',
      description: 'This is a description for card 1.',
      image: card1,
      url: ''
    },
    {
      id: 2,
      title: 'Creating and sharing valuable Design content',
      description: 'This is a description for card 2.',
      image: card2,
      url: 'https://open.spotify.com/playlist/3I9Zj7t8zMnf9iXzavbUrG?si=e4aa5aaa0ed84a15&nd=1&dlsi=b5949e1927114f6f'
    },
    {
      id: 2,
      title: 'Listening to Desi or Pop Bangers',
      description: 'This is a description for card 2.',
      image: card3,
      url: 'https://open.spotify.com/playlist/3I9Zj7t8zMnf9iXzavbUrG?si=e4aa5aaa0ed84a15&nd=1&dlsi=b5949e1927114f6f'
    },
    {
      id: 2,
      title: 'Finding solace in strokes of color',
      description: 'This is a description for card 2.',
      image: card4,
      url: ''
    },

    // Add more items as needed
  ];
  const cardData2 = [
    {
      id: 1,
      title: 'The Art of Adaptive UI UX Design',
      description: 'This is a description for card 1.',
      image: uiuxcard1,
      url: ''
    },
    {
      id: 2,
      title: 'Actionable Tips for Inner Tranquility',
      description: 'This is a description for card 2.',
      image: uiuxcard2,
      url: 'https://open.spotify.com/playlist/3I9Zj7t8zMnf9iXzavbUrG?si=e4aa5aaa0ed84a15&nd=1&dlsi=b5949e1927114f6f'
    },
    {
      id: 2,
      title: 'Be Beautiful — The Non Conventional Guide',
      description: 'This is a description for card 2.',
      image: uiuxcard3,
      url: 'https://open.spotify.com/playlist/3I9Zj7t8zMnf9iXzavbUrG?si=e4aa5aaa0ed84a15&nd=1&dlsi=b5949e1927114f6f'
    },
    {
      id: 2,
      title: 'Wajiha Who? — Get To Know Me',
      description: 'This is a description for card 2.',
      image: uiuxcard4,
      url: ''
    },

    // Add more items as needed
  ];
  const cardData3 = [
    {
      id: 1,
      title: 'Dont Make Me Think',
      description: 'This is a description for card 1.',
      image: book1,
      url: ''
    },
    {
      id: 2,
      title: 'Practical UI',
      description: 'This is a description for card 2.',
      image: book2,
      url: ''
    },
    {
      id: 2,
      title: 'The Design of Everyday Things',
      description: 'This is a description for card 2.',
      image: book3,
      url: ''
    },
    {
      id: 2,
      title: 'Just Enough Research',
      description: 'This is a description for card 2.',
      image: book4,
      url: ''
    },

    // Add more items as needed
  ];
  return (
    <div>


      <Box sx={{ backgroundColor: '#171716', color: '#fff', textAlign: 'center' }}>

        <Grid container alignItems={'center'} >
          <Grid item lg={5} sx={{
            display: 'flex',
            justifyContent: 'center',
            backgroundImage: {
              xs: `none`, // Apply the background image for xs
              sm: `none`, // Apply the background image for sm
              md: `url(${LayerLeft})`, // Remove the background for md and larger screens
              lg: `url(${LayerLeft})`,
            }, // Replace with your image URL
            backgroundSize: 'cover',   // Ensures the image covers the entire div
            backgroundPosition: 'center', // Centers the image
            backgroundRepeat: 'no-repeat', // Prevents the image from repeating,
            height: '550px'
          }}>
            <Box mt={20} mb={20}>
              <Box
                component="img"
                src={imageUrl}
                sx={{
                  width: '370px !important',


                }}
              />
            </Box>
          </Grid>
          <Grid item lg={6} md={12} mb={4} sx={{ p: " 0px 10px !important" }}>
            <Typography
              variant="h3"
              sx={{
                fontWeight: 'bold',
                mb: 2,
                textAlign: 'left',
                fontSize: {
                  xs: '35px', // Responsive font size for small screens (mobile)
                  sm: '35px', // Responsive font size for tablets
                  md: '35px', // Responsive font size for medium screens (desktops)
                  lg: '35px', // Responsive font size for larger screens
                },
              }}
            >

              <span style={{ color: '#D95732', display: 'block' }}>Enhancing User Experience</span>
            </Typography>
            <Typography
              variant="body1"
              sx={{
                fontSize: '22px',
                maxWidth: '700px',
                textAlign: 'left',
                fontWeight: 700,
                fontFamily: 'Inter'
              }}
            >
              Table Listing to Mobile Adaptive Design
            </Typography>
            <Typography
              variant="body1"
              sx={{
                fontSize: '18px',
                maxWidth: '700px',
                textAlign: 'left',
                fontFamily: 'Inter',
                fontWeight: 400,
                mt: 1
              }}
            >
              This case study presents the mobile-adaptive design for a table listing, focusing on optimizing usability and accessibility for smaller screens while maintaining functionality and clarity.
            </Typography>
          </Grid>


        </Grid>
      </Box>
      <Grid container alignItems={'flex-start'} justifyContent={'center'}>
        <Grid item xs={12} p={5} >
          <Box component={'img'} src={CoverImage} width={'100%'}>

          </Box>
        </Grid>
      </Grid>
      <Grid container xs={12} sx={{ margin: '0 auto', mb: 5, position: 'relative' }} alignItems={'flex-start'} justifyContent={'flex-start'} p={5} >
        <Grid item lg={7} md={7} sm={11} xs={11} mb={6} >
          <Typography variant="h4" sx={{
            fontFamily: 'Inter',
            fontWeight: 700,
            mb: 2,
            fontSize: {
              lg: 24, // large screen
              md: 22, // medium screen
              sm: 20, // small screen
              xs: 18, // extra small screen
            },
          }}>
            Problem Statement
          </Typography>
          <Typography variant="body1" sx={{
            fontFamily: 'Inter',
            fontWeight: 400,
            fontSize: {
              lg: 20, // large screen
              md: 18, // medium screen
              sm: 16, // small screen
              xs: 14, // extra small screen
            },
          }}>
            The web application displayed listings in tables with action items shown on hover, which was problematic on mobile devices due to limited screen space and the lack of hover functionality.
          </Typography>
        </Grid>
        <Box item xs={5} mb={6} sx={{ backgroundImage: `url(${uperLeftLayer})`, backgroundSize: 'cover', width: '400px', height: '400px', backgroundRepeat: 'no-repeat', backgroundPosition: 'center', objectFit: 'contain', display: { md: "flex", sm: "none", xs: 'none' }, position: 'absolute', top: 0, right: 0, zIndex: -1 }} >

        </Box>
        <Grid container gap={3}>
          <Grid item lg={5} md={5} sm={12} xs={12} sx={{ fontFamily: 'Inter', fontWeight: 700, backgroundColor: '#F8F7F6', p: 4, borderRadius: "12px" }}>
            <Typography variant="h5" sx={{
              fontFamily: 'Inter', fontWeight: 700, mb: 2, fontSize: {
                lg: 24, // large screen
                md: 22, // medium screen
                sm: 20, // small screen
                xs: 18, // extra small screen
              },
            }}>
              Objectives
            </Typography>
            <Typography variant="body1" sx={{
              fontFamily: 'Inter', fontWeight: 400, p: 2, pl: 3, fontSize: {
                lg: 20, // large screen
                md: 18, // medium screen
                sm: 16, // small screen
                xs: 14, // extra small screen
              },
            }}>
              <ul>
                <li>Make listings readable on mobile.</li>
                <li>Provide access to action items without hover.</li>
                <li>Maintain consistent design across devices.</li>
                <li>Enhance mobile user experience.</li>
              </ul>
            </Typography>
          </Grid>
          <Grid item lg={5} md={5} sm={12} xs={12} sx={{ fontFamily: 'Inter', fontWeight: 700, backgroundColor: '#F8F7F6', p: 4, borderRadius: "12px" }}>
            <Typography variant="h5" sx={{
              fontFamily: 'Inter', fontWeight: 700, mb: 2, fontSize: {
                lg: 24, // large screen
                md: 22, // medium screen
                sm: 20, // small screen
                xs: 18, // extra small screen
              },
            }}>
              Challenges
            </Typography>
            <Typography variant="body1" sx={{
              fontFamily: 'Inter', fontWeight: 400, p: 2, pl: 3, fontSize: {
                lg: 20, // large screen
                md: 18, // medium screen
                sm: 16, // small screen
                xs: 14, // extra small screen
              },
            }}>
              <ul>
                <li>Consistency: Maintained design elements across devices.
                  Readability: Ensured clear, readable listing layout on small screens.</li>
                <li>
                Readability: Ensured clear, readable listing layout on small screens.</li>
       
              </ul>
            </Typography>
          </Grid>
        </Grid>
      </Grid>
      <Grid container alignItems={'flex-start'} justifyContent={'center'}>
        <Grid item xs={12} p={5} >
          <Box component={'img'} src={CoverImage2} width={'100%'}>

          </Box>
        </Grid>
      </Grid>
      <Grid container xs={12} sx={{ margin: '0 auto', position: 'relative' }} alignItems={'flex-start'} justifyContent={'flex-start'} p={5} >

        <Grid container gap={3}>
          <Grid item lg={5} md={5} sm={12} xs={12} sx={{ fontFamily: 'Inter', fontWeight: 700, backgroundColor: '#F8F7F6', p: 4, borderRadius: "12px" }}>
            <Typography variant="h5" sx={{
              fontFamily: 'Inter', fontWeight: 700, mb: 2, fontSize: {
                lg: 24, // large screen
                md: 22, // medium screen
                sm: 20, // small screen
                xs: 18, // extra small screen
              },
            }}>
              Solution
            </Typography>
            <Typography variant="body1" sx={{
              fontFamily: 'Inter', fontWeight: 400, p: 2, pl: 3, fontSize: {
                lg: 20, // large screen
                md: 18, // medium screen
                sm: 16, // small screen
                xs: 14, // extra small screen
              },
            }}>
              <ul>
                <li>Card Layout: Converted tables to cards, highlighting key information.</li>
                <li>Three-Dot Menu: Placed at the top right of each card for easy access to action items and reduce clutter.</li>
                
              </ul>
            </Typography>
          </Grid>
          <Grid item lg={5} md={5} sm={12} xs={12} sx={{ fontFamily: 'Inter', fontWeight: 700, backgroundColor: '#F8F7F6', p: 4, borderRadius: "12px" }}>
            <Typography variant="h5" sx={{
              fontFamily: 'Inter', fontWeight: 700, fontSize: {
                lg: 24, // large screen
                md: 22, // medium screen
                sm: 20, // small screen
                xs: 18, // extra small screen
              },
            }}>
              Results
            </Typography>
            <Typography variant="body1" sx={{
              fontFamily: 'Inter', fontWeight: 400, p: 2, pl: 3, fontSize: {
                lg: 20, // large screen
                md: 18, // medium screen
                sm: 16, // small screen
                xs: 14, // extra small screen
              },
            }}>
              <ul>
                <li>Improved mobile user experience with readable listings and accessible action items, leading to higher user satisfaction.</li>
         
              </ul>
            </Typography>
          </Grid>
        </Grid>
      </Grid>





    </div>
  )
}

export default ThirdProject
