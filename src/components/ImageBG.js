import React, { Component } from 'react';
import reveal from '../config/revealActions'

class ImageBG extends Component {

  render() {
    let bgStyle = !this.props.light ? "linear-gradient(rgba(0,0,0,0.85), rgba(0,0,0,0.85)), url('/img/" + this.props.image + "')" : "linear-gradient(rgba(248,248,255,0.4), rgba(248,248,255,0.4)), url('/img/" + this.props.image + "')"
    const sectionStyle = {
      backgroundImage: bgStyle,
      backgroundSize: "cover",
      backgroundPosition: "50% 50%"
    }
    let textColor = !this.props.light ? 'white' : ''
    const textStyle = {
      color: textColor
    }

    return (
      <section class="imageHero" {...reveal.fadeDefault}>
        <div className="heroImage gridCenter" style={ sectionStyle }>
          <div className="container perfectCenter">
            <h1 className={textColor} {...reveal.slideDefault} >{this.props.title}</h1>
            <span  className="white" {...reveal.slideDefault} >{this.props.category}</span>
            <p  className="white" {...reveal.slideDefault} >{this.props.description}</p>
          </div>
        </div>
      </section>
    );
  }
}

export default ImageBG