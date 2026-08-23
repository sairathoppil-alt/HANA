import { useState } from 'react'
import Cover from './pages/Cover'
import HowItStarted from './pages/HowItStarted'
import CollegeYearOne from './pages/CollegeYearOne'
import CollegeYearTwo from './pages/CollegeYearTwo'
import CameraRoll from './pages/CameraRoll'
import VideoMoments from './pages/VideoMoments'
import HanaSummoning from './pages/HanaSummoning'
import Letter from './pages/Letter'
import BirthdayReveal from './pages/BirthdayReveal'
import './App.css'

const routes = {
  '/': 'cover',
  '/how-it-started': 'story',
  '/college-year-one': 'yearOne',
  '/college-year-two': 'yearTwo',
  '/camera-roll': 'camera',
  '/little-moments': 'videos',
  '/hana-summoning-ritual': 'ritual',
  '/the-letter': 'letter',
  '/birthday': 'birthday'
}

function App() {
  const [page, setPage] = useState(routes[window.location.pathname] || 'cover')

  const goTo = (nextPage) => {
    const path = Object.entries(routes).find(([, value]) => value === nextPage)?.[0] || '/'
    window.history.pushState({}, '', path)
    setPage(nextPage)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div className="scrapbook-app">
      <header className="top-bar">
        <button type="button" className="brand" onClick={() => goTo('cover')}>our story <span>♡</span></button>
        <div className="chapter-tabs" aria-label="Scrapbook chapters">
          <button type="button" className={page === 'cover' ? 'active' : ''} onClick={() => goTo('cover')}><b>01</b> beginning</button>
          <button type="button" className={page === 'story' ? 'active' : ''} onClick={() => goTo('story')}><b>02</b> our story</button>
          <button type="button" className={page === 'yearOne' ? 'active' : ''} onClick={() => goTo('yearOne')}><b>03</b> year one</button>
          <button type="button" className={page === 'yearTwo' ? 'active' : ''} onClick={() => goTo('yearTwo')}><b>04</b> year two</button>
          <button type="button" className={page === 'camera' ? 'active' : ''} onClick={() => goTo('camera')}><b>05</b> memories</button>
          <button type="button" className={page === 'videos' ? 'active' : ''} onClick={() => goTo('videos')}><b>06</b> moments</button>
          <button type="button" className={page === 'ritual' ? 'active' : ''} onClick={() => goTo('ritual')}><b>07</b> ritual</button>
          <button type="button" className={page === 'letter' ? 'active' : ''} onClick={() => goTo('letter')}><b>08</b> letter</button>
          <button type="button" className={page === 'birthday' ? 'active' : ''} onClick={() => goTo('birthday')}><b>09</b> birthday</button>
        </div>
        <span className="recipient">for hana <b>♡</b></span>
      </header>
      <div className="paper-spread">
        {page === 'cover' && <Cover onOpen={() => goTo('story')} />}
        {page === 'story' && <HowItStarted onCover={() => goTo('cover')} onNext={() => goTo('yearOne')} />}
        {page === 'yearOne' && <CollegeYearOne onPrevious={() => goTo('story')} onNext={() => goTo('yearTwo')} />}
        {page === 'yearTwo' && <CollegeYearTwo onPrevious={() => goTo('yearOne')} onNext={() => goTo('camera')} />}
        {page === 'camera' && <CameraRoll onPrevious={() => goTo('yearTwo')} onNext={() => goTo('videos')} />}
        {page === 'videos' && <VideoMoments onPrevious={() => goTo('camera')} onNext={() => goTo('ritual')} />}
        {page === 'ritual' && <HanaSummoning onPrevious={() => goTo('videos')} onNext={() => goTo('letter')} />}
        {page === 'letter' && <Letter onPrevious={() => goTo('ritual')} onNext={() => goTo('birthday')} />}
        {page === 'birthday' && <BirthdayReveal onPrevious={() => goTo('letter')} />}
      </div>
    </div>
  )
}

export default App
