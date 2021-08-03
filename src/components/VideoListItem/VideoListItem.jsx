import React, { Fragment } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(() => ({
  inline: {
    display: 'inline',
  },
}));

function VideoListItem({ video }) {
  const classes = useStyles();
  return (
    <ListItem alignItems="flex-start">
      <ListItemAvatar>
        <Avatar
          variant="square"
          alt="Wizeline"
          src={video.snippet.thumbnails.default.url}
        />
      </ListItemAvatar>
      <ListItemText
        primary={video.snippet.title}
        secondary={<Fragment>{video.snippet.description}</Fragment>}
      />
    </ListItem>
  );
}

export default VideoListItem;
