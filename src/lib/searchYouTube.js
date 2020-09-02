var searchYouTube = ({key, query, max = 5}, callback) => {
  // TODO
  $.get('https://www.googleapis.com/youtube/v3/search', {
    part: 'snippet',
    key: key,
    q: query,
    maxResults: max,
    type: 'video',
    videoEmbeddable: 'true'
  })

    .done(({items}) => { //props destructuring
      if (callback) {
        callback(items);
      }
    })

    .fail(({responseJSON}) => { //props destructuring
      responseJSON.error.errors.forEach((err) => console.error(err)); //todo: fix parsing error
    });
};

export default searchYouTube;
