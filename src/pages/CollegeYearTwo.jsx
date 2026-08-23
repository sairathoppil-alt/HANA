import Doodle from '../components/Doodle'
import Navigation from '../components/Navigation'
import PageHeader from '../components/PageHeader'
import PhotoPlaceholder from '../components/PhotoPlaceholder'
import PhotoCollage from '../components/PhotoCollage'
import WashiTape from '../components/WashiTape'
import { collegeYearTwo } from '../data/scrapbookData'

function CollegeYearTwo({ onPrevious, onNext }) {
  const [mainPhoto, ...smallPhotos] = collegeYearTwo.photos
  return (
    <main className="inside-page album-page year-two-page page-enter">
      <PageHeader chapter="chapter three" title="college year two" subtitle="somehow, we're here already..." doodle="heart" />
      <div className="year-two-layout">
        <PhotoPlaceholder photo={mainPhoto} className="central-photo" />
        <PhotoCollage photos={smallPhotos} className="year-two-small-collage" />
        
      </div>
      <article className="sentimental-note"><Doodle type="flower" /><p>Somewhere along the way, you stopped being just someone I knew and became one of the people I automatically look for in every room.</p><p>We've grown, changed, survived stressful days, laughed at completely stupid things, and somehow kept collecting memories along the way.</p><p>And honestly?</p><p>I wouldn't want to have done these years with anyone else.</p><strong>same us, just a little older. ♡</strong></article>
      <Navigation previousLabel="← college year one" nextLabel="camera roll →" onPrevious={onPrevious} onNext={onNext} />
    </main>
  )
}

export default CollegeYearTwo
