import "./About.css";
import React from "react";
import Collapse from '../../components/Collapse/Collapse';
import Banner from '../../components/Banner/Banner';
import aboutData from '../../datas/about.json';
import imageBannerAbout from "../../assets/images/banner-about.png";

export default function About() {
  return (
    <div className="about">
      <Banner image={ imageBannerAbout } />
      <div className="about__content">
        {aboutData.map((aboutItem, index) => (
          <Collapse key={index} title={aboutItem.aboutTitle}>
            {aboutItem.aboutText}
          </Collapse>
        ))}
      </div>
    </div>
  );
}
