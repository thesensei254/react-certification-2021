import React from 'react';
import { Button, Grid, Typography } from '@material-ui/core';

function VideoPlayer({ video }) {
  return (
    <Grid
      item
      xs={12}
      sm={8}
      container
      direction="column"
      justifyContent="flex-start"
      alignItems="flex-start"
      spacing={2}
    >
      <Grid item xs={12} sm>
        <iframe
          title={video.snippet.title}
          src={`https://www.youtube.com/embed/${video.id.videoId}`}
          allowFullScreen
        />
      </Grid>
      <Grid
        item
        xs={12}
        sm
        spacing={2}
        container
        direction="row"
        justifyContent="space-evenly"
        alignItems="center"
      >
        <Grid item xs={9} sm justifyContent="flex-start">
          <Typography variant="h6" gutterBottom>
            {video.snippet.title}
          </Typography>
          <Typography variant="subtitle2" gutterBottom>
            {video.snippet.description}
          </Typography>
        </Grid>
        <Grid item xs={3} sm justifyContent="flex-end">
          <Button>
            <Typography variant="button" display="block" gutterBottom>
              ADD TO FAVORITES
            </Typography>
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default VideoPlayer;
