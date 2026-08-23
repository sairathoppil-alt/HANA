import Doodle from './Doodle'

function PageHeader({ chapter, title, subtitle, doodle = 'flower' }) {
  return (
    <header className="inside-heading">
      {chapter && <div className="chapter-mark">{chapter} <span>♡</span></div>}
      <h1>{title}</h1>
      <p>{subtitle}</p>
      <Doodle type={doodle} />
    </header>
  )
}

export default PageHeader
