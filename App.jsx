import logo from './logo.svg';
import img2 from './img2.jpeg'
import img3 from './img3.avif'
import img1 from './img1.png'
import profiles from './profiles';
import React from "react";
import './App.css';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
//import CarouselComponent from "./components/carousel.component";
function App() 
{
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3 // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2 // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
    }

  };
 
  return(
    <div className='App'>
      <h1>IMPACTOR's Profile</h1>
     
    <Carousel className="container"  responsive={responsive}>
    
    <div><button><img src={img2} alt="My Image" className="image"/></button></div>
    <div><img src={img2} alt="My Image" className="image"/></div>
    <div><img src={img2} alt="My Image" className="image"/></div>
    <div><img src={img2} alt="My Image" className="image"/></div>   
    <div><img src={img2} alt="My Image" className="image"/></div>
    <div><img src={img2} alt="My Image" className="image"/></div>
    <div><img src={img2} alt="My Image" className="image"/></div>
    <div><img src={img2} alt="My Image" className="image"/></div>   
    <div><img src={img2} alt="My Image" className="image"/></div>
    <div><img src={img2} alt="My Image" className="image"/></div>
    <div><img src={img2} alt="My Image" className="image"/></div>
    <div><img src={img2} alt="My Image" className="image"/></div>   
    <div><img src={img2} alt="My Image" className="image"/></div>
    <div><img src={img2} alt="My Image" className="image"/></div>
    <div><img src={img2} alt="My Image" className="image"/></div>
    <div><img src={img2} alt="My Image" className="image"/></div>   
    <div><img src={img2} alt="My Image" className="image"/></div>
    <div><img src={img2} alt="My Image" className="image"/></div>
    <div><img src={img2} alt="My Image" className="image"/></div>
    <div><img src={img2} alt="My Image" className="image"/></div>   
    <div><img src={img2} alt="My Image" className="image"/></div>
    
    
    </Carousel>
  </div>
      );    
}export default App;


function profile() 
{
  document.getElementsByClassName("image").value="Shruti's profile";

}