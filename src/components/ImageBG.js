import React, { Component } from 'react';
import reveal from '../config/revealActions'

class ImageBG extends Component {

  render() {

    const sectionStyle = {
      backgroundImage: "linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url('/img/" + this.props.image + "')",
      backgroundSize: "cover",
      backgroundPosition: "50% 50%"
    }

    return (
      <section class="imageHero" {...reveal.fadeDefault}>
        <div className="heroImage gridCenter" style={ sectionStyle }>
          <div className="container perfectCenter">
            <h1 className="white" {...reveal.slideDefault}>{this.props.title}</h1>
            <span  className="white" {...reveal.slideDefault}>{this.props.category}</span>
            <p  className="white" {...reveal.slideDefault}>{this.props.description}</p>
          </div>
        </div>
      </section>
    );
  }
}

export default ImageBG