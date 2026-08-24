import { useEffect } from 'react'

function MediaLightbox({ src, caption, type = 'image', onClose }) {
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        onClose()
      }
    }

    document.addEventListener('keydown', handleKeyDown)

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [onClose])

  const handleBackdropClick = (event) => {
    if (event.target === event.currentTarget) {
      onClose()
    }
  }

  return (
    <div
      className="media-lightbox"
      onClick={handleBackdropClick}
      role="dialog"
      aria-modal="true"
      aria-label={caption || 'Expanded media'}
    >
      <div className="media-lightbox-inner">

        <button
          type="button"
          className="media-lightbox-close"
          onClick={onClose}
          aria-label="Close expanded media"
        >
          ×
        </button>

        {type === 'video' ? (
          <video
            className="media-lightbox-video"
            src={src}
            controls
            autoPlay
            playsInline
            preload="metadata"
          />
        ) : (
          <img
            className="media-lightbox-image"
            src={src}
            alt={caption || ''}
          />
        )}

        {caption && (
          <p className="media-lightbox-caption">
            {caption}
          </p>
        )}

      </div>
    </div>
  )
}

export default MediaLightbox