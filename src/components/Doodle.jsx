const marks = {
  calendar: '▣',
  notebook: '▤',
  face: '☻',
  pencil: '✎',
  flower: '❀',
  heart: '♡'
}

function Doodle({ type }) {
  return <span className={`doodle doodle-${type}`} aria-hidden="true">{marks[type]}</span>
}

export default Doodle
