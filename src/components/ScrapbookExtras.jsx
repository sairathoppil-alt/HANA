import { useRef, useState } from 'react'

export function ScrapbookMusic() {
  const audioRef = useRef(null)
  const [isPlaying, setIsPlaying] = useState(false)

  const handleMusic = async () => {
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
      console.error('Soundtrack could not play:', error)
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
        className={`scrapbook-music-note ${
          isPlaying ? 'is-playing' : ''
        }`}
        onClick={handleMusic}
        aria-label={isPlaying ? 'Pause music' : 'Play music'}
      >
        {isPlaying ? '♫' : '♪'}
      </button>
    </>
  )
}

export function BirthdayConfetti() {
  const pieces = Array.from({ length: 50 })

  return (
    <div
      className="birthday-confetti"
      aria-hidden="true"
    >
      {pieces.map((_, index) => (
        <span
          key={index}
          style={{
            '--delay': `${(index % 20) * 0.08}s`,
            '--left': `${(index * 29) % 100}%`,
            '--rotation': `${(index * 47) % 360}deg`,
          }}
        >
          {index % 3 === 0
            ? '♡'
            : index % 3 === 1
              ? '✦'
              : '•'}
        </span>
      ))}
    </div>
  )
}