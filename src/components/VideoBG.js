import React, { Component } from 'react';
import ClientOnly from './ClientOnly'
import MediaQuery from 'react-responsive'

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
    
    return (
      <ClientOnly>
        <MediaQuery minDeviceWidth={720} device={{ deviceWidth: 1600 }}>
          <section class="videoHero">
            {!this.props.loop && 
              <video className='videoTag' poster='img/default.jpg' autoPlay muted>
                <source src={`img/${vidName}.mp4`} type='video/mp4' />
              </video>
            }
            {this.props.loop && 
              <video className='videoTag' poster='img/default.jpg' autoPlay muted loop>
                <source src={`img/${vidName}.mp4`} type='video/mp4' />
              </video>
            } 
        </section>
      </MediaQuery>
      <MediaQuery maxDeviceWidth={720}>
          <p>You also have a huge screen</p>
      </MediaQuery>
    </ClientOnly>
    );
  }
}

export default VideoBG