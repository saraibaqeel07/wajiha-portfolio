import About from "./pages/about";
import ContactUs from "./pages/contactus";
import Home from "./pages/home";
import FirstProject from "./pages/firstproject";
import SecondProject from "./pages/secondproject";
import ThirdProject from "./pages/thirdproject";





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
 
  
  
];

export default Webroutes;