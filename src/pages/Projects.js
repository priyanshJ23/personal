import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';
import hungry from '../components/fooddeliveryinsoutheastasia.jpg';
import movie from '../components/dsa.png';
import task from '../components/download.jpeg';
const Projects = () => (
  <Main
    title="Projects"
    description="Learn about Michael D'Angelo's projects."
  >
      <header>
        <div className="title">
          <h2><Link to="/projects">Projects</Link></h2>
          <p>A selection of projects that I&apos;m not too ashamed of</p>
        </div>
      </header>
      <div className="cell-container">
    <article className="mini-post">
      <header>
        <h3><a href="https://github.com/priyanshJ23/HungryHub">HungryHub</a></h3>
      </header>
      <a href='https://github.com/priyanshJ23/HungryHub' className="image">
        <img src={hungry} alt="HungryHub" />
      </a>
      <div className="description">
        <p>Conceptualized, designed, and developed the ”Hungry Hub” food delivery application, offering a seamless'
       platform for local residents to conveniently order their favorite meals from nearby restaurants and enjoy'
      hassle-free home delivery'</p>
      </div>
    </article>
    <article className="mini-post">
      <header>
        <h3><a href="https://github.com/priyanshJ23/taskmanager">Task Manager</a></h3>
      </header>
      <a href="https://github.com/priyanshJ23/taskmanager" className="image">
        <img src={task} alt="Task Manager" />
      </a>
      <div className="description">
        <p>Developed a robust and user-friendly task management web application using the MERN (MongoDB,'
      Express.js, React, Node.js stack. This project allows users to efficiently organize and track tasks, enhancing'
      personal and professional productivity.'</p>
      </div>
    </article>
    <article className="mini-post">
      <header>
        <h3><a href="https://github.com/priyanshJ23/movieapp">Movie Recommender</a></h3>
      </header>
      <a href="https://github.com/priyanshJ23/movieapp" className="image">
        <img src={movie} alt="Movie" />
      </a>
      <div className="description">
        <p>Developed a comprehensive movie recommendation application that not only suggests personalized movie'
          choices based on user preferences but also provides access to a vast database of user and critic reviews.'</p>
      </div>
    </article>
    </div>
  </Main>
);

export default Projects;
