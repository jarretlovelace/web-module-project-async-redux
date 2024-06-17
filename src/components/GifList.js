import React from 'react';
import { connect } from 'react-redux';

import Gif from './Gif';

const GifList = ({ gifs }) => {
  return (
    <div id="gifList">
      {gifs.map((gif) => (
        <Gif key={gif.id} gif={gif} />
      ))}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    gifs: state.gifs,
  };
};

export default connect(mapStateToProps)(GifList);
