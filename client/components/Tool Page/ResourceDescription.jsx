import {React, useState, useRef, useEffect} from 'react'
import { useDisableBodyScroll } from './useDisableBodyScroll'

function ResourceDescription({visibility = false, setVisibility = "", concept = "", description = ""}) {

  const descriptionRef = useRef();
  // sets visibility for the description container
  function checkVisibility(visibility){
    if (visibility) {
      return 'concept-description-container'
    } else {
      return 'unvisible'
    }
  }

  let containerCSS = checkVisibility(visibility);

  // removes the overlay and description visibility to false.
  useEffect(() => {
    let handler = (e) => {
      if(!descriptionRef.current.contains(e.target)) {
        setVisibility(false);
      }
    }

    document.addEventListener("mousedown", handler);

    return () => {
      document.removeEventListener("mousedown", handler);
    };
  });

  useDisableBodyScroll(visibility)

  return (
    <>

    {/* if true, display overlay */}
    <div className={visibility ? 'overlay' : 'unvisible'}></div>

    {/* if container is active display the container */}
    <div className={containerCSS} ref={descriptionRef}>
      
      <p className='concept-description-title'>{concept}</p>

      <p>{description}</p>

      <hr/>

      <ul className='concept-links'>
        <li> 

          <p className='link-title'>Title: </p>

          <a className='link' href="https://google.com"> Link </a>

        </li>
      </ul>

    </div>

    </>
  )
}

export default ResourceDescription