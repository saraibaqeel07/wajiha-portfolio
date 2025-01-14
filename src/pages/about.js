import { Box, Card, CardContent, CardMedia, createTheme, Grid, Paper, styled, ThemeProvider, Typography, Button, Avatar, Grid2 } from '@mui/material'
import imageUrl from '../assests/wajihaleft.png'
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

      {/* <Grid container xs={12}   >
                <Grid item xs={6}>
            <div className="slider-container">
                <Slider {...settings}>
                    <div>
                        <h3>1</h3>
                    </div>
                    <div>
                        <h3>2</h3>
                    </div>
                    <div>
                        <h3>3</h3>
                    </div>
                    <div>
                        <h3>4</h3>
                    </div>
                    <div>
                        <h3>5</h3>
                    </div>
                    <div>
                        <h3>6</h3>
                    </div>
                </Slider>
            </div>
            </Grid>
            </Grid> */}
      <Box sx={{ backgroundColor: '#171716', color: '#fff', textAlign: 'center' }}>

        <Grid container  alignItems={'center'} >
          <Grid item lg={5} sx={{
            display: 'flex',
            
            backgroundImage: {
              xs: `none`, // Apply the background image for xs
              sm: `none`, // Apply the background image for sm
              md: `url(${LayerLeft})`, // Remove the background for md and larger screens
              lg: `url(${LayerLeft})`,
            }, // Replace with your image URL
            backgroundSize: 'cover',   // Ensures the image covers the entire div
            backgroundPosition: 'center', // Centers the image
            backgroundRepeat: 'no-repeat', // Prevents the image from repeating
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
                  lg: '600px',  // Large devices
                },
              }}
            />
          </Grid>
          <Grid item lg={6} md={12} mb={4} sx={{ p:" 0px 10px !important" }}>
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

              <span style={{ color: '#D95732', display: 'block' }}>About Me</span>
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
              I'm a product designer based in City of Lights Karachi, Pakistan.
            </Typography>
            <Typography
              variant="body1"
              sx={{
                fontSize: '18px',
                maxWidth: '700px',
                textAlign: 'left',
                fontFamily: 'Inter',
                fontWeight: 400
              }}
            >
              Since 2022, I've enjoyed turning complex problems into simple, beautiful and intuitive designs.
            </Typography>
          </Grid>


        </Grid>
      </Box>
      <Box sx={{ backgroundColor: '#E4E2DD' }}>
        <Grid container alignItems={'flex-start'} justifyContent={'space-between'}>
          <Grid item lg={4.5} md={4.5} sm={12} xs={12} p={5} sx={{ backgroundImage: `url(${LayerRight})`, backgroundSize: 'cover', width: '400px', height: '400px', backgroundRepeat: 'no-repeat', backgroundPosition: 'center', objectFit: 'contain', display: { md: "flex", sm: "none", xs: 'none' } }} >
            <Typography variant="h4" gutterBottom sx={{ fontFamily: 'Inter', fontWeight: 'bold' }}>
              How I Got Into Design
            </Typography>

          </Grid>
          <Grid item lg={6} md={6} sm={12} mt={8} display={'flex'} flexDirection={'column'} alignItems={'flex-start'} justifyContent={'flex-start'} >
          <Box
        sx={{
          height: isExpanded ? 700 : 350, // Adjust based on your collapsed height
          overflow: 'hidden',
          transition: 'height 0.5s ease',
        }}
        ref={contentRef}
      >
        <Typography variant="h6" gutterBottom sx={{ fontFamily: 'Inter',p:'10px',fontWeight:400 }}>
          {isExpanded ? (
            <>
              My journey into the world of design began unexpectedly. As a tech student immersed in web development, I stumbled upon graphic design while exploring freelancing opportunities to earn some side income. What started as a practical decision to learn a new skill and work with clients for modest pay quickly turned into a passion that I hadn't anticipated. Each project, no matter how small, offered me valuable insights and sparked a growing fascination with the art of design.

              As I honed my skills in graphic design, I became increasingly intrigued by the broader scope of user experience, leading me to explore UI/UX design. My first professional role allowed me to wear both hats, working as a graphic designer as well as designing UI/UX. This dual role gave me a unique perspective on the intersection of visual appeal and functional design.

              The more I immersed myself in UI/UX, the more I realized that my true interest lay in creating visually compelling and user-centric designs, rather than in development. This realization led me to shift my career focus entirely toward UI/UX design. What began as a side hustle soon became a full-fledged career path, blending my technical background with a deep love for design.

              Today, I am driven by the same curiosity and eagerness to learn that first drew me to this field. My transition into a dedicated UI/UX design role at Emumba allowed me to dive deeper into creating seamless and engaging user experiences. My path has been shaped by a continuous desire to learn and evolve, always striving to create designs that not only look great but also resonate with users.
            </>
          ) : (
            <>
              My journey into the world of design began unexpectedly. As a tech student immersed in web development, I stumbled upon graphic design while exploring freelancing opportunities to earn some side income. What started as a practical decision to learn a new skill and work with clients for modest pay quickly turned into a passion that I hadn't anticipated. Each project, no matter how small, offered me valuable insights and sparked a growing fascination with the art of design.

              As I honed my skills in graphic design, I became increasingly intrigued by the broader scope of user experience, leading me to explore UI/UX design. My first professional role allowed me to wear both hats, working as a graphic designer as well as designing UI/UX. This dual role gave me a unique perspective on the intersection of visual appeal and functional design.
            </>
          )}
        </Typography>
      </Box>

      <Box sx={{ display: 'flex', justifyContent: 'center', mb: 4, cursor: 'pointer' }}>
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
      </Box>
          </Grid>

        </Grid>
      </Box>
      <Box>
        <ThemeProvider theme={theme}>

          <Grid container sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 1, pt: 7, pb: 2, }}>
            <Typography variant="h6" sx={{ fontWeight: 600, textAlign: 'center', fontFamily: 'Inter', color: '#B3B3B3' }}>
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
                    <Card sx={{ backgroundColor: 'transparent', boxShadow: 'none' }} >
                      <CardMedia
                        component="img"
                        height="auto"
                        image={item?.image}
                        alt={item?.title}
                      />
                      <CardContent sx={{ backgroundColor: 'transparent' }}>
                        <Box component={'div'} onClick={() => {
                          if (item?.url) {
                            window.open(item?.url, '_blank')
                          }
                        }} sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', cursor: 'pointer' }}>
                          <Typography gutterBottom variant="h6" component="div" sx={{ fontSize: '15px', fontFamily: 'Inter' }}>
                            {item?.title}
                          </Typography>
                          {item?.url != '' && <Box>
                            <CallMadeIcon />
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
                <Card sx={{ backgroundColor: 'transparent', boxShadow: 'none' }} >
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
                      <Typography gutterBottom variant="h6" component="div" sx={{ fontSize: '15px', fontFamily: 'Inter' }}>
                        {card.title}
                      </Typography>
                      {card?.url != '' && <Box>
                        <CallMadeIcon />
                      </Box>}
                    </Box>

                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </ThemeProvider>
      </Box>
      <Box sx={{ backgroundColor: '#E4E2DD', pb: 5 }}>
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
                  <Card sx={{ backgroundColor: 'transparent', boxShadow: 'none' }} >
                    <CardMedia
                      component="img"
                      height="auto"
                      image={item?.image}
                      alt={item?.title}
                    />
                    <CardContent sx={{ backgroundColor: 'transparent' }}>
                      <Box component={'div'} onClick={() => window.open(item?.url, '_blank')} sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', cursor: 'pointer' }}>
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
              <Card sx={{ backgroundColor: 'transparent', boxShadow: 'none' }} >
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
                      <Box component={'div'} onClick={() => window.open(item?.url, '_blank')} sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', cursor: 'pointer' }}>
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
                  <Box component={'div'} onClick={() => window.open(card.url, '_blank')} sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', cursor: 'pointer' }}>
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
