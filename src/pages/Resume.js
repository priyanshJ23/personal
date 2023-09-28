import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

import Education from '../components/Resume/Education';
import Experience from '../components/Resume/Experience';
import Skills from '../components/Resume/Skills';
import Courses from '../components/Resume/Courses';

import courses from '../data/resume/courses';
import degrees from '../data/resume/degrees';
import work from '../data/resume/work';
import { skills, categories } from '../data/resume/skills';
const linkStyle = {
  margin: "1rem",
  textDecoration: "none",
  color: '#e0b486',
  fontWeight : 'bold',
  backgroundColor : 'black',
  fontSize: '20px'
};
// NOTE: sections are displayed in order defined.
const sections = {
  Education: () => <Education data={degrees} />,
  ExtraCurricular: () => <Experience data={work} />,
  Skills: () => <Skills skills={skills} categories={categories} />,
  Courses: () => <Courses data={courses} />,
};

const Resume = () => (
  <Main
    title="Resume"
    description="Michael D'Angelo's Resume. Smile Identity, Arthena, Matroid, YC, Skeptical Investments, Stanford ICME, Planet, and Facebook."
  >
    <article className="post" id="resume">
      <header>
        <div className="title">
          <h2><Link to="resume">Resume</Link></h2>
          <div className="link-container">
            {Object.keys(sections).map((sec) => (
              <h4 key={sec}>
                <a href={`#${sec.toLowerCase()}`}>{sec}</a>
              </h4>))}
          </div>
        </div>
      </header>
      {Object.entries(sections).map(([name, Section]) => (
        <Section key={name} />
      ))}
      <Link to="https://drive.google.com/drive/folders/1zM6o-LzSVxiBA0XU6Gn88PCDm9Uzk-1l?usp=drive_link" style={linkStyle}>Download Resume</Link>
    </article>
    
  </Main>
);

export default Resume;
