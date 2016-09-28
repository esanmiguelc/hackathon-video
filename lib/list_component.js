import React from 'react'
import VideoComponent from 'lib/video_component'

export default class ListComponent extends React.Component {

  render() {
    var videos = this.props.videos.map( (el) => {
      return (
        <li><VideoComponent video={el} handleVideoClick={this.props.handleVideoClick} /></li>
      )
    });

    return (
      <ul className="video-list">{videos}</ul>
    )
  }
}
