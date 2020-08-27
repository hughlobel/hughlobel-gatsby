import React, { Component } from 'react';

import config from '../config/config'

class VideoBG extends Component {

  render() {

    const vidRan = (max) => {
      let min = 1;
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    let vidNum = vidRan(config.vidCount)

    return (
      <section class="videoHero">
        <video className='videoTag' poster='img/default.jpg' autoPlay muted>
          <source src={`img/video${vidNum}.mp4`} type='video/mp4' />
        </video>
    </section>
    );
  }
}

export default VideoBG