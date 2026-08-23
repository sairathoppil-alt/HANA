import { useState } from 'react'
import Doodle from '../components/Doodle'
import Navigation from '../components/Navigation'
import PageHeader from '../components/PageHeader'
import VideoMoment from '../components/VideoMoment'
import WashiTape from '../components/WashiTape'
import { videoMoments } from '../data/scrapbookData'
import '../styles/video.css'
import '../styles/video-fallback.css'

function VideoMoments({ onPrevious, onNext }) {
  const [activeVideo, setActiveVideo] = useState(0)
  const mainVideo = videoMoments.videos[activeVideo]

  return (
    <main className="inside-page video-page page-enter">
      <PageHeader chapter={videoMoments.chapter} title={videoMoments.title} subtitle={videoMoments.subtitle} doodle="flower" />
      <div className="video-page-doodles" aria-hidden="true">✦　♡　▮▮▮　✧</div>
      <section className="main-video-wrap">
        <VideoMoment video={mainVideo} active />
        <p className="main-video-caption">a tiny movie of us ♡</p>
      </section>
      {videoMoments.videos.length > 1 && <section className="video-choices" aria-label="Other little moments">{videoMoments.videos.map((video, index) => index !== activeVideo && <VideoMoment key={video.src} video={video} onSelect={() => setActiveVideo(index)} />)}</section>}
      <article className="video-note"><WashiTape /><p>photos capture a moment,</p><p>but videos somehow bring it back. ♡</p></article>
      <div className="video-annotation">wish we could keep every little moment.</div>
      <Doodle type="heart" />
      <Navigation previousLabel="← camera roll" nextLabel="Hana summoning ritual →" onPrevious={onPrevious} onNext={onNext} />
    </main>
  )
}

export default VideoMoments