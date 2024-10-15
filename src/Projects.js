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
                                <p className='Paragraph'>I used React and CSS to set up the application where you can check and cross out the items, add new items, delete items and find the object on the list by using the search bar. I also use json database so the user can keep the changes on the list.</p>
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
                                <p className='paragraph'>The kanban board has been made through React where I have to import 'Draggable' and 'Droppable' from 'react-beautiful-dnd' so the users would be able to drag and drop tasks between columns. I used socket.io so it will be able to save data under the id of a user's username.</p>
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
                                <p className='paragraph'>Flavour Finder is a recipe generator where the user can generate recipes through ingredients, nationality, meal type and dietary requirements. We want to make it user friendly as possible for both users and non users where they can still try out the recipes generator before signing up and when they do they will have the ability to save the recipes. We use Mongo.db to be able to save the users details in mongo.db and fetch data from the api to be able to generate different recipes. What I love about this generator is it makes the dietry mandatory. For example, if you dietary is vegan but you put milk as an ingredient it will make sure to add a vegan friendly milk within the recipe.</p>
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
                                <p className='paragraph'>The React Blog was made from React where I was focusing on using the CRUD method so the users will be able to create, read, update and delete posts along with using the json database serve to be able to keep the changes. I was also trying out axios to understand fetching data from the json.db.</p>
                            </div>
                        )}
                    </>
                )}
            </div>
            <p className='click-instruction'>CLICK on the image to start a video</p>
        </div>
    );
};

export default Projects;





