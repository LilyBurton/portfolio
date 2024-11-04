import React from 'react';

const Nav = ({ scrollToSection, aboutMeRef, projectsRef, contactsRef }) => {
  return (
    <div className='nav-bar'>
      <button onClick={() => scrollToSection(aboutMeRef)} className="link">About Me</button>
      <button onClick={() => scrollToSection(projectsRef)} className="link">Projects</button>
      <button onClick={() => scrollToSection(contactsRef)} className="link">Contacts</button>
    </div>
  );
};

export default Nav;
