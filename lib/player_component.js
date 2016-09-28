import React from 'react'

export default class PlayerComponent extends React.Component {

  render() {
    if (this.props.currentVideo) {
      return (
        <div className='video-player'>
          <video src={this.props.currentVideo.video_url} controls loop></video>
          <div className='title'>{this.props.currentVideo.title}</div>
          <div className='description'>{this.props.currentVideo.description}</div>
          <div className='url'>{this.props.currentVideo.video_url}</div>
        </div>
      )
    } else {
      return null
    }
  }
}
