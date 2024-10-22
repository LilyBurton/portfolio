import React, { useState, useEffect } from 'react';
import { FaAngleDoubleUp } from 'react-icons/fa';

const ScrollToTop = () => {
    const [scrollTop, setScrollTop] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrollTop(window.scrollY > 300);
        };

        window.addEventListener('scroll', handleScroll);

        // Cleanup function to remove the event listener
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const scrollingToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <div>
            {scrollTop && (
                <FaAngleDoubleUp
                    className='top-btn-position top-btn-styling'
                    onClick={scrollingToTop}
                />
            )}
        </div>
    );
};

export default ScrollToTop;
