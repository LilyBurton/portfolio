import { useRef } from 'react';
import ScrollToTop from './scrollToTop';
import Header from './Header';
import Nav from './nav';
import AboutMe from './AboutMe';
import Projects from './Projects';
import Contacts from './Contacts';
import tigerlillie from './components/tigerlillie.jpeg'
import './App.css';

function App() {
  const aboutMe = useRef(null);
  const projects = useRef(null);
  const contacts = useRef(null);

  const scrollToSection = (elementRef) => {
    window.scrollTo({
      top: elementRef.current.offsetTop,
      behavior: 'smooth'
    });
  };

  return (
    <div className="App">
      <ScrollToTop />
      <div className='main'>
        <img src={tigerlillie} alt='a tiger lillie' className='tiger-lillie' />
        <Nav 
          scrollToSection={scrollToSection} 
          aboutMeRef={aboutMe} 
          projectsRef={projects} 
          contactsRef={contacts} 
        />
        <Header />
      </div>
      <div ref={aboutMe} className='aboutMe'>
        <h3>About Me</h3>
        <AboutMe />
      </div>
      <div ref={projects} className='projects'>
        <h3>Projects</h3>
        <Projects />
      </div>
      <div ref={contacts} className='contacts'>
        <h3>Contacts</h3>
          <Contacts />
        </div>
        
        <img src={tigerlillie} alt='a tiger lillie' className='tiger-lillie01' />
        

      </div>
  );
}

export default App;

