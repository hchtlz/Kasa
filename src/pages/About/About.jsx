import "./About.css";
import React from "react";
import Collapse from '../../components/Collapse/Collapse';
import Banner from '../../components/Banner/Banner';
import aboutData from '../../datas/about.json';

export default function About() {
  return (
    <div className="about">
      <Banner image={"src/assets/images/banner-about.png"}/>
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
