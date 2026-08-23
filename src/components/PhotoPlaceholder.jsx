import { useState } from 'react'
import WashiTape from './WashiTape'
import '../styles/adaptive-media.css'

function PhotoPlaceholder({ photo, className = '' }) {
  const [missing, setMissing] = useState(false)
  const [dimensions, setDimensions] = useState(null)
  const isExternalPhoto = Boolean(photo?.src)
  const ratio = dimensions ? `${dimensions.width} / ${dimensions.height}` : photo?.ratio === 'portrait' ? '3 / 4' : photo?.ratio === 'landscape' ? '4 / 3' : photo?.ratio === 'square' ? '1 / 1' : undefined

  return (
    <figure className={`photo-placeholder photo-${photo?.type || 'polaroid'} media-size-${photo?.size || 'auto'} ${dimensions ? 'media-loaded' : ''} ${className}`} style={{ '--rotation': `${photo?.rotation || 0}deg` }}>
      <WashiTape />
      <div className="photo-surface" style={ratio ? { aspectRatio: ratio } : undefined}>
        {isExternalPhoto && !missing ? <img src={photo.src} alt={photo?.caption || 'Scrapbook photograph'} onLoad={(event) => setDimensions({ width: event.currentTarget.naturalWidth, height: event.currentTarget.naturalHeight })} onError={() => setMissing(true)} /> : <span>photo coming<br />soon ♡</span>}
      </div>
      <figcaption>{photo?.caption}</figcaption>
    </figure>
  )
}

export default PhotoPlaceholder
