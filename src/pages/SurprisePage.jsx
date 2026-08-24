import { useEffect, useRef, useState } from 'react'

function SurprisePage({ onSurprise }) {
  const paperRef = useRef(null)

  const [position, setPosition] = useState(null)
  const [scale, setScale] = useState(1)
  const [attempts, setAttempts] = useState(0)
  const [finished, setFinished] = useState(false)

  const runAway = () => {
    if (attempts >= 9) {
      setFinished(true)
      return
    }

    const paper = paperRef.current

    if (!paper) return

    const paperRect = paper.getBoundingClientRect()

    /*
      Approximate button dimensions.
      We leave extra padding so the button never touches
      or crosses the edge of the scrapbook paper.
    */
    const buttonWidth = 130
    const buttonHeight = 55
    const padding = 35

    const minX = padding
    const minY = padding

    const maxX = Math.max(
      minX,
      paperRect.width - buttonWidth - padding
    )

    const maxY = Math.max(
      minY,
      paperRect.height - buttonHeight - padding
    )

    const x =
      Math.random() * (maxX - minX) + minX

    const y =
      Math.random() * (maxY - minY) + minY

    setPosition({
      x,
      y,
    })

    setScale(
      Math.max(
        0.55,
        1 - attempts * 0.05
      )
    )

    setAttempts((value) => value + 1)
  }

  useEffect(() => {
    if (attempts >= 9) {
      const timer = setTimeout(() => {
        setFinished(true)
      }, 500)

      return () => clearTimeout(timer)
    }
  }, [attempts])

  /*
    Keep the button inside the scrapbook paper if the
    browser/window is resized.
  */
  useEffect(() => {
    const keepInsidePaper = () => {
      if (!position || !paperRef.current) return

      const paperRect =
        paperRef.current.getBoundingClientRect()

      const buttonWidth = 130
      const buttonHeight = 55
      const padding = 35

      const maxX = Math.max(
        padding,
        paperRect.width -
          buttonWidth -
          padding
      )

      const maxY = Math.max(
        padding,
        paperRect.height -
          buttonHeight -
          padding
      )

      setPosition((current) => ({
        x: Math.min(
          Math.max(current.x, padding),
          maxX
        ),
        y: Math.min(
          Math.max(current.y, padding),
          maxY
        ),
      }))
    }

    window.addEventListener(
      'resize',
      keepInsidePaper
    )

    return () => {
      window.removeEventListener(
        'resize',
        keepInsidePaper
      )
    }
  }, [position])

  if (finished) {
    return (
      <main className="inside-page surprise-page page-enter">
        <div className="surprise-final">

          <p className="surprise-tiny">
            okay okay...
          </p>

          <h1>
            fine, i'll show you 🙄
          </h1>

          <p>
            you really weren't going to give up, were you?
          </p>

          <button
            type="button"
            className="surprise-final-button"
            onClick={onSurprise}
          >
            fine → show me
          </button>

        </div>
      </main>
    )
  }

  return (
    <main
      ref={paperRef}
      className="inside-page surprise-page page-enter"
    >
      <div className="surprise-card">

        <span className="surprise-doodle">
          ✦
        </span>

        <p className="surprise-small">
          wait...
        </p>

        <h1>
          do you wanna see a surprise?
        </h1>

        <p className="surprise-subtitle">
          it's a really good one.
          <br />
          probably.
          <br />
          maybe.
        </p>

        <div className="surprise-buttons">

          <button
            type="button"
            className="surprise-no-button"
            onClick={onSurprise}
          >
            no thanks
          </button>

          <button
            type="button"
            className="surprise-yes-button"
            style={
              position
                ? {
                    position: 'absolute',
                    left: `${position.x}px`,
                    top: `${position.y}px`,
                    transform: `scale(${scale})`,
                    zIndex: 9999,
                  }
                : undefined
            }
            onMouseEnter={runAway}
            onClick={runAway}
          >
            YES ♡
          </button>

        </div>

        {attempts > 0 && (
          <p className="surprise-attempt">
            {attempts < 3
              ? 'nice try 😭'
              : attempts < 6
                ? 'you really thought it would be that easy'
                : attempts < 9
                  ? 'STOP CHASING THE BUTTON 😭'
                  : 'okay fine...'}
          </p>
        )}

      </div>
    </main>
  )
}

export default SurprisePage