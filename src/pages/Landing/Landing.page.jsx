import React from 'react';
import Grid from '@material-ui/core/Grid';
import styled from 'styled-components';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Header from '../../components/Header';
import CardItem from '../../components/CardItem';

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

  return (
    <div>
      <Header />
      <Typography className={classes.heading} variant="h3" component="h1">
        Wizeline React Bootcamp
      </Typography>
      <Wrapper>
        <Grid
          container
          direction="row"
          justifyContent="space-evenly"
          alignItems="flex-start"
          spacing={3}
        >
          {exampleVideoData.items.map((item) => (
            <Grid item xs={12} sm={3} key={item.etag}>
              <CardItem
                imageUrl={item.snippet.thumbnails.high.url}
                title={item.snippet.title}
                desc={item.snippet.description}
              />
            </Grid>
          ))}
        </Grid>
      </Wrapper>
    </div>
  );
}

export default LandingPage;
