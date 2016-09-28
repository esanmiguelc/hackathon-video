import React from 'react'
import CommentList from 'lib/comment_list'

export default class PlayerComponent extends React.Component {

  render() {
    if (this.props.currentVideo) {
      return (
        <div>
        <div className='video-player'>
          <video src={this.props.currentVideo.video_url} controls></video>
          <div>
            <h1 className='title'>{this.props.currentVideo.title}</h1>
            <p className='description'>{this.props.currentVideo.description}</p>
          </div>
        </div>
        <CommentList />
        </div>
      )
    } else {
      return null
    }
  }
}
