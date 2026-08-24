import { useRef, useState } from 'react'

function SurprisePage({ onSurprise }) {
  const areaRef = useRef(null)
  const [yesPosition, setYesPosition] = useState({
    x: 0,
    y: 0,
  })

  const [tries, setTries] = useState(0)

  const moveYesButton = () => {
    const area = areaRef.current

    if (!area) return

    const button = area.querySelector('.surprise-yes-button')

    if (!button) return

    const areaRect = area.getBoundingClientRect()
    const buttonRect = button.getBoundingClientRect()

    const padding = 20

    const maxX = Math.max(
      0,
      areaRect.width - buttonRect.width - padding
    )

    const maxY = Math.max(
      0,
      areaRect.height - buttonRect.height - padding
    )

    const newX =
      padding + Math.random() * Math.max(0, maxX - padding)

    const newY =
      padding + Math.random() * Math.max(0, maxY - padding)

    setYesPosition({
      x: newX,
      y: newY,
    })

    setTries((current) => current + 1)
  }

  return (
    <main className="inside-page surprise-page">
      <section
        ref={areaRef}
        className="surprise-play-area"
      >
        <h1>do you want to see a surprise? ♡</h1>

        <p>
          I have something very important to show you...
        </p>

        <div className="surprise-buttons">

          <button
            type="button"
            className="surprise-no-button"
            onClick={moveYesButton}
          >
            no 😭
          </button>

          <button
            type="button"
            className="surprise-yes-button"
            style={{
              left: `${yesPosition.x}px`,
              top: `${yesPosition.y}px`,
            }}
            onMouseEnter={moveYesButton}
            onClick={onSurprise}
          >
            {tries > 5 ? 'fine, ill show' : 'yes ♡'}
          </button>

        </div>

      </section>
    </main>
  )
}

export default SurprisePage
