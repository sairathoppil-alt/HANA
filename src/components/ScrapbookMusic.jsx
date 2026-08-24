import { useRef, useState } from 'react'

function ScrapbookMusic() {
  const audioRef = useRef(null)
  const [isPlaying, setIsPlaying] = useState(false)

  const toggleMusic = async () => {
    const audio = audioRef.current

    if (!audio) return

    try {
      if (audio.paused) {
        await audio.play()
        setIsPlaying(true)
      } else {
        audio.pause()
        setIsPlaying(false)
      }
    } catch (error) {
      console.error('Unable to play soundtrack:', error)
    }
  }

  return (
    <>
      <audio
        ref={audioRef}
        src="/audio/scrapbook.mp3"
        loop
        preload="auto"
      />

      <button
        type="button"
        className={`scrapbook-music-button ${
          isPlaying ? 'is-playing' : ''
        }`}
        onClick={toggleMusic}
        aria-label={
          isPlaying
            ? 'Pause soundtrack'
            : 'Play soundtrack'
        }
      >
        {isPlaying ? '♫' : '♪'}
      </button>
    </>
  )
}

export default ScrapbookMusic