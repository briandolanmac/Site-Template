import videoData from "../../data/home/VideoSection.json";

const VideoSection = () => {
  if (!videoData.enabled) return null;

  return (
    <section className="video-section section-on-dark">
    <div className="container">
      <p className="section-eyebrow">{videoData.eyebrow}</p>
      <h2 className="section-title">{videoData.title}</h2>
      <p className="section-sub">{videoData.subtitle}</p>
      <div className="video-wrap">
        <video id="intro-video" src={videoData.video.src} playsInline preload="metadata"></video>
        <button
          type="button"
          className="video-play-btn"
          id="video-play-btn"
          aria-label={videoData.video.playLabel}
        >
          <span className="play-icon">{videoData.video.playIcon}</span>
        </button>
      </div>
      <p className="video-caption">{videoData.caption}</p>
    </div>
    </section>
  );
};

export default VideoSection;
