import React from 'react'

export default class VideoComponent extends React.Component {

  render() {
    return (
      <div className="video-element">
        <div>{this.props.video.title}</div>
        <div>{this.props.video.description}</div>
        <div>{this.props.video.video_url}</div>
      </div>
    )
  }
}
