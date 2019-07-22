import React from 'react';

// Using ReactComponent to bring in SVG's
import { ReactComponent as Triangle } from '../../assets/images/triangle.svg';
import { ReactComponent as Circle } from '../../assets/images/circle.svg';
import GradientText from '../../assets/images/text-gradient.png';

import './banner.styles.scss';

const Banner = () => (
  <div className="banner">
    <div className="bannerImage">
      <div className="bannerImage-circle">
        <Circle />
      </div>
      <div className="bannerImage-triangle">
        <Triangle />
      </div>
    </div>
    <div className="bannerText">
      <h1>Top 5</h1>
      <div className="bannerText-image">
        <img src={GradientText} alt="Web Design" />
      </div>
      <h1>Podcasts</h1>
    </div>
  </div>
);

export default Banner;
