import React from 'react'
import CommentList from 'lib/comment_list'
import CommentRepo from 'lib/comment_repo'
import CommentBox from 'lib/comment_box'

export default class PlayerComponent extends React.Component {
  constructor(props) {
    super(props)
    this.state = ({comments: [], commentRepo: new CommentRepo})
  }

  handleTime(time) {
    document.getElementById('currentVideo').currentTime = time
  }

  currentTime() {
    return document.getElementById('currentVideo').currentTime
  }

  onTimeLapse() {
    var comments = this.state.commentRepo.getCommentsForVideoAtTime(this.props.currentVideo.video_id, this.currentTime())
    this.setState({comments: comments})
  }

  componentDidMount() {
    this.timeoutId = window.setInterval(this.onTimeLapse.bind(this), 500)
  }

  componentWillUnmount() {
    window.clearInterval(this.timeoutId)
  }

  storeComment(text, commenterName) {
    var currentTime = this.currentTime()
    this.state.commentRepo.saveCommentForVideo(this.props.currentVideo.video_id, {text: text, author: commenterName, time: currentTime})
    var comments = this.state.commentRepo.getCommentsForVideoAtTime(this.props.currentVideo.video_id, currentTime)
    this.setState({comments: comments})
  }

  render() {
    var athleteName = this.props.currentVideo.first_name + ' ' + this.props.currentVideo.last_name
    var transcoding = this.props.currentVideo.video_transcodings[0]

    return (
      <div>
        <div className='video-player'>
        <video id='currentVideo' src={transcoding.url} type={transcoding.mime_type} controls></video>
        <div>
          <h1 className='title'>{athleteName}</h1>
        </div>
        <CommentBox storeComment={this.storeComment.bind(this)}/>
      </div>
      <CommentList timestampHandler={this.handleTime} comments={this.state.comments} />
      </div>
    )
  }
}
