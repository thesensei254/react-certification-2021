import React from 'react';
import VideoList from '../../components/VideoList';
import VideoPlayer from '../../components/VideoPlayer';

function TheatrePage() {
  return (
    <div>
      <h1>Player and list goes here</h1>
      <hr />
      <VideoList />
      <VideoPlayer />
    </div>
  );
}

export default TheatrePage;
