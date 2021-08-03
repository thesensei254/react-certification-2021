import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';

function VideoListItem({ video, handleVideoListItemClick }) {
  return (
    <ListItem
      alignItems="flex-start"
      autoFocus
      divider
      onClick={() => handleVideoListItemClick(video)}
    >
      <ListItemAvatar>
        <Avatar
          variant="square"
          alt="Wizeline"
          src={video.snippet.thumbnails.default.url}
        />
      </ListItemAvatar>
      <ListItemText primary={video.snippet.title} secondary={video.snippet.description} />
    </ListItem>
  );
}

export default VideoListItem;
