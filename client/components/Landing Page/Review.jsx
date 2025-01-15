import React from 'react'

function Review({name = "", review = "", userPic = ""}) {
  return (
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