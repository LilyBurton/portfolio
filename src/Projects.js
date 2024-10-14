import React, { useState } from 'react';
import Groceries from './components/Groceries.png';
import GroceriesVideo from './components/GroceriesVideo.mp4';
import KanbanBoard from './components/KanbanBoard.png';
import KanbanBoardVideo from './components/KanbanBoardVideo.mp4';
import FlavourFinderScreenshot from './components/FlavourFinderScreenshot.png';
import FlavourFinderVideo from './components/FlavourFinderVideo.mp4';
import ReactBlog from './components/ReactBlog.png';
import ReactBlogVideo from './components/ReactBlogVideo.mp4';

const Projects = () => {
    const [activeVideo, setActiveVideo] = useState(null);

    const handleImageClick = (videoType) => {
        setActiveVideo(videoType);
    };

    const handleVideoClick = () => {
        setActiveVideo(null);
    };

    return (
        <div className='project-container'>
            <div className='top-projects'>
                {/* Grocery Project */}
                {activeVideo !== 'kanban' && activeVideo !== 'flavourfinder' && activeVideo !== 'react-blog' && (
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
                {activeVideo !== 'grocery' && activeVideo !== 'flavourfinder' && activeVideo !== 'react-blog' && (
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
            </div>

            <div className='bottom-projects'>
                {/* Flavour Finder Project */}
                {activeVideo !== 'grocery' && activeVideo !== 'kanban' && activeVideo !== 'react-blog' && (
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

                {/* React Blog */}
                {activeVideo !== 'grocery' && activeVideo !== 'kanban' && activeVideo !== 'flavourfinder' && (
                    <>
                        {!activeVideo ? (
                            <img
                                className='react-blog-screenshot'
                                src={ReactBlog}
                                alt='Screenshot of React Blog'
                                onClick={() => handleImageClick('react-blog')}
                            />
                        ) : null}

                        {activeVideo === 'react-blog' && (
                            <div className='react-blog-video'>
                                <video
                                    width='600'
                                    controls
                                    autoPlay
                                    onClick={handleVideoClick}
                                >
                                    <source src={ReactBlogVideo} type='video/mp4' />
                                    Your browser does not support the video tag.
                                </video>
                            </div>
                        )}
                    </>
                )}
            </div>
        </div>
    );
};

export default Projects;





