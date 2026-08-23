import { useState } from 'react'
import MediaLightbox from './MediaLightbox'

function VideoMoment({ video, className = '' }) {
  const [isOpen, setIsOpen] = useState(false)

  if (!video) {
    return null
  }

  return (
    <>
      <article
        className={`video-moment ${className}`}
      >
        <button
          type="button"
          className="video-moment-preview"
          onClick={() => setIsOpen(true)}
          aria-label={`Play ${video.caption || 'video'} larger`}
        >
          <video
            src={video.src}
            className="video-moment-player"
            controls
            playsInline
            preload="metadata"
          />

          <span className="video-moment-expand">
            ⛶
          </span>
        </button>

        {video.caption && (
          <p className="video-moment-caption">
            {video.caption}
          </p>
        )}
      </article>

      {isOpen && (
        <MediaLightbox
          src={video.src}
          caption={video.caption}
          type="video"
          onClose={() => setIsOpen(false)}
        />
      )}
    </>
  )
}

export default VideoMoment