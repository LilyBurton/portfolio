import React, { useState } from 'react'
import Groceries from './components/Groceries.png'
import GroceriesVideo from './components/GroceriesVideo.mp4';

const Projects = () => {
    const [showVideo, setShowVideo] = useState(false);

    const handleImageClick = () => {
        setShowVideo(true)
    }
    return(
    <div className='project-container'>
        {!showVideo ? (
            <img className="grocery-screenshot" 
            src={Groceries} 
            alt='Screenshot of Grocery list' 
            onClick={handleImageClick}
            />
        ) : (
            <div className='video-container'>
                <video width='600' controls autoPlay onClick={() => setShowVideo(false)}>
                    <source src={GroceriesVideo} type='video/mp4' />
                </video>
            </div>
        )}   
    </div>
    )
}

export default Projects