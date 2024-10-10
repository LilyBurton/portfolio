import React, { useState } from 'react';
import Groceries from './components/Groceries.png';
import GroceriesVideo from './components/GroceriesVideo.mp4';
import KanbanBoard from './components/KanbanBoard.png';
import KanbanBoardVideo from './components/KanbanBoardVideo.mp4';
import FlavourFinderScreenshot from './components/FlavourFinderScreenshot.png';
import FlavourFinderVideo from './components/FlavourFinderVideo.mp4';

const Projects = () => {
    // State to track which video is currently active
    const [activeVideo, setActiveVideo] = useState(null);

    // Function to handle image clicks and set the active video
    const handleImageClick = (videoType) => {
        setActiveVideo(videoType);
    };

    // Function to handle video click and close the video
    const handleVideoClick = () => {
        setActiveVideo(null);
    };

    return (
        <div className='project-container'>
            {/* Grocery Project */}
            {activeVideo !== 'kanban' && activeVideo !== 'flavourfinder' && (
                <>
                    {!activeVideo ? (
                        <img
                            className="grocery-screenshot"
                            src={Groceries}
                            alt='Screenshot of Grocery list'
                            onClick={() => handleImageClick('grocery')}
                        />
                    ) : null}

                    {activeVideo === 'grocery' && (
                        <div className='video-container'>
                            <video
                                width='600'
                                controls
                                autoPlay
                                onClick={handleVideoClick}
                            >
                                <source src={GroceriesVideo} type='video/mp4' />
                                Your browser does not support the video tag.
                            </video>
                        </div>
                    )}
                </>
            )}

            {/* Kanban Board Project */}
            {activeVideo !== 'grocery' && activeVideo !== 'flavourfinder' && (
                <>
                    {!activeVideo ? (
                        <img
                            className="kanban-screenshot"
                            src={KanbanBoard}
                            alt='Screenshot of Kanban Board'
                            onClick={() => handleImageClick('kanban')}
                        />
                    ) : null}

                    {activeVideo === 'kanban' && (
                        <div className='kanban-video-container'>
                            <video
                                width='600'
                                controls
                                autoPlay
                                onClick={handleVideoClick}
                            >
                                <source src={KanbanBoardVideo} type='video/mp4' />
                                Your browser does not support the video tag.
                            </video>
                        </div>
                    )}
                </>
            )}

            {/* Recipe Generator */}
            {activeVideo !== 'grocery' && activeVideo !== 'kanban' && (
                <>
                    {!activeVideo ? (
                        <img
                            className='flavour-finder-screenshot'
                            src={FlavourFinderScreenshot}
                            alt='Screenshot of FlavourFinder'
                            onClick={() => handleImageClick('flavourfinder')}
                        />
                    ) : null}

                    {activeVideo === 'flavourfinder' && (
                        <div className='flavour-finder-video'>
                            <video
                                width='600'
                                controls
                                autoPlay
                                onClick={handleVideoClick}
                            >
                                <source src={FlavourFinderVideo} type='video/mp4' />
                                Your browser does not support the video tag.
                            </video>
                        </div>
                    )}
                </>
            )}
        </div>
    );
};

export default Projects;

