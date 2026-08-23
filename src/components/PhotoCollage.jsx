import PhotoPlaceholder from './PhotoPlaceholder'

function PhotoCollage({ photos, className = '' }) {
  return <div className={`photo-collage ${className}`}>{photos.map((photo, index) => <PhotoPlaceholder key={`${photo.src}-${index}`} photo={photo} />)}</div>
}

export default PhotoCollage
