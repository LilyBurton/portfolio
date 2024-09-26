import React from 'react'
import myImage from './components/My ProfilePic.jpeg'

const Header = () => {
    return (
        <div className='image-container'>
            <img src={myImage} alt="My Profile Pic" />
        </div>
    )
}

export default Header;