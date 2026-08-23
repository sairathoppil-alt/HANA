import { useState } from 'react'
import WashiTape from './WashiTape'
import '../styles/adaptive-media.css'

function VideoMoment({ video, active = false, onSelect }) {
  const [status, setStatus] = useState('loading')
  const [dimensions, setDimensions] = useState(null)
  const ratio = dimensions ? `${dimensions.width} / ${dimensions.height}` : video?.ratio === 'portrait' ? '3 / 4' : video?.ratio === 'landscape' ? '4 / 3' : video?.ratio === 'square' ? '1 / 1' : undefined

  return (
    <figure className={`video-moment media-size-${video?.size || 'auto'} ${dimensions ? 'media-loaded' : ''} ${active ? 'is-active' : ''}`}>
      <WashiTape />
      <div className="video-surface" style={ratio ? { aspectRatio: ratio } : undefined}>
        {status !== 'ready' && <span className="video-placeholder">our little movie<br />goes here ♡<small>▮▮▮ film strip</small></span>}
        <video className={status === 'ready' ? 'is-loaded' : ''} src={video.src} controls muted playsInline preload="metadata" onLoadedMetadata={(event) => { setDimensions({ width: event.currentTarget.videoWidth, height: event.currentTarget.videoHeight }); setStatus('ready') }} onError={() => setStatus('missing')} aria-label={video.caption} />
      </div>
      <figcaption>{video.caption}</figcaption>
      {onSelect && <button type="button" className="video-select" onClick={onSelect} aria-label={`Show ${video.caption}`}>view film</button>}
    </figure>
  )
}

export default VideoMoment