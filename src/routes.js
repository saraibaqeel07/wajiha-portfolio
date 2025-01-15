import About from "./pages/about";
import ContactUs from "./pages/contactus";
import Home from "./pages/home";
import FirstProject from "./pages/firstproject";
import SecondProject from "./pages/secondproject";
import ThirdProject from "./pages/thirdproject";
import Portfolio from "./pages/portfolio";
import ForthProject from "./pages/forthproject";





const Webroutes = [
  {
    path: "/",
    component: <Home />
  },


  {
    path: "/about",
    component: <About />
  },


  {
    path: "/contact-us",
    component: <ContactUs />
  },
  {
    path: "/portfolio",
    component: <Portfolio />
  },
  {
    path: "/first-project",
    component: <FirstProject />
  },
  {
    path: "/second-project",
    component: <SecondProject/>
  },
  {
    path: "/third-project",
    component: <ThirdProject />
  },
  {
    path: "/forth-project",
    component: <ForthProject />
  },
  
  
];

export default Webroutes;