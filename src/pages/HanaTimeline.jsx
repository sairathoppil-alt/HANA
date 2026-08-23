import PageHeader from '../components/PageHeader'
import PhotoPlaceholder from '../components/PhotoPlaceholder'
import Navigation from '../components/Navigation'
import { hanaLife } from '../data/scrapbookData'

function HanaTimeline({ onPrevious, onNext }) {
  return (
    <main className="inside-page hana-life-page page-enter">

      <PageHeader
        chapter="a little surprise"
        title={hanaLife.title}
        subtitle={hanaLife.subtitle}
        doodle="flower"
      />

      <div className="hana-life-intro">
        <span>♡</span>

        <p>
          from tiny Hana to Hana now —
          somehow every version is still very much you.
        </p>
      </div>

      <div className="hana-life-timeline">

        {hanaLife.photos.map((photo, index) => (
          <div
            className={`hana-life-item hana-life-${photo.stage}`}
            key={photo.src}
          >

            <div className="hana-life-marker">
              {index + 1}
            </div>

            <PhotoPlaceholder
              photo={photo}
              className="hana-life-photo"
            />

            <p className="hana-life-caption">
              {photo.caption}
            </p>

          </div>
        ))}

      </div>

      <div className="hana-life-ending">
        <p>
          and somehow, after all those years...
        </p>

        <strong>
          you're still Hana. ♡
        </strong>
      </div>

      <Navigation
        previousLabel="← surprise"
        nextLabel="ritual →"
        onPrevious={onPrevious}
        onNext={onNext}
      />

    </main>
  )
}

export default HanaTimeline