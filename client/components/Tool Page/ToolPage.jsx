import VideoUploadComponent from './VideoUploadComponent'
import VideoResourceComponent from './VideoResourceComponent'

function ToolPage() {
  return (
    <>

      {/* diplays the resources for upload */}
      <VideoUploadComponent/>

      {/* display the resources for concepts and resources. */}
      <VideoResourceComponent />

    </>

  )
}

export default ToolPage