import Navigation from '../components/Navigation'
import PageHeader from '../components/PageHeader'
import PhotoCollage from '../components/PhotoCollage'
import WashiTape from '../components/WashiTape'
import { cameraRoll } from '../data/scrapbookData'

function CameraRoll({ onPrevious, onNext }) {
  return (
    <main className="inside-page album-page camera-page page-enter">
      <PageHeader chapter="chapter four" title="camera roll dump" subtitle="proof that we actually have no normal pictures" doodle="calendar" />
      <div className="camera-note camera-note-top"><WashiTape /><span>favorites from the camera roll ♡</span></div>
      <PhotoCollage photos={cameraRoll.photos} className="camera-collage" />
      <div className="camera-note camera-note-bottom"><span>there are approximately 937 more.</span><b>↗</b></div>
      <div className="camera-arrows" aria-hidden="true">↝ &nbsp; ✦ &nbsp; ↗ &nbsp; ♡</div>
      <Navigation previousLabel="← college year two" nextLabel="little moments →" onPrevious={onPrevious} onNext={onNext} />
    </main>
  )
}

export default CameraRoll
