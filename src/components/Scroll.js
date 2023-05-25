import React,{useState} from 'react'
import logo from "../assets/logo.png"
const Scroll = () => {
  const [scrollState, setScrollState] = useState(false);
  const toTop = () => {
    window.scrollTo({ top: 0 });
  };
  window.addEventListener("scroll", () => {
    window.pageYOffset > 200 ? setScrollState(true) : setScrollState(false);
  });
  
  return (
    <div className='ToTop' onClick={toTop} scrollState={scrollState}>
      {/* <img src={logo} alt=""/> */}
      
    </div>
  )
}

export default Scroll
