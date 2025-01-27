

function Review({name = "", review = "", userPic = ""}) {
  return (

    // This will serve as a container for the rivew that will be displayed in the carousel
    <div>

        <div className='container d-block'>

            <div className='reviewContainer'>

              <img className='userPictureReview' src={userPic}></img>
            
              <p className='contentReview'> {review} </p>

              <p className='userNameReview'> {name} </p>

            </div>

        </div>

    </div>
  )
}

export default Review