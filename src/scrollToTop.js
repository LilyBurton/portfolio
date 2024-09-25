import React, { useState, useEffect } from 'react'
import { FaAngleDoubleUp } from "react-icons/fa";

const ScrollToTop = () => {
    const [scrollTop, setScrollTop] = useState(false)

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 300) {
                setScrollTop(true)
            } else {
                setScrollTop(false)
            }
        })
    }, [])

    const scrollingToTop = (elementRef) => {
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        })
      }

      return (
        <div>
            {scrollTop && <FaAngleDoubleUp className='top-btn-position top-btn-styling' onClick={scrollingToTop} />}
        </div>
        
      )
}

export default ScrollToTop