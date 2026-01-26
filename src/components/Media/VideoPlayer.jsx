import React from 'react';

const VideoPlayer = () => {
  return (
    <div className="container mx-auto px-4 py-8 text-center">
      <h2 className="text-3xl font-bold mb-6">Drone Flight Video</h2>
      <video controls className="w-full max-w-2xl mx-auto" loading="lazy">
        <source src="/src/assets/video/drone-flight.mp4" type="video/mp4" />
        <source src="/src/assets/video/drone-flight.webm" type="video/webm" />
        Your browser does not support the video tag.
      </video>
      <p className="mt-4 text-gray-600">Watch an amazing drone flight demonstration.</p>
    </div>
  );
};

export default VideoPlayer;