import React from 'react';
import { Grid } from '@material-ui/core';
import VideoList from '../../components/VideoList';
import VideoPlayer from '../../components/VideoPlayer';

function TheatrePage({ videos, video, handleVideoListItemClick }) {
  return (
    <Grid container direction="row" alignItems="flex-start" justifyContent="space-evenly">
      <VideoPlayer video={video} />
      <Grid item xs={12} sm={4}>
        <VideoList videos={videos} handleVideoListItemClick={handleVideoListItemClick} />
      </Grid>
    </Grid>
  );
}

export default TheatrePage;
