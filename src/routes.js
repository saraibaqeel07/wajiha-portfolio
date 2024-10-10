import About from "./pages/about";
import ContactUs from "./pages/contactus";
import Home from "./pages/home";




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
 
  
  
];

export default Webroutes;