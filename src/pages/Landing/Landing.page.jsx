import React, { useState, useEffect } from 'react';
import { trackPromise } from 'react-promise-tracker';
import Grid from '@material-ui/core/Grid';
import styled from 'styled-components';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import searchYouTube from '../../lib/youTubeRequest';
import Header from '../../components/Header';
import CardItem from '../../components/CardItem';
import TheatrePage from '../Theatre/Theatre.page';

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
    videos: [],
    video: {},
    isClicked: false,
  });

  const { videos, video, isClicked } = state;

  const handleCardClick = (clickedVideo) => {
    // Set is clicked to trigger re-render with the clicked video
    setState({
      isClicked: true,
      video: clickedVideo,
      videos,
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

  const getYouTubeVideos = (query) => {
    console.log('Get Youtube videos firing!');
    return searchYouTube(query, (items) => {
      setState({
        isClicked: false,
        videos: items,
        video: items[0],
      });
    });
  };

  useEffect(() => {
    // Get videos on load
    trackPromise(getYouTubeVideos('Wizeline'));
  }, []);

  return (
    <div>
      <Header getYouTubeVideos={getYouTubeVideos} />
      <Typography className={classes.heading} variant="h3" component="h1">
        Wizeline React Bootcamp
      </Typography>
      <Wrapper>
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
        {isClicked === true && (
          <TheatrePage
            videos={videos}
            video={video}
            handleVideoListItemClick={handleVideoListItemClick}
          />
        )}
      </Wrapper>
    </div>
  );
}

export default LandingPage;
