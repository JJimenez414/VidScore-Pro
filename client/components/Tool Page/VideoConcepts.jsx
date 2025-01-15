import Concept from './Concept'

function VideoConcepts({concepts}) {

  return (
    <div className='video-concept'>
        
      {Object.entries(concepts).map(([concept, description], index) => (

        <Concept key={index} concept={concept} description={description}/>

      ))}

    </div>
  )   
}

export default VideoConcepts