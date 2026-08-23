import { useEffect } from 'react'

function MediaLightbox({
  src,
  caption,
  type = 'image',
  onClose
}) {
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        onClose()
      }
    }

    document.addEventListener('keydown', handleKeyDown)

    const originalOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = originalOverflow
    }
  }, [onClose])

  return (
    <div
      className="media-lightbox"
      role="dialog"
      aria-modal="true"
      aria-label={
        type === 'video'
          ? 'Expanded video'
          : 'Expanded image'
      }
      onClick={onClose}
    >
      <button
        type="button"
        className="media-lightbox-close"
        aria-label="Close"
        onClick={onClose}
      >
        ×
      </button>

      <div
        className={`media-lightbox-content ${
          type === 'video'
            ? 'media-lightbox-video-content'
            : ''
        }`}
        onClick={(event) => event.stopPropagation()}
      >
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
            src={src}
            alt={caption || 'Expanded scrapbook memory'}
            className="media-lightbox-image"
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