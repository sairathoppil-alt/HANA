import WashiTape from './WashiTape'
import PhotoPlaceholder from './PhotoPlaceholder'

function Polaroid({ photo }) {
  if (photo) return <PhotoPlaceholder photo={photo} className="polaroid cover-photo" />

  return (
    <figure className="polaroid">
      <WashiTape />
      <div className="polaroid-image"><span>our photo<br />goes here ♡</span></div>
      <figcaption>my one true love</figcaption>
    </figure>
  )
}

export default Polaroid
