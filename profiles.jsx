import React from 'react';
import img2 from './img2.jpeg'
import img3 from './img3.avif'
import img1 from './img1.png'
import App from './App';
import './App.css';
export default function profiles()
{
    return (
        <div>
    <div><button><img src={img2} alt="My Image" className="image"/></button></div>
    <div><img src={img2} alt="My Image" className="image"/></div>
    <div>Item 4</div>
    <div>Item 5</div>
    
    <div><img src={img2} alt="My Image" className="image"/></div>
    
    </div>);
}