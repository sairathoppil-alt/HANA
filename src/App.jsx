import { useEffect, useState } from 'react'

import Cover from './pages/Cover'
import HowItStarted from './pages/HowItStarted'
import CollegeYearOne from './pages/CollegeYearOne'
import CollegeYearTwo from './pages/CollegeYearTwo'
import CameraRoll from './pages/CameraRoll'
import VideoMoments from './pages/VideoMoments'
import SurprisePage from './pages/SurprisePage'
import HanaTimeline from './pages/HanaTimeline'
import HanaSummoning from './pages/HanaSummoning'
import Letter from './pages/Letter'
import BirthdayReveal from './pages/BirthdayReveal'
import ScrapbookMusic from './components/ScrapbookMusic'
import BirthdayConfetti from './components/BirthdayConfetti'

import './App.css'

const routes = {
  '/': 'cover',
  '/how-it-started': 'story',
  '/college-year-one': 'yearOne',
  '/college-year-two': 'yearTwo',
  '/camera-roll': 'camera',
  '/little-moments': 'videos',

  // Secret surprise gate
  '/hana-surprise': 'surprise',

  // Timeline after the surprise
  '/hana-through-the-years': 'hanaLife',

  '/hana-summoning-ritual': 'ritual',
  '/the-letter': 'letter',
  '/birthday': 'birthday'
}

function App() {
  const [page, setPage] = useState(
    routes[window.location.pathname] || 'cover'
  )

  useEffect(() => {
    const handlePopState = () => {
      const nextPage =
        routes[window.location.pathname] || 'cover'

      setPage(nextPage)

      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      })
    }

    window.addEventListener('popstate', handlePopState)

    return () => {
      window.removeEventListener('popstate', handlePopState)
    }
  }, [])

  const goTo = (nextPage) => {
    const path =
      Object.entries(routes).find(
        ([, value]) => value === nextPage
      )?.[0] || '/'

    window.history.pushState({}, '', path)

    setPage(nextPage)

    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  return (
    <div className="scrapbook-app">
      <ScrapbookMusic />

      <header className="top-bar">

        <button
          type="button"
          className="brand"
          onClick={() => goTo('cover')}
        >
          our story <span>♡</span>
        </button>

        <div
          className="chapter-tabs"
          aria-label="Scrapbook chapters"
        >

          <button
            type="button"
            className={page === 'cover' ? 'active' : ''}
            onClick={() => goTo('cover')}
          >
            <b>01</b> beginning
          </button>

          <button
            type="button"
            className={page === 'story' ? 'active' : ''}
            onClick={() => goTo('story')}
          >
            <b>02</b> our story
          </button>

          <button
            type="button"
            className={page === 'yearOne' ? 'active' : ''}
            onClick={() => goTo('yearOne')}
          >
            <b>03</b> year one
          </button>

          <button
            type="button"
            className={page === 'yearTwo' ? 'active' : ''}
            onClick={() => goTo('yearTwo')}
          >
            <b>04</b> year two
          </button>

          <button
            type="button"
            className={page === 'camera' ? 'active' : ''}
            onClick={() => goTo('camera')}
          >
            <b>05</b> memories
          </button>

          <button
            type="button"
            className={page === 'videos' ? 'active' : ''}
            onClick={() => goTo('videos')}
          >
            <b>06</b> moments
          </button>

          {/* 
            SURPRISE GATE

            This is now visible in the navigation.
            Clicking it does NOT skip the surprise.
            It opens the runaway YES button page.
          */}
          <button
            type="button"
            className={page === 'surprise' ? 'active' : ''}
            onClick={() => goTo('surprise')}
          >
            <b>07</b> surprise
          </button>

          <button
            type="button"
            className={page === 'ritual' ? 'active' : ''}
            onClick={() => goTo('ritual')}
          >
            <b>08</b> ritual
          </button>

          <button
            type="button"
            className={page === 'letter' ? 'active' : ''}
            onClick={() => goTo('letter')}
          >
            <b>09</b> letter
          </button>

          <button
            type="button"
            className={page === 'birthday' ? 'active' : ''}
            onClick={() => goTo('birthday')}
          >
            <b>10</b> birthday
          </button>

        </div>

        <span className="recipient">
          for hana <b>♡</b>
        </span>

      </header>

      <div className="paper-spread">

        {/* COVER */}

        {page === 'cover' && (
          <Cover
            onOpen={() => goTo('story')}
          />
        )}

        {/* OUR STORY */}

        {page === 'story' && (
          <HowItStarted
            onCover={() => goTo('cover')}
            onNext={() => goTo('yearOne')}
          />
        )}

        {/* COLLEGE YEAR ONE */}

        {page === 'yearOne' && (
          <CollegeYearOne
            onPrevious={() => goTo('story')}
            onNext={() => goTo('yearTwo')}
          />
        )}

        {/* COLLEGE YEAR TWO */}

        {page === 'yearTwo' && (
          <CollegeYearTwo
            onPrevious={() => goTo('yearOne')}
            onNext={() => goTo('camera')}
          />
        )}

        {/* CAMERA ROLL */}

        {page === 'camera' && (
          <CameraRoll
            onPrevious={() => goTo('yearTwo')}
            onNext={() => goTo('videos')}
          />
        )}

        {/* LITTLE MOMENTS */}

        {page === 'videos' && (
          <VideoMoments
            onPrevious={() => goTo('camera')}
            onNext={() => goTo('surprise')}
          />
        )}

        {/* =================================================
            SURPRISE PAGE
            ================================================= */}

        {page === 'surprise' && (
          <SurprisePage
            onSurprise={() => goTo('hanaLife')}
          />
        )}

        {/* =================================================
            HANA THROUGH THE YEARS
            ================================================= */}

        {page === 'hanaLife' && (
          <HanaTimeline
            onPrevious={() => goTo('surprise')}
            onNext={() => goTo('ritual')}
          />
        )}

        {/* RITUAL */}

        {page === 'ritual' && (
          <HanaSummoning
            onPrevious={() => goTo('hanaLife')}
            onNext={() => goTo('letter')}
          />
        )}

        {/* LETTER */}

        {page === 'letter' && (
          <Letter
            onPrevious={() => goTo('ritual')}
            onNext={() => goTo('birthday')}
          />
        )}

        {/* BIRTHDAY */}

        {page === 'birthday' && (
  <>
    <BirthdayConfetti />

    <BirthdayReveal
      onPrevious={() => goTo('letter')}
    />
  </>
)}

      </div>

    </div>
  )
}

export default App