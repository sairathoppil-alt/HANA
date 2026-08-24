import { useEffect, useState } from 'react'

function BirthdayConfetti() {
  const [confetti, setConfetti] = useState([])

  useEffect(() => {
    const pieces = Array.from({ length: 70 }, (_, index) => ({
      id: index,
      left: Math.random() * 100,
      delay: Math.random() * 1.5,
      duration: 3 + Math.random() * 3,
      size: 6 + Math.random() * 7,
      rotation: Math.random() * 360,
      drift: -80 + Math.random() * 160,
    }))

    setConfetti(pieces)
  }, [])

  return (
    <div
      className="birthday-confetti"
      aria-hidden="true"
    >
      {confetti.map((piece) => (
        <span
          key={piece.id}
          style={{
            left: `${piece.left}%`,
            width: `${piece.size}px`,
            height: `${piece.size * 1.6}px`,
            animationDelay: `${piece.delay}s`,
            animationDuration: `${piece.duration}s`,
            '--drift': `${piece.drift}px`,
            '--rotation': `${piece.rotation}deg`,
          }}
        />
      ))}
    </div>
  )
}

export default BirthdayConfetti