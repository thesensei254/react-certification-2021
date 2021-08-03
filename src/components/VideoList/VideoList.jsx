import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import VideoListItem from '../VideoListItem';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
}));

function VideoList({ videos, handleVideoListItemClick }) {
  const classes = useStyles();

  console.log('Videos', videos);

  return (
    <List className={classes.root}>
      {videos.map((video) => (
        <VideoListItem
          key={video.etag}
          video={video}
          handleVideoListItemClick={handleVideoListItemClick}
        />
      ))}
    </List>
  );
}

export default VideoList;
