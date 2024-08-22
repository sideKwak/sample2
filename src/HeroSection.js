import React from 'react';
import video from './video/video.mp4'; // 비디오 파일 경로

function HeroSection() {
  return (
    <section className="hero">
      <video autoPlay loop muted className="video-bg">
        <source src={video} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="hero-content">
        <h1>지속 가능한 내일을 만들어 갑니다.</h1>
      </div>
    </section>
  );
}

export default HeroSection;