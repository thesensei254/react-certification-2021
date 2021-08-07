import Axios from 'axios';

const searchYouTube = (query, callback) => {
  // Need to return a promise to be captured by promise tracker
  return Axios.get('https://www.googleapis.com/youtube/v3/search', {
    params: {
      part: 'snippet',
      key: process.env.REACT_APP_YOUTUBE_API_KEY,
      q: query,
      maxResults: 15,
      type: 'video',
      videoEmbeddable: 'true',
    },
  })
    .then(({ data }) => {
      callback(data.items);
    })
    .catch((err) => console.error(err));
};

export default searchYouTube;
