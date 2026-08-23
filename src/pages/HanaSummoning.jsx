import { useState } from 'react'
import Navigation from '../components/Navigation'
import PageHeader from '../components/PageHeader'
import PhotoPlaceholder from '../components/PhotoPlaceholder'
import WashiTape from '../components/WashiTape'
import { hanaSummoning } from '../data/scrapbookData'
import '../styles/video.css'
import '../styles/video-fallback.css'
import '../styles/asset-polish.css'

function HanaSummoning({ onPrevious, onNext }) {
  const [activeStep, setActiveStep] = useState(0)
  const isComplete = activeStep >= hanaSummoning.ritualSteps.length

  const revealNextStep = () => {
    setActiveStep((currentStep) => Math.min(currentStep + 1, hanaSummoning.ritualSteps.length))
  }

  const replayRitual = () => {
    setActiveStep(0)
  }

  return (
    <main className="inside-page ritual-page page-enter">
      <PageHeader chapter="chapter six" title={hanaSummoning.title} subtitle={hanaSummoning.subtitle} doodle="heart" />
      <div className="ritual-doodles" aria-hidden="true">✦　♡　☻　〰　✧</div>
      <section className="ritual-layout">
        <div className="ritual-sequence" aria-label="Hana summoning ritual">
          {hanaSummoning.ritualSteps.map((step, index) => (
            <div className={`ritual-step ${index <= activeStep ? 'is-visible' : ''}`} key={step.text}>
              <button type="button" onClick={index === activeStep ? revealNextStep : undefined} disabled={index !== activeStep}>
                <span>{step.text}</span><b>{step.doodle}</b>
              </button>
              {index < hanaSummoning.ritualSteps.length - 1 && <i aria-hidden="true">↓</i>}
            </div>
          ))}
          <div className={`summoning-complete ${isComplete ? 'is-visible' : ''}`}>
            <strong>✨ SUMMONING COMPLETE ✨</strong>
            <span>approximately 0.2 seconds later...</span>
            <b>SHE HAS RETURNED.</b>
          </div>
          <button type="button" className="replay-ritual" onClick={replayRitual}>perform ritual again ♡</button>
        </div>
        <aside className="ritual-evidence">
          {hanaSummoning.screenshots.map((screenshot) => <div className="evidence-item" key={screenshot.caption} style={{ '--rotation': `${screenshot.rotation}deg` }}><PhotoPlaceholder photo={screenshot} /><span>{screenshot.caption}</span><em>{screenshot.note}</em></div>)}
        </aside>
      </section>
      <div className="ritual-bottom-note"><WashiTape /><span>{hanaSummoning.bottomNote}</span></div>
      <div className="ritual-annotation">she always comes back eventually 😭</div>
      <Navigation previousLabel="← little moments" nextLabel="the letter →" onPrevious={onPrevious} onNext={onNext} />
    </main>
  )
}

export default HanaSummoning