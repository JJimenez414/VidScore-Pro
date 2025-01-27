
function Video({videoSrc = "", videoType = ""}) {
  return (

      // Iframe can display a YouTube link, you just have to replace it.
      <iframe width="100%" height="100%" src="https://www.youtube.com/embed/QkZxoko_HC0?si=TPlQFqPQb-4P-Pyj" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

  )
}

export default Video