import React, { useState } from 'react';
import Grid from '@material-ui/core/Grid';
import styled from 'styled-components';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Header from '../../components/Header';
import CardItem from '../../components/CardItem';
import TheatrePage from '../Theatre/Theatre.page';

import exampleVideoData from '../../data/exampleVideoData';

const Wrapper = styled.section`
  margin: 2em;
`;

const useStyles = makeStyles({
  heading: {
    textAlign: 'center',
    margin: '1em',
    fontWeight: 'bold',
  },
});

function LandingPage() {
  const classes = useStyles();
  const [state, setState] = useState({
    videos: exampleVideoData.items,
    video: exampleVideoData.items[0],
    isClicked: false,
  });

  const handleCardClick = () => {
    // Set is clicked to trigger re-render with the clicked video
    setState({
      isClicked: true,
      videos: exampleVideoData.items,
      video: exampleVideoData.items[1],
    });
  };

  const handleVideoListItemClick = (currentVideo) => {
    console.log('This function fires');
    setState({
      video: currentVideo,
      isClicked: true,
      videos,
    });
  };

  const { videos, video, isClicked } = state;

  return (
    <div>
      <Header />
      <Typography className={classes.heading} variant="h3" component="h1">
        Wizeline React Bootcamp
      </Typography>
      <Wrapper>
        {isClicked === true && (
          <TheatrePage
            videos={videos}
            video={video}
            handleVideoListItemClick={handleVideoListItemClick}
          />
        )}
        {isClicked === false && (
          <Grid
            container
            direction="row"
            justifyContent="space-evenly"
            alignItems="flex-start"
            spacing={3}
          >
            {videos.map((item) => (
              <Grid item xs={12} sm={3} key={item.etag}>
                <CardItem
                  video={item}
                  imageUrl={item.snippet.thumbnails.high.url}
                  title={item.snippet.title}
                  desc={item.snippet.description}
                  handleCardClick={handleCardClick}
                />
              </Grid>
            ))}
          </Grid>
        )}
      </Wrapper>
    </div>
  );
}

export default LandingPage;
