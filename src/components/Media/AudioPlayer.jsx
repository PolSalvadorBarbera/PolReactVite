import React from 'react';

const AudioPlayer = () => {
  return (
    <div className="container mx-auto px-4 py-8 text-center">
      <h2 className="text-3xl font-bold mb-6">Drone Sound Experience</h2>
      <audio controls className="w-full max-w-md mx-auto">
        <source src="/src/assets/audio/drone-sound.mp3" type="audio/mpeg" />
        <source src="/src/assets/audio/drone-sound.ogg" type="audio/ogg" />
        Your browser does not support the audio element.
      </audio>
      <p className="mt-4 text-gray-600">Listen to the sound of a drone in flight.</p>
    </div>
  );
};

export default AudioPlayer;