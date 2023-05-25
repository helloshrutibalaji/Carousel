import React from "react";
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
export default function CarouselComponent() {
    return (
        <div className="carousel-wrapper">
            <Carousel infiniteLoop useKeyboardArrows autoPlay showArrows showIndicators onClickItem={Profile()}>
                <div>
                    <img src="C:\Users\shruti.balaji\ReactProjects\myapp\public\img1.png" />
                </div>
                <div>
                    <img src="C:\Users\shruti.balaji\ReactProjects\myapp\public\img2.jpg" />
                </div>
                <div>
                    <img src="C:\Users\shruti.balaji\ReactProjects\myapp\public\img3.avif" />
                </div>
            </Carousel>
        </div>
    );


}