import { useState } from 'react'
import MediaLightbox from './MediaLightbox'

function PhotoPlaceholder({ photo, className = '' }) {
  const [isOpen, setIsOpen] = useState(false)

  if (!photo) {
    return null
  }

  return (
    <>
      <div
        className={`photo-placeholder ${className}`}
        onClick={() => setIsOpen(true)}
        role="button"
        tabIndex={0}
        aria-label={`View ${photo.caption || 'image'} larger`}
        onKeyDown={(event) => {
          if (event.key === 'Enter' || event.key === ' ') {
            event.preventDefault()
            setIsOpen(true)
          }
        }}
      >
        <div className="photo-placeholder-image-wrap">
          <img
            src={photo.src}
            alt={photo.caption || 'Scrapbook memory'}
            className="photo-placeholder-image"
          />
        </div>

        {photo.caption && (
          <p className="photo-placeholder-caption">
            {photo.caption}
          </p>
        )}
      </div>

      {isOpen && (
        <MediaLightbox
          src={photo.src}
          caption={photo.caption}
          onClose={() => setIsOpen(false)}
        />
      )}
    </>
  )
}

export default PhotoPlaceholder