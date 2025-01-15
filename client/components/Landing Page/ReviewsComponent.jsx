import React from 'react'
import Review from './Review'
import userPic from '../../src/assets/me.jpg'
function ReviewsComponent() {
  return (
    <div className='component'>
        <div className='carouselContainer'>
            <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <Review name="Jose Jimenez" review="ustomer Reviews should give customers genuine product feedback from fellow shoppers. We have a zero tolerance policy for any review designed to mislead" userPic={userPic}/>
                    </div>
                    <div className="carousel-item">
                        <Review name="Jose Jimenez" review="ustomer Reviews should give customers genuine product feedback from fellow shoppers. We have a zero tolerance policy for any review designed to mislead" userPic={userPic}/>
                    </div>
                    <div className="carousel-item">
                        <Review name="Jose Jimenez" review="ustomer Reviews should give customers genuine product feedback from fellow shoppers. We have a zero tolerance policy for any review designed to mislead" userPic={userPic}/>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    </div>
    )
}

export default ReviewsComponent