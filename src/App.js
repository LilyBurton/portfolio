import { useRef } from 'react';
import ScrollToTop from './scrollToTop'
import './App.css';

function App() {
  const aboutMe = useRef(null);
  const projects = useRef(null);
  const contacts = useRef(null);

  const scrollToSection = (elementRef) => {
    window.scrollTo({
      top: elementRef.current.offsetTop,
      behaviour: 'smooth'
    })
  }
  return (
    <div className="App">
      <ScrollToTop />
      <div className='main'>
        <ul>
          <li onClick={() => scrollToSection(aboutMe)} className='link'>About Me</li>
          <li onClick={() => scrollToSection(projects)} className='link'>Projects</li>
          <li onClick={() => scrollToSection(contacts)} className='link'>Contact Me</li>
        </ul>
      </div>
      <div ref={aboutMe} className='aboutMe'>
        <h3>About Me</h3>
      </div>
      <div ref={projects} className='projects'>
        <h3>Projects</h3>
      </div>
      <div ref={contacts} className='contacts'>
        <h3>Contacts</h3>
      </div>
    </div>
  );
}

export default App;
