import Doodle from '../components/Doodle'
import Navigation from '../components/Navigation'
import PageHeader from '../components/PageHeader'
import WashiTape from '../components/WashiTape'
import { letter } from '../data/scrapbookData'
import '../styles/asset-polish.css'

function Letter({ onPrevious, onNext }) {
  return (
    <main className="inside-page letter-page page-enter">
      <PageHeader chapter="chapter seven" title="one last thing..." subtitle="" doodle="flower" />
      <div className="letter-bow" aria-hidden="true">୨୧</div>
      <article className="letter-paper">
        <WashiTape />
        <div className="letter-flower" aria-hidden="true">✿</div>
        <p className="letter-greeting">{letter.greeting}</p>
        <p className="letter-body">{letter.body}</p>
        <p className="letter-signoff">{letter.signoff}</p>
      </article>
      <Doodle type="heart" />
      <Navigation previousLabel="← Hana summoning ritual" nextLabel="birthday →" onPrevious={onPrevious} onNext={onNext} />
    </main>
  )
}

export default Letter
