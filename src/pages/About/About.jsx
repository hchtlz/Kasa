import Collapse from '../../components/Collapse/Collapse';
import AboutBanner from '../../components/AboutBanner/AboutBanner';
import aboutData from '../../datas/about.json';

export default function About() {
  return (
    <div className="about">
      <AboutBanner />
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
