import { Box, Card, CardContent, CardMedia, createTheme, Grid, Paper, styled, ThemeProvider, Typography, Button, Avatar, Grid2 } from '@mui/material'
import imageUrl from '../assests/wajiha.png'
import React from 'react'
import card1 from '../assests/card1.png'
import card2 from '../assests/card2.png'
import card3 from '../assests/card3.png'
import card4 from '../assests/card4.png'
import card5 from '../assests/card5.png'
import img1 from '../assests/figma-icon.png'
import img2 from '../assests/adobe-photoshop-2.png'
import img3 from '../assests/illus.png'
import img4 from '../assests/adobe-xd-2.png'
import img5 from '../assests/medium-4.png'
import img6 from '../assests/notion-2.png'
import colorLinkdin from '../assests/colorLinkdin.png'
import CallMadeIcon from '@mui/icons-material/CallMade';
import LayerRight from '../assests/layerRight.png'
import LayerLeft from '../assests/layerLeft.png'
import 'swiper/css'
import { Swiper, SwiperSlide } from 'swiper/react'





import Slider from "react-slick";
import Star from '@mui/icons-material/Star'
import { useNavigate } from 'react-router-dom'



const Home = () => {
    const theme = createTheme({
        typography: {
            fontFamily: 'Inter, Arial, sans-serif',
        },
    });
    const navigate=useNavigate()
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
            title: 'Case Study - Progress Page Redesign',
            description: 'This is a description for card 1.',
            image: card1,
            url: '/second-project'
        },
        {
            id: 2,
            title: 'Case Study - Streamlining Skill Add/Edit Flow',
            description: 'This is a description for card 2.',
            image: card2,
            url: '/first-project'
        },
        {
            id: 2,
            title: 'Case Study - Table Listing to Mobile Adaptive Design',
            description: 'This is a description for card 2.',
            image: card3,
            url: '/third-project'
        },
        {
            id: 2,
            title: 'JobQuest.ai',
            description: 'This is a description for card 2.',
            image: card4,
            url: 'https://jobquest.ai/'
        },
        {
            id: 2,
            title: 'Dribble',
            description: 'This is a description for card 2.',
            image: card5,
            url: 'https://dribbble.com/wajihafatima02'
        },
        {
            id: 2,
            title: 'Behance',
            description: 'This is a description for card 2.',
            image: card5,
            url: 'https://www.behance.net/wajihafatima02'
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
                                    lg: '35px', // Responsive font size for larger screens
                                },
                            }}
                        >
                            Empath, Expert in{' '}
                            <span style={{ color: '#D95732', display: 'block' }}>Problem-Solving</span>
                        </Typography>

                        <Typography
                            variant="body1"
                            sx={{
                                fontSize: '20px',
                                maxWidth: '700px',
                                textAlign: 'left',
                            }}
                        >
                            With over 2 years of design experience, I create user-centric, adaptive, and responsive solutions
                            that tackle challenges and deliver engaging experiences across mobile, web, and desktop platforms.
                        </Typography>
                    </Grid>
                    <Grid item lg={6} sx={{ display: 'flex' }}>
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


            <Box sx={{ backgroundColor: '#E4E2DD', pb: 5 }}>
                <Typography variant="h6" sx={{ fontWeight: 'bold', textAlign: 'center', fontFamily: 'Inter', pt: 7, pb: 2, fontSize: '16px' }}>
                    DIVE INTO MY WORK
                </Typography>
                <Grid container justifyContent={'center'} sx={{ display: { lg: 'none', md: "none", sm: 'flex', xs: 'flex' } }}>
                    <Grid item md={12} sm={12} xs={12} lg={12} width={'320px'} p={'10px'}>
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
                                                
                                                if(item?.url?.includes('https')){
                                                    window.open(item?.url, '_blank')
                                                }
                                                else{
                                                    navigate(item?.url)
                                                }
                                                }} sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', cursor: 'pointer' }}>
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
                <Grid container xs={12} spacing={2} mt={2} sx={{ margin: '0 auto', mt: 2, display: { lg: 'flex', md: "flex", sm: 'none', xs: 'none' } }}>
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
                                         if(card?.url?.includes('https')){
                                            window.open(card?.url, '_blank')
                                        }
                                        else{
                                            navigate(card?.url)
                                        }
                                    }} sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', cursor: 'pointer' }}>
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
            <Box>
                <ThemeProvider theme={theme}>

                    <Grid container sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 1, pt: 7, pb: 2, }}>
                        <Typography variant="h6" sx={{ fontWeight: 600, textAlign: 'center', fontFamily: 'Inter', color: '#B3B3B3' }}>
                            TRUSTED BY PROFESSIONALS
                        </Typography>
                        <Box>
                            <Box component="img" src={colorLinkdin} width="20px" height="20px" sx={{ mb: '2px' }} />
                        </Box>
                    </Grid>

                    <Grid container justifyContent={'center'} sx={{ display: { lg: 'none', md: "none", sm: 'flex', xs: 'flex' } }}>
                        <Grid item md={12} sm={12} xs={12} lg={12} width={'320px'} p={'10px'}>
                            <Swiper
                                spaceBetween={10}
                                slidesPerView={3}
                                className='my-swiper'

                                breakpoints={{
                                    320: {
                                        slidesPerView: 1
                                    },
                                    450: {
                                        slidesPerView: 1
                                    },
                                    786: {
                                        slidesPerView: 1
                                    },
                                    1080: {
                                        slidesPerView: 1
                                    }
                                }}
                                onSlideChange={() => console.log('slide change')}
                                onSwiper={(swiper) => console.log(swiper)}
                            >
                                {testimonials.map((item, ind) => (
                                    <SwiperSlide key={ind}>
                                        <Grid item xs={12} md={12} sm={12} lg={12} key={ind} mb={2} >
                                            <Card variant="outlined" sx={{
                                                backgroundColor: '#E4E2DD40', height: {
                                                    xs: 'auto', // Mobile (0px and up)
                                                    sm: 'auto', // Tablet (600px and up)
                                                    md: ind === 2 ? 'auto' : 'auto', // Desktop (900px and up)
                                                },
                                            }}>
                                                <CardContent>
                                                    <Typography variant="h6" sx={{ fontWeight: 'bold', fontFamily: 'Inter' }}>
                                                        {item?.name}
                                                    </Typography>
                                                    <Typography variant="subtitle1" color="textSecondary" sx={{ fontFamily: 'Inter' }}>
                                                        {item?.title}
                                                    </Typography>
                                                    <Typography variant="body2" sx={{ marginTop: 1, color: '#171716', fontFamily: 'Inter', fontWeight: '500' }}>
                                                        {item?.feedback}
                                                    </Typography>
                                                </CardContent>
                                            </Card>
                                            {ind == 2 && <Button onClick={() => window.open('https://www.linkedin.com/in/wajihafatima022001/', '_blank')} variant="text" fullWidth color="primary" sx={{ border: '1px solid #E4E2DD', p: 3, pl: 7, pr: 7, color: 'black', fontFamily: 'Inter', textTransform: 'capitalize', mt: 2 }}>
                                                View All &nbsp;<CallMadeIcon />
                                            </Button>}
                                        </Grid>
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </Grid>
                    </Grid>
                    <Grid container spacing={2} sx={{ padding: 3, display: { lg: 'flex', md: "flex", sm: 'none', xs: 'none' } }}>
                        {testimonials.map((testimonial, index) => (


                            <Grid item xs={12} md={6} sm={12} lg={4} key={index} mb={2} >
                                <Card variant="outlined" sx={{
                                    backgroundColor: '#E4E2DD40', height: {
                                        xs: 'auto', // Mobile (0px and up)
                                        sm: 'auto', // Tablet (600px and up)
                                        md: index === 2 ? '289px' : '380px', // Desktop (900px and up)
                                    },
                                }}>
                                    <CardContent>
                                        <Typography variant="h6" sx={{ fontWeight: 'bold', fontFamily: 'Inter' }}>
                                            {testimonial.name}
                                        </Typography>
                                        <Typography variant="subtitle1" color="textSecondary" sx={{ fontFamily: 'Inter' }}>
                                            {testimonial.title}
                                        </Typography>
                                        <Typography variant="body2" sx={{ marginTop: 1, color: '#171716', fontFamily: 'Inter', fontWeight: '500' }}>
                                            {testimonial.feedback}
                                        </Typography>
                                    </CardContent>
                                </Card>
                                {index == 2 && <Button onClick={() => window.open('https://www.linkedin.com/in/wajihafatima022001/', '_blank')} variant="text" fullWidth color="primary" sx={{ border: '1px solid #E4E2DD', p: 3, pl: 7, pr: 7, color: 'black', fontFamily: 'Inter', textTransform: 'capitalize', mt: 2 }}>
                                    View All &nbsp;<CallMadeIcon />
                                </Button>}
                            </Grid>
                        ))}
                    </Grid>
                </ThemeProvider>
            </Box>
            <Box sx={{ backgroundColor: '#E4E2DD' }}>
                <Grid container alignItems={'center'}>
                    <Grid item lg={6} md={6} sm={12} xs={12} p={5} >
                        <Typography variant="h4" gutterBottom sx={{ fontFamily: 'Inter', fontWeight: 'bold' }}>
                            My Expertise Lies Around
                        </Typography>
                        <Typography variant="body1" gutterBottom sx={{ fontFamily: 'Inter' }}>
                            I specialize in crafting exceptional user experiences. With a keen eye for detail and a deep understanding of user behavior, I transform complex ideas into intuitive interfaces. My expertise lies in creating visually appealing and functional designs that drive user engagement.
                        </Typography>
                        <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap', mt: 2 }}>
                            {Images?.map((image, index) => (
                                <Grid item key={index} >
                                    <Box sx={{ border: '1px solid #B3B3B3', p: 0.5, pl: 3, pr: 3, borderRadius: "5px", width: "auto" }}>
                                        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 0.8 }}>
                                            {image?.image && <img src={image.image} alt={image.name} style={{ width: image.name == 'Figma' ? '10px' : '17px' }} />}
                                            <Typography variant="body1" sx={{ mt: 0.2, fontFamily: 'Inter', fontSize: '12px', width: 'auto', }}>{image.name}</Typography>
                                        </Box>
                                    </Box>
                                </Grid>
                            ))}
                        </Box>
                    </Grid>
                    <Grid item lg={6} md={6} sm={12} sx={{ backgroundImage: `url(${LayerRight})`, backgroundSize: 'cover', width: '400px', height: '400px', backgroundRepeat: 'no-repeat', backgroundPosition: 'center', objectFit: 'contain', display: { md: "flex", sm: "none", xs: 'none' } }} >

                    </Grid>

                </Grid>
            </Box>

        </div>
    )
}

export default Home
