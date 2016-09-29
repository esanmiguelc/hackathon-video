import React from 'react'
import CommentList from 'lib/comment_list'

export default class PlayerComponent extends React.Component {
  constructor(props) {
    super(props)
    this.state = ({comments: []})
  }
  handleTime(time) {
      document.getElementById('currentVideo').currentTime = time
  }

  currentVideoTime() {
    var currentTime = document.getElementById('currentVideo').currentTime
    var comments = [
      {text: "blah", author: "Eli", time: 1},
      {text: "BOOOM", author: "Logan", time: 2},
      {text: "blah", author: "JP", time: 3},
      {text: "YOLO", author: "Emmanuel", time: 4},
      {text: "blah", author: "Eli", time: 5}
    ].filter((comment) => {
      return comment.time <= currentTime
    })
    this.setState({comments: comments})
  }

  componentDidMount() {
    this.timeoutId = window.setInterval(this.currentVideoTime.bind(this), 1000)
  }

  componentWillUnmount() {
    window.clearInterval(this.timeoutId)
  }

  render() {
      return (
        <div>
        <div className='video-player'>
          <video id='currentVideo' src={this.props.currentVideo.video_url} controls></video>
          <div>
            <h1 className='title'>{this.props.currentVideo.title}</h1>
            <p className='description'>{this.props.currentVideo.description}</p>
          </div>
        </div>
          <CommentList timestampHandler={this.handleTime} comments={this.state.comments} />
        </div>
      )
  }
}
