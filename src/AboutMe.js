import React from 'react'
import profilePic from './components/ProfilePic.jpg';

const AboutMe = () => {
    return (
    <div className='container'>
        <div className = 'about-me-section'>
            <p>As a Junior Developer with a passion for planning, sketching, and designing applications, I thrive on bringing ideas to life through clean and efficient code. My background in animation during university sharpened my attention to detail, enabling me to spot mistakes and find opportunities for improvement, as well as learned Adobe software such as Photoshop, Illustrator and After Effects. This experience, combined with my proficiency in tools like TypeScript, React, CSS, Figma and Sketch allows me to build user-centric, intuitive applications.

            I am always seeking to learn and adapt, whether it's improving the user experience, optimizing performance, or collaborating with teams to bring innovative solutions. I'm driven by the belief that technology should evolve to meet user needs, and I aim to build products that make a difference.</p>
        </div>
        <div className='profilePic'>
            <img src={profilePic} alt="a profile pic" className='profilePic' />
        </div>
    </div>
        
    )
}

export default AboutMe