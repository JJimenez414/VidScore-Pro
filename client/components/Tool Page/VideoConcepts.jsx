import Concept from './Concept'

function VideoConcepts({concepts}) {

  return (

    // receives a list and makes a concept component of each of the iterms.
    <div className='video-concept'>
      
      {/* iterates through the objects and maps them based on their concept and description to a Concept component. */}
      {Object.entries(concepts).map(([concept, description], index) => (

        <Concept key={index} concept={concept} description={description}/>

      ))}

    </div>
  )   
}

export default VideoConcepts