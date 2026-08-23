import Doodle from '../components/Doodle'
import Navigation from '../components/Navigation'
import PageHeader from '../components/PageHeader'
import PhotoCollage from '../components/PhotoCollage'
import WashiTape from '../components/WashiTape'
import { collegeYearOne } from '../data/scrapbookData'

function CollegeYearOne({ onPrevious, onNext }) {
  return (
    <main className="inside-page album-page year-one-page page-enter">
      <PageHeader chapter="chapter two" title="college year one" subtitle="and then life got a little more interesting..." doodle="notebook" />
      <section className="album-intro">
        <div className="torn-note"><WashiTape /><span className="scrap-label">little memories ♡</span>{collegeYearOne.memories.map((memory) => <p key={memory}>{memory}</p>)}</div>
        <div className="album-copy"><span className="scrap-label">our first college era ♡</span><p>New place, new people, new routines...</p><p>and somehow, having you there made everything feel a little less new.</p><p>Looking back, I think this was when we started collecting the kind of memories we'd still be talking about years later.</p></div>
      </section>
      <PhotoCollage photos={collegeYearOne.photos} className="year-one-collage" />
      <div className="album-doodles" aria-hidden="true"><Doodle type="pencil" /><Doodle type="flower" /><Doodle type="heart" /></div>
      <Navigation previousLabel="← how it all started" nextLabel="college year two →" onPrevious={onPrevious} onNext={onNext} />
    </main>
  )
}

export default CollegeYearOne
