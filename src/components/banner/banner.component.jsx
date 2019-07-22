import React from 'react';

import { ReactComponent as Triangle } from '../../assets/images/triangle.svg';
import { ReactComponent as Circle } from '../../assets/images/circle.svg';
import GradientText from '../../assets/images/text-gradient.png';


import './banner.styles.scss';


const Banner = () => (
  <div className="banner">
    <div className="image image__circle">
      <Circle />
    </div>
    <div className=" image image__triangle">
      <Triangle />
    </div>
    <div className="banner--text">
      <h1>Top 5</h1>
    <div className="banner--text__image">
      <img src={ GradientText } alt="Web Design"/>
    </div> 
    <h1>
      Podcasts
    </h1>  
    </div>
  </div>
);

export default Banner;

