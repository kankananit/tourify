import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Recommend from "./components/Recommend";
import Scroll from "./components/Scroll";
import Services from "./components/Services";
import Testimonial from "./components/Testimonial";


function App() {
  return (
    <>
     <Scroll/>
     <Navbar/>
     <Hero/>
     <Services/>
     <Recommend/>
     <Testimonial/>
     <Footer/>
    </>
  );
}

export default App;
