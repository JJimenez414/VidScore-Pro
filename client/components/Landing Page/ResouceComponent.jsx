import React from 'react'
import ScoreGrid from './ScoreGrid'
import ConceptsGrid from './ConceptsGrid'
import ResourcesGrid from './ResourcesGrid'
import ReviewsComponent from './ReviewsComponent'
function ResouceComponent() {
  return (

    <div className='component'> 

        <div className='resourceComponent'>

            <ScoreGrid />
            <ConceptsGrid />
            <ResourcesGrid />
            
        </div>

    </div>
  )
}

export default ResouceComponent