import Doodle from '../components/Doodle'
import Polaroid from '../components/Polaroid'
import WashiTape from '../components/WashiTape'
import { scrapbookImages } from '../data/scrapbookData'
import '../styles/asset-polish.css'

function Cover({ onOpen }) {
  return (
    <main className="cover-scene page-enter">
      <div className="cover-scrap scrap-top">a little something<br />for you</div>
      <Doodle type="flower" />
      <span className="cover-heart heart-one">♡</span>
      <span className="cover-heart heart-two">♡</span>
      <span className="cover-star star-one">✦</span>
      <span className="cover-star star-two">✧</span>
      <div className="ribbon" aria-hidden="true"><span /><span /></div>

      <section className="cover-paper" aria-labelledby="cover-title">
        <div className="cover-kicker">volume one · 2023 — forever</div>
        <div className="cover-flower" aria-hidden="true">✿</div>
        <h1 id="cover-title">for my<br />favorite person <span>♡</span></h1>
        <p className="cover-subtitle">a little collection of us</p>
        <Polaroid photo={{ src: scrapbookImages.cover, caption: 'love of my life', rotation: 0 }} />
        <p className="cover-years">2–3 years of us</p>
        <p className="cover-note">and somehow, there are still<br />a million memories left to make ♡</p>
        <button type="button" className="paper-button" onClick={onOpen}>
          <WashiTape />
          open scrapbook <span>→</span>
        </button>
        <div className="cover-footer">made with all my love <span>✦</span></div>
      </section>
    </main>
  )
}

export default Cover
