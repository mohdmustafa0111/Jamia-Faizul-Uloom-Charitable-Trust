const VideoBackground = () => {
  return (
    <div id="home">
      <iframe
        src={
          "https://www.youtube.com/embed/NboIt4cIabw?si=9qzaDgdUYHxKRZE3" +
          "?&autoplay=1&mute=1&vq=hd1080"
        }
        className="w-screen aspect-video"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowfullscreen
      ></iframe>
    </div>
  );
};

export default VideoBackground;
