function Navigation({ previousLabel = '← cover', nextLabel, onPrevious, onNext }) {
  return (
    <nav className="page-navigation" aria-label="Scrapbook pages">
      <button type="button" onClick={onPrevious} className="nav-link">{previousLabel}</button>
      <span className="page-number">♡</span>
      {nextLabel ? <button type="button" onClick={onNext} className="nav-link">{nextLabel}</button> : <span className="nav-link end-mark">the end ♡</span>}
    </nav>
  )
}

export default Navigation
