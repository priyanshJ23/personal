// TODO Add a couple lines about each project;
import hungry from '../components/fooddeliveryinsoutheastasia.jpg';
import movie from '../components/dsa.png';
import task from '../components/download.jpeg';
const data = [
  {
    title: 'Hungry Hub',
    subtitle: 'Academic Project',
    image : {hungry},
    url : ' ',
    date: '2023-6-20',
    desc:
      'Developed a robust and user-friendly task management web application using the MERN (MongoDB,'
      + ' Express.js, React, Node.js stack. This project allows users to efficiently organize and track tasks, enhancing'
      + 'personal and professional productivity.'
      
  },
  {
    title: 'Task',
    subtitle: 'MERN STACK PROJECT',
    image : {task},
    date: '2023-6-20',
    desc:
      'Conceptualized, designed, and developed the ”Hungry Hub” food delivery application, offering a seamless'
     + 'platform for local residents to conveniently order their favorite meals from nearby restaurants and enjoy'
     + 'hassle-free home delivery'
  },
  {
    title: 'Movie Recommender',
    subtitle: 'Made using React.js',
    image : {movie},
    date: '2023-6-20',
    desc:
     'Developed a comprehensive movie recommendation application that not only suggests personalized movie'
    + 'choices based on user preferences but also provides access to a vast database of user and critic reviews.'
  },
];

export default data;
