import { useRef, useState } from 'react'
import Navigation from '../components/Navigation'
import PageHeader from '../components/PageHeader'
import PhotoPlaceholder from '../components/PhotoPlaceholder'
import WashiTape from '../components/WashiTape'
import { birthday } from '../data/scrapbookData'

const confetti = ['♡', '✦', '✧', '♥', '·', '♡', '✦', '·', '♥', '✧']

function BirthdayReveal({ onPrevious }) {
  const [wished, setWished] = useState(false)
  const confettiRef = useRef(null)
  const makeWish = () => {
    setWished(true)
    requestAnimationFrame(() => {
      confettiRef.current?.querySelectorAll('i').forEach((piece, index) => {
        const direction = index % 2 === 0 ? -1 : 1
        piece.animate([
          { opacity: 0, transform: 'translate(0, 0) scale(.7)' },
          { opacity: 1, transform: `translate(${direction * 12}px, -12px) scale(1)` },
          { opacity: 0, transform: `translate(${direction * (145 + index * 7)}px, ${-115 - index * 4}px) rotate(180deg) scale(.8)` }
        ], { duration: 1050, delay: index * 35, easing: 'ease-out', fill: 'forwards' })
      })
    })
  }
  return (
    <main className={`inside-page birthday-page page-enter ${wished ? 'wish-made' : ''}`}>
      <PageHeader chapter="" title="and finally..." subtitle="" doodle="heart" />
      <section className="birthday-card">
        <div className="birthday-sparkles" aria-hidden="true">✦　♡　✧　♡　✦</div>
        <h2>HAPPY BIRTHDAY</h2>
        <p className="birthday-human">to my favorite human ♡</p>
        {wished && <PhotoPlaceholder photo={birthday.photo} className="birthday-photo" />}
        <p className="birthday-line">here's to another year of us.</p>
        <div className="birthday-messages">{birthday.messages.map((message) => <span key={message}>{message}</span>)}</div>
        <p className="loading-line">chapter 4 loading...</p>
        <button type="button" className="wish-button" onClick={makeWish}><WashiTape />make a wish ✨</button>
        {wished && <div className="wish-reveal"><strong>you deserve the happiest year yet. ♡</strong><span>thank you for being part of my story.</span></div>}
        <div className="birthday-confetti" ref={confettiRef} aria-hidden="true">{confetti.map((mark, index) => <i key={`${mark}-${index}`}>{mark}</i>)}</div>
      </section>
      <div className="birthday-end">the end ♡<small>or maybe just the end of chapter three...</small></div>
      <Navigation previousLabel="← the letter" onPrevious={onPrevious} />
    </main>
  )
}

export default BirthdayReveal
