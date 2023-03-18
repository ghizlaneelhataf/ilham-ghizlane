import React, { useEffect, useState } from "react";
import SliderContent from "./SliderContent";
import Dots from "./Dots";
import Arrows from "./Arrows";
import sliderImage from "./sliderImage";
import "./slider.css";


import Navbard from "./navbard";
const len = sliderImage.length - 1;
export default function About() {
   
  
     const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex(activeIndex === len ? 0 : activeIndex + 1);
    }, 5000);
    return () => clearInterval(interval);
  }, [activeIndex]);

  return (
    <>
    <div className="slider-container">
      <div> <Navbard/> </div>
      <div className="sli">
      <SliderContent activeIndex={activeIndex} sliderImage={sliderImage} />
      <Arrows
        prevSlide={() =>
          setActiveIndex(activeIndex < 1 ? len : activeIndex - 1)
        }
        nextSlide={() =>
          setActiveIndex(activeIndex === len ? 0 : activeIndex + 1)
        }
      />
      <Dots
        activeIndex={activeIndex}
        sliderImage={sliderImage}
        onclick={(activeIndex) => setActiveIndex(activeIndex)}
      />
      </div>

    </div>
   
    
    <p className="tex"> In the recent past, there was a popular belief that it takes about 10,000 hours to master a skill, and while the real number is up in the air right now, it remains true that developing skills takes time. The specific amount of time depends on the person and their time management, but overall, just being willing to put in the hours and practice a skill pays off.</p>
    <p className="tex">The old phrase says that “Time heals everything,” and while that often feels hollow to people in the middle of a painful experience, they often find that it eventually becomes true. Sometimes the only way to get a new, healthier perspective on a situation is to give it time. Within that time, a person is given the opportunities to think about what’s happened and experience other things. Time serves as both a teacher and a healer, and while a person may not go back to who they were before, time has allowed them to grow.</p>
   
   
    </>

   ) 
}