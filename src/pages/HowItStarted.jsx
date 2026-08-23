import Doodle from '../components/Doodle'
import Navigation from '../components/Navigation'
import WashiTape from '../components/WashiTape'
import { story, timeline } from '../data/scrapbookData'

function StoryScrap({ className, children, tape = true }) {
  return <article className={`story-scrap ${className || ''}`}>{tape && <WashiTape />}{children}</article>
}

function HowItStarted({ onCover, onNext }) {
  return (
    <main className="inside-page page-enter">
      <header className="inside-heading">
        <div className="chapter-mark">chapter one <span>♡</span></div>
        <h1>how it all started</h1>
        <p>the beginning of us...</p>
        <Doodle type="flower" />
      </header>

      <article className="opening-note">
        <WashiTape />
        <span className="scrap-label">the very beginning</span>
        <p>{story.opening}</p>
      </article>

      <section className="timeline-section" aria-label="Our friendship timeline">
        <div className="timeline-line" aria-hidden="true" />
        {timeline.map((item, index) => (
          <div className={`timeline-item timeline-item-${index}`} key={item.label}>
            <div className="timeline-dot" />
            <Doodle type={item.doodle} />
            <div className="timeline-copy">
              <span>{item.label}</span>
              <small>{item.caption}</small>
            </div>
          </div>
        ))}
      </section>

      <div className="story-grid">
        <StoryScrap className="impression-scrap">
          <span className="scrap-label">first impression</span>
          <h2>{story.impression.title}</h2>
          <p>{story.impression.text}</p>
          <em>{story.impression.note}</em>
          <span className="scrap-arrow">↗</span>
        </StoryScrap>

        <StoryScrap className="turning-scrap">
          <span className="scrap-label">the turning point</span>
          <h2>{story.turningPoint.title}</h2>
          <p>{story.turningPoint.text}</p>
          <strong>{story.turningPoint.continuation}</strong>
          <Doodle type="pencil" />
        </StoryScrap>

        <StoryScrap className="now-scrap">
          <span className="scrap-label">a tiny realization</span>
          <h2>{story.now.title}</h2>
          <p>{story.now.text}</p>
          <p className="quiet-line">{story.now.quiet}</p>
          <strong className="ending-line">{story.now.ending}</strong>
          <span className="now-hearts">♡ ✦ ♡</span>
        </StoryScrap>
      </div>

      <div className="page-annotation annotation-left">somehow, it was always you</div>
      <div className="page-annotation annotation-right">keep this page forever ♡</div>
      <Navigation onPrevious={onCover} onNext={onNext} nextLabel="college year one →" />
    </main>
  )
}

export default HowItStarted
