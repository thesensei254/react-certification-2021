import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    height: 350,
  },
  media: {
    height: 140,
  },
  pos: {
    marginBottom: 12,
  },
});

function CardItem({ video, imageUrl, title, desc, handleCardClick }) {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardActionArea
        onClick={() => {
          handleCardClick(video);
        }}
      >
        <CardContent>
          <CardMedia className={classes.media} image={imageUrl} />
          <Typography gutterBottom variant="h5" component="h2">
            {title}
          </Typography>
          <Typography
            className={classes.pos}
            variant="body2"
            color="textSecondary"
            component="p"
          >
            {desc}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

CardItem.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
};

export default CardItem;
