import { useEffect, useState } from 'react'

function SurprisePage({ onSurprise }) {
  const [position, setPosition] = useState(null)
  const [scale, setScale] = useState(1)
  const [attempts, setAttempts] = useState(0)
  const [finished, setFinished] = useState(false)

  const runAway = () => {
    if (attempts >= 9) {
      setFinished(true)
      return
    }

    const padding = 80

    const maxX = Math.max(
      padding,
      window.innerWidth - 180
    )

    const maxY = Math.max(
      padding,
      window.innerHeight - 100
    )

    setPosition({
      x: Math.random() * (maxX - padding) + padding,
      y: Math.random() * (maxY - padding) + padding
    })

    setScale(Math.max(0.55, 1 - attempts * 0.05))
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
    <main className="inside-page surprise-page page-enter">
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
                    position: 'fixed',
                    left: `${position.x}px`,
                    top: `${position.y}px`,
                    transform: `scale(${scale})`
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