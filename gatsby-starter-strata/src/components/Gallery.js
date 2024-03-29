import PropTypes from 'prop-types'
import React, { Component } from 'react'

class Gallery extends Component {
  renderGallery() {
    const { images } = this.props

    if (!images) return

    const gallery = images.map((obj, i) => {
      return (
        <article className="6u 12u$(xsmall) work-item" key={i}>
          <a className="image fit thumb" href={obj.src} target="_blank">
            <img src={obj.thumbnail} />
          </a>

          <h3>{obj.caption}</h3>
          <p>
            <strong>{obj.description}</strong>
          </p>
          <p>{obj.tech}</p>
        </article>
      )
    })

    return <div className="row">{gallery}</div>
  }
  render() {
    return <div>{this.renderGallery()}</div>
  }
}

Gallery.displayName = 'Gallery'
Gallery.propTypes = {
  images: PropTypes.array,
}

export default Gallery
