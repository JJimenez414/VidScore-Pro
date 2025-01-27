import VideoConcepts from './VideoConcepts'

function MarketingConcepts() {

  let concepts = {
    'Video Length' : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi velit elit, eleifend non vulputate vel, luctus eget leo. Praesent a tortor consectetur orci tempor viverra. Nunc nec tristique libero. Ut sit amet facilisis neque. Pellentesque ullamcorper tortor mi, in scelerisque ligula vulputate ut. Aliquam erat volutpat. Duis egestas et lectus eget euismod. Donec aliquam efficitur libero, sed mattis risus pulvinar id. Ut tortor nisl, condimentum eu neque eu, facilisis semper odio. Vivamus dictum urna sed cursus pharetra. Integer quis mattis mauris. In in erat non leo interdum imperdiet. Vivamus diam tortor, ultrices id scelerisque quis, luctus nec velit.',
    'Aliquam feugiat' : 'Maecenas velit ligula, porta non mi eu, tempor consequat arcu. Suspendisse et augue lectus. Phasellus placerat tincidunt velit ac varius. Duis sagittis lacus ac lacus vulputate, at lacinia nisi ornare. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Phasellus fermentum dolor ac sagittis varius. Nullam condimentum ut turpis eget tempus. Vivamus eget ex ac turpis auctor porta a tristique lacus. Pellentesque turpis elit, fermentum vel mauris sit amet, varius laoreet lectus. Integer eleifend eu sem sit amet facilisis. Nam porttitor id dolor non ornare.'
  };

  return (

    // container that holds the resources
    <div className='video-resource'>
        
        {/* title of the continer */}
        <p className='font-caveat video-resource-title'> Marketing Concepts </p>
        
        {/* displays the list of concepts. */}
        <VideoConcepts concepts = {concepts} />

    </div>
  )
}

export default MarketingConcepts