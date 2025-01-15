import { Box, Card, CardContent, CardMedia, createTheme, Grid, Paper, styled, ThemeProvider, Typography, Button, Avatar, Grid2 } from '@mui/material'
import imageUrl from '../assests/wajihaAbout.png'
import React, { useRef, useState } from 'react'
import card1 from '../assests/youtube.png'
import card2 from '../assests/laptop.png'
import card3 from '../assests/music.png'
import card4 from '../assests/paint.png'
import uiuxcard1 from '../assests/laptop2.png'
import uiuxcard2 from '../assests/sunset.png'
import uiuxcard3 from '../assests/sunrise.png'
import uiuxcard4 from '../assests/selfie.png'
import book1 from '../assests/book1.png'
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








const About = () => {

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
      title: 'Creating And Sharing Valuable Design Content',
      description: 'This is a description for card 2.',
      image: card2,
      url: 'https://www.linkedin.com/in/wajihafatima022001/'
    },
    {
      id: 2,
      title: 'Listening To Desi Or Pop Bangers',
      description: 'This is a description for card 2.',
      image: card3,
      url: 'https://open.spotify.com/playlist/3I9Zj7t8zMnf9iXzavbUrG?si=e4aa5aaa0ed84a15&nd=1&dlsi=b5949e1927114f6f'
    },
    {
      id: 2,
      title: 'Finding Solace In Strokes Of Color',
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
      url: 'https://medium.com/design-bootcamp/when-suitcase-shrinks-the-art-of-adaptive-ui-ux-design-d8fb8008cb7d'
    },
    {
      id: 2,
      title: 'Actionable Tips for Inner Tranquility',
      description: 'This is a description for card 2.',
      image: uiuxcard2,
      url: 'https://medium.com/@wafa022001/a-peaceful-life-ahead-claim-it-now-5f68430a1695'
    },
    {
      id: 2,
      title: 'Be Beautiful — The Non Conventional Guide',
      description: 'This is a description for card 2.',
      image: uiuxcard3,
      url: 'https://medium.com/@wafa022001/be-beautiful-the-non-conventional-guide-cb6c419fde5f'
    },
    {
      id: 2,
      title: 'Wajiha Who? — Get To Know Me',
      description: 'This is a description for card 2.',
      image: uiuxcard4,
      url: 'https://medium.com/@wafa022001/wajiha-who-get-to-know-me-c283539f78aa'
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

      <Box sx={{ backgroundColor: '#171716', color: '#fff', padding: '40px', textAlign: 'center' }}>

        <Grid container spacing={2} justifyContent="center" alignItems={'center'}>
        <Grid item lg={6} md={12} sx={{ p: '0 !important' }}>
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
                                    lg: '50px', // Responsive font size for larger screens
                                },
                            }}
                        >
                          Hey! Its{' '}
                          <span style={{ color: '#D95732' }}>Wajiha</span> from Karachi, Pakistan.
                        </Typography>

                        <Typography
                            variant="body1"
                            sx={{
                                fontSize: '20px',
                                maxWidth: '700px',
                                textAlign: 'left',
                            }}
                        >
                            I get inspired by the storytelling of K-dramas and the rhythm of Spanish music, which fuel my creative ideas.
                        </Typography>
                    </Grid>
        
          <Grid item lg={5} sx={{
            display: 'flex',

            // backgroundImage: {
            //   xs: `none`, // Apply the background image for xs
            //   sm: `none`, // Apply the background image for sm
            //   md: `url(${LayerLeft})`, // Remove the background for md and larger screens
            //   lg: `url(${LayerLeft})`,
            // }, // Replace with your image URL
            // backgroundSize: 'cover',   // Ensures the image covers the entire div
            // backgroundPosition: 'center', // Centers the image
            // backgroundRepeat: 'no-repeat', // Prevents the image from repeating
          }}>
            <Box
              component="img"
              src={imageUrl}
              sx={{
                width: '100% !important',
                height: {
                  xs: '300px',  // Extra small devices
                  sm: '400px',  // Small devices
                  md: '500px',  // Medium devices
                  lg: '500px',  // Large devices
                },
              }}
            />
          </Grid>

          {/* <Grid item xs={12}>
        <Box sx={{ mt: 4, display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '10px' }}>

            <Box sx={{ overflow: 'hidden', whiteSpace: 'nowrap', backgroundColor: 'transparent', padding: '10px 0' }}>
                <Box
                    component="div"
                    sx={{
                        display: 'inline-block',
                        animation: 'marquee 15s linear infinite',
                        whiteSpace: 'nowrap',
                    }}
                >
                    {skills.map((skill, index) => (
                        <React.Fragment key={index}>
                            <Typography
                                variant="body2"
                                component="span"
                                sx={{
                                    display: 'inline-block',
                                    margin: '0 10px',
                                    padding: '5px 10px',
                                    color: '#fff',

                                    borderRadius: '20px',
                                    fontSize: '14px',
                                }}
                            >
                                {skill}
                            </Typography>
                            {index !== skills.length - 1 && (
                                <Typography
                                    variant="body2"
                                    component="span"
                                    sx={{
                                        display: 'inline-block',

                                        color: '#fff',
                                        fontWeight: 'bold'
                                    }}
                                >
                                    *
                                </Typography>
                            )}
                        </React.Fragment>
                    ))}
                </Box>


                <style>{`
@keyframes marquee {
0% { transform: translateX(100%); }
100% { transform: translateX(-100%); }
}
`}</style>
            </Box>
        </Box>
    </Grid> */}
        </Grid>
      </Box>

      <Box sx={{ backgroundColor: 'white' }}>
        <Grid container alignItems={'flex-start'} justifyContent={'space-between'}>
          <Grid item lg={4.5} md={4.5} sm={12} xs={12} p={5} sx={{ backgroundImage: `url(${LayerRight})`, backgroundSize: 'cover', width: '400px', height: { lg: '400px', md: '400px', sm: '120px', xs: '120px' }, backgroundRepeat: 'no-repeat', backgroundPosition: 'center', objectFit: 'contain' }} >
            <Typography variant="h4" gutterBottom sx={{ fontFamily: 'Inter', fontWeight: 'bold', textAlign: { lg: 'left', md: 'left', sm: 'center', xs: 'center' }, mt: { lg: '30px', md: '0px', sm: '0px', xs: '0px' } }}>
              How I Got Into Design
            </Typography>

          </Grid>
          <Grid item lg={6} md={6} sm={12} sx={{ mt: { lg: 8, md: 8, sm: 2, xs: 2 } }} display={'flex'} flexDirection={'column'} alignItems={'flex-start'} justifyContent={'flex-start'} >
            <Box
              sx={{

                overflow: 'hidden',
                transition: 'height 0.5s ease',
              }}
              ref={contentRef}
            >
              <Typography variant="h6" gutterBottom sx={{ fontFamily: 'Inter', p: '10px', fontWeight: 400 }}>

                <>
                  My journey into design started unexpectedly during my time as a tech student exploring freelancing. Initially focused on graphic design for side income, I discovered a passion for crafting visuals and later transitioned to UI/UX design. My early professional role combined graphic and UI/UX design, giving me insight into blending aesthetics with functionality. This experience helped me shift fully from graphic to UI/UX design, deepening my focus on creating seamless user experiences.
                </>

              </Typography>
            </Box>

            {/* <Box sx={{ display: 'flex', justifyContent: 'center', mb: 4, cursor: 'pointer' }}>
        <Typography
          variant="h6"
          gutterBottom
          onClick={toggleReadMore}
          sx={{ mt: 2, textDecoration: 'none', color: "black", fontFamily: 'Inter' ,p:'10px'}}
          display={'flex'}
          alignItems={'center'}
        >
          {isExpanded ? 'Read Less' : 'Read More'} {isExpanded ? <KeyboardArrowUpIcon/> : <KeyboardArrowDownIcon/>}
        </Typography>
      </Box> */}
          </Grid>

        </Grid>
      </Box>
      <Box sx={{ backgroundColor: '#171716' }}>
        <ThemeProvider theme={theme}>

          <Grid container sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 1, pt: 7, pb: 2 }}>
            <Typography variant="h6" sx={{ fontWeight: 600, textAlign: 'center', fontFamily: 'Inter', color: 'white', p: 1 ,fontSize:'17px'}}>
              When I'm Not Designing UI/UX, I'm...
            </Typography>

          </Grid>

          <Grid container justifyContent={'center'} sx={{ display: { lg: 'none', md: "none", sm: 'flex', xs: 'flex' } }}>
            <Grid item md={11} sm={11} xs={11} lg={11} width={'320px'} p={'10px'}>
              <Swiper
                spaceBetween={10}
                slidesPerView={3}
                className='my-swiper'
                loop={true}  // Enables infinite scrolling
                autoplay={{
                  delay: 2500,
                  disableOnInteraction: true,
                }}
                breakpoints={{
                  320: {
                    slidesPerView: 1
                  },
                  450: {
                    slidesPerView: 2
                  },
                  786: {
                    slidesPerView: 3
                  },
                  1080: {
                    slidesPerView: 4
                  }
                }}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
              >
                {cardData.map((item, ind) => (
                  <SwiperSlide key={ind}>
                    <Card onClick={() => {
                      if (item?.url) {
                        window.open(item?.url, '_blank')
                      }
                    }} sx={{ backgroundColor: 'transparent', boxShadow: 'none', cursor: item?.url ? 'pointer' : '' }} >
                      <CardMedia
                        component="img"
                        height="auto"
                        image={item?.image}
                        alt={item?.title}
                      />
                      <CardContent sx={{ backgroundColor: 'transparent' }}>
                        <Box component={'div'} sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', cursor: 'pointer' }}>
                          <Typography gutterBottom variant="h6" component="div" sx={{ fontSize: '15px', fontFamily: 'Inter', color: 'white' }}>
                            {item?.title}
                          </Typography>
                          {item?.url != '' && <Box>
                            <CallMadeIcon sx={{ color: 'white' }} />
                          </Box>}
                        </Box>

                      </CardContent>
                    </Card>
                  </SwiperSlide>
                ))}
              </Swiper>
            </Grid>
          </Grid>
          <Grid container xs={11} spacing={2} mt={2} sx={{ margin: '0 auto', mt: 2, display: { lg: 'flex', md: "flex", sm: 'none', xs: 'none' } }}>
            {cardData.map((card) => (
              <Grid item key={card.id} xs={12} sm={6} md={3} sx={{ p: '10px !important' }}>
                <Card onClick={() => {
                  if (card?.url) {
                    window.open(card?.url, '_blank')
                  }
                }} sx={{ backgroundColor: 'transparent', boxShadow: 'none', cursor: card?.url ? 'pointer' : '' }} >
                  <CardMedia
                    component="img"
                    height="auto"
                    image={card.image}
                    alt={card.title}
                  />
                  <CardContent sx={{ backgroundColor: 'transparent' }}>
                    <Box component={'div'} onClick={() => {
                      if (card?.url) {
                        window.open(card.url, '_blank')
                      }
                    }} sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', cursor: 'pointer' }}>
                      <Typography gutterBottom variant="h6" component="div" sx={{ fontSize: '15px', fontFamily: 'Inter', color: 'white' }}>
                        {card.title}
                      </Typography>
                      {card?.url != '' && <Box>
                        <CallMadeIcon sx={{ color: 'white' }} />
                      </Box>}
                    </Box>

                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </ThemeProvider>
      </Box>
      <Box sx={{ backgroundColor: 'white', pb: 5 }}>
        <Grid container sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 1, pt: 7, pb: 2, }}>
          <Typography variant="h6" sx={{ fontWeight: 'bold', textAlign: 'center', fontFamily: 'Inter', fontSize: '16px', textTransform: 'upercase' }}>

            ... CAPTURING FLEETING THOUGHTS
          </Typography>
          <Box>
            <Box component="img" src={Dots} width="40px" sx={{ mb: '2px' }} />
          </Box>
        </Grid>
        <Grid container justifyContent={'center'} sx={{ display: { lg: 'none', md: "none", sm: 'flex', xs: 'flex' } }}>
          <Grid item md={11} sm={11} xs={11} lg={11} width={'320px'} p={'10px'}>
            <Swiper
              spaceBetween={10}
              slidesPerView={3}
              className='my-swiper'
              loop={true}  // Enables infinite scrolling
              autoplay={{
                delay: 2500,
                disableOnInteraction: true,
              }}
              breakpoints={{
                320: {
                  slidesPerView: 1
                },
                450: {
                  slidesPerView: 2
                },
                786: {
                  slidesPerView: 3
                },
                1080: {
                  slidesPerView: 4
                }
              }}
              onSlideChange={() => console.log('slide change')}
              onSwiper={(swiper) => console.log(swiper)}
            >
              {cardData2.map((item, ind) => (
                <SwiperSlide key={ind}>
                  <Card onClick={() => window.open(item?.url, '_blank')} sx={{ backgroundColor: 'transparent', boxShadow: 'none', cursor: item?.url ? 'pointer' : '' }} >
                    <CardMedia
                      component="img"
                      height="auto"
                      image={item?.image}
                      alt={item?.title}
                    />
                    <CardContent sx={{ backgroundColor: 'transparent' }}>
                      <Box component={'div'} sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', cursor: 'pointer' }}>
                        <Typography gutterBottom variant="h6" component="div" sx={{ fontSize: '15px', fontFamily: 'Inter' }}>
                          {item?.title}
                        </Typography>
                        <Box>
                          <CallMadeIcon />
                        </Box>
                      </Box>

                    </CardContent>
                  </Card>
                </SwiperSlide>
              ))}
            </Swiper>
          </Grid>
        </Grid>
        <Grid container xs={11} spacing={2} mt={2} sx={{ margin: '0 auto', mt: 2, display: { lg: 'flex', md: "flex", sm: 'none', xs: 'none' } }}>
          {cardData2.map((card) => (
            <Grid item key={card.id} xs={12} sm={6} md={3} sx={{ p: '10px !important' }}>
              <Card onClick={() => window.open(card?.url, '_blank')} sx={{ backgroundColor: 'transparent', boxShadow: 'none', cursor: card?.url ? 'pointer' : '' }} >
                <CardMedia
                  component="img"
                  height="auto"
                  image={card.image}
                  alt={card.title}
                />
                <CardContent sx={{ backgroundColor: 'transparent' }}>
                  <Box component={'div'} onClick={() => window.open(card.url, '_blank')} sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', cursor: 'pointer' }}>
                    <Typography gutterBottom variant="h6" component="div" sx={{ fontSize: '15px', fontFamily: 'Inter' }}>
                      {card.title}
                    </Typography>
                    <Box>
                      <CallMadeIcon />
                    </Box>
                  </Box>

                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

      </Box>
      <Box sx={{ backgroundColor: '#171716', pb: 5 }}>
        <Grid container sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 1, pt: 7, pb: 2, }}>
          <Typography variant="h6" sx={{ fontWeight: 'bold', textAlign: 'center', fontFamily: 'Inter', fontSize: '16px', textTransform: 'upercase', color: 'white' }}>

            ... OR EXPLORING NEW PRESPECTIVES THROUGH DIVERSE READING MATERIALS.
          </Typography>

        </Grid>
        <Grid container justifyContent={'center'} sx={{ display: { lg: 'none', md: "none", sm: 'flex', xs: 'flex' } }}>
          <Grid item md={11} sm={11} xs={11} lg={11} width={'320px'} p={'10px'}>
            <Swiper
              spaceBetween={10}
              slidesPerView={3}
              className='my-swiper'
              loop={true}  // Enables infinite scrolling
              autoplay={{
                delay: 2500,
                disableOnInteraction: true,
              }}
              breakpoints={{
                320: {
                  slidesPerView: 1
                },
                450: {
                  slidesPerView: 2
                },
                786: {
                  slidesPerView: 3
                },
                1080: {
                  slidesPerView: 4
                }
              }}
              onSlideChange={() => console.log('slide change')}
              onSwiper={(swiper) => console.log(swiper)}
            >
              {cardData3.map((item, ind) => (
                <SwiperSlide key={ind}>
                  <Card sx={{ backgroundColor: 'transparent', boxShadow: 'none' }} >
                    <CardMedia
                      component="img"
                      height="auto"
                      image={item?.image}
                      alt={item?.title}
                    />
                    <CardContent sx={{ backgroundColor: 'transparent' }}>
                      <Box component={'div'} sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
                        <Typography gutterBottom variant="h6" component="div" sx={{ fontSize: '15px', fontFamily: 'Inter', color: 'white', pl: '0px !important' }}>
                          {item?.title}
                        </Typography>
                        {item?.url && <Box>
                          <CallMadeIcon sx={{ color: 'white' }} />
                        </Box>}
                      </Box>

                    </CardContent>
                  </Card>
                </SwiperSlide>
              ))}
            </Swiper>
          </Grid>
        </Grid>
        <Grid container xs={11} spacing={2} mt={2} sx={{ margin: '0 auto', mt: 2, display: { lg: 'flex', md: "flex", sm: 'none', xs: 'none' } }}>
          {cardData3.map((card) => (
            <Grid item key={card.id} xs={12} sm={6} md={3} sx={{ p: '10px !important' }}>
              <Card sx={{ backgroundColor: 'transparent', boxShadow: 'none' }} >
                <CardMedia
                  component="img"
                  height="auto"
                  image={card.image}
                  alt={card.title}
                />
                <CardContent sx={{ backgroundColor: 'transparent' }}>
                  <Box component={'div'} sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
                    <Typography gutterBottom variant="h6" component="div" sx={{ fontSize: '15px', fontFamily: 'Inter', color: 'white', pl: '0px !important' }}>
                      {card.title}
                    </Typography>
                    {card?.url && <Box>
                      <CallMadeIcon sx={{ color: 'white' }} />
                    </Box>}
                  </Box>

                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

      </Box>


    </div>
  )
}

export default About
