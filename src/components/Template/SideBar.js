import React from 'react';
import { Link } from 'react-router-dom';
import myimg from '../1234.png';
import ContactIcons from '../Contact/ContactIcons';



const SideBar = () => (
  <section id="sidebar">
    <section id="intro">
      
        <img src={myimg} style={{borderRadius: '50%', width: '50%'}} alt="Avatar" />
     
      <header>
        <h2>Priyansh Jain</h2>
        <p><a href="mailto:priyanshjain.mudit@gmail.com">priyanshjain.mudit@gmail.com</a></p>
      </header>
    </section>

    <section className="blurb">
      <h2>About</h2>
      <p>Hi, I&apos;m Priyansh. I am a Final Year B.Tech Student, in VIT vellore.
      I am a passionate Web developer and a Competitive Programmer.
      </p>
      <ul className="actions">
        <li>
          {!window.location.pathname.includes('/resume') ? <Link to="/resume" className="button">Resume</Link> : <Link to="/about" className="button">About Me</Link>}
        </li>
      </ul>
    </section>

    <section id="footer">
      <ContactIcons />
      <p className="copyright">&copy; Priyansh&apos;Jain</p>
    </section>
  </section>
);

export default SideBar;
