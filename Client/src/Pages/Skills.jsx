import React from 'react';
import html_logo from '../assets/html.png';
import css_logo from '../assets/css.png';
import js_logo from '../assets/download.png';

// Separate component for skill items - single responsibility
const SkillItem = ({ logo, name }) => (
  <div className="skill-item flex items-center gap-4 mr-8">
    <img className="logos" src={logo} alt={`${name} logo`} />
    <span className="font-bold">{name}</span>
  </div>
);

// Reusable marquee group component to avoid duplication
const MarqueeGroup = ({ skills, ariaHidden = false }) => (
  <div className="marquee-group" aria-hidden={ariaHidden}>
    {skills.map((skill, index) => (
      <SkillItem key={index} logo={skill.logo} name={skill.name} />
    ))}
  </div>
);

function Skills({ title, skill1, skill2, languages = [] }) {
  // Define skills data structure - easier to maintain and extend
  const skillsData = [
    { logo: html_logo, name: languages[0] || 'HTML' },
    { logo: css_logo, name: languages[1] || 'CSS' },
    { logo: js_logo, name: languages[2] || 'JavaScript' }
  ];

  return (
    <div className="table border w-98 mt-5 ml-3">
      <h1 className="text-center mt-2 font-bold">{title}</h1>
      
      <hr />
      
      {/* Skills list section */}
      {(skill1 || skill2) && (
        <div className="flex justify-between ml-5 mr-5 mt-5">
          {skill1 && <span className="skills-list">{skill1}</span>}
          {skill2 && <span className="skills-list">{skill2}</span>}
        </div>
      )}
      
      {/* Marquee section */}
      <div className="marquee-viewport ml-10 mr-10 mt-5 mb-5">
        <div className="marquee-track">
          {/* Original group */}
          <MarqueeGroup skills={skillsData} />
          
          {/* Duplicate group for seamless looping */}
          <MarqueeGroup skills={skillsData} ariaHidden={true} />
        </div>
      </div>
    </div>
  );
}

export default Skills;