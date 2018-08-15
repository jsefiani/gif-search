import React from 'react';

// Import components
import Gif from './Gif'
import NoGifs from './NoGifs';

const GifList = props => { 
  
  const results = props.data;

  const renderResults = (results, page = 1, resultsPerPage = 12) => {
    const start = (page - 1) * resultsPerPage;
    const end = page * resultsPerPage;

    let gifs;
    if (results.length > 0) {
      gifs = results.slice(start, end).map(gif => {
        return <Gif url={gif.images.fixed_height.url} key={gif.id} />
      });
    } else {
      gifs = <NoGifs />
    }
    return gifs;
  }


  
  

  return(
    <ul className="gif-list">
      {renderResults(results)}
    </ul>
  );
}

export default GifList;
