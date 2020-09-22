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
    let vidName = !this.props.video ? `video${vidNum}` : this.props.video
    let vidName2 = !this.props.videoMobile ? this.props.video : this.props.videoMobile
    return (
      <section class="videoHero">
        {!this.props.loop && 
          <video className='videoTag' poster='img/default.jpg' autoPlay muted>
            <source src={`img/${vidName}.mp4`} type='video/mp4'/>
          </video>
        }
        {this.props.loop && 
          <video className='videoTag' poster='img/default.jpg' autoPlay muted loop>
            <source src={`img/${vidName}.mp4`} type='video/mp4'/>
          </video>
        }
          
    </section>
    );
  }
}

export default VideoBG