import React from 'react'
import { FaLinkedin, FaGithub } from "react-icons/fa";


const SocialLinks = () => {
    return (
        <div className='social-container'>
            <div className='social-links-icons'>
                <a href='https://www.linkedin.com/in/lily-burton-7a8826a9/' target='_blank' rel="noopener noreferrer">
                    <FaLinkedin className="linkedin-icon" size={100} />
                </a>
                <a href='https://github.com/LilyBurton' target='_blank' rel="noopener noreferrer">
                    <FaGithub className="github-icon" size={100} />
                </a>
            </div>
        </div>
    )
}

export default SocialLinks;