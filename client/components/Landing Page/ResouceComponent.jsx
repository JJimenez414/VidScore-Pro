
import ScoreGrid from './ScoreGrid'
import ConceptsGrid from './ConceptsGrid'
import ResourcesGrid from './ResourcesGrid'

function ResouceComponent() {
  return (

    <div className='component'> 

        <div className='resourceComponent'>

            {/* Displays the three related resources */}
            <ScoreGrid />
            <ConceptsGrid />
            <ResourcesGrid />
            
        </div>

    </div>
  )
}

export default ResouceComponent