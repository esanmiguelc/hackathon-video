import React from 'react'

export default class CommentComponent extends React.Component {

  timeClick(e) {
    e.preventDefault()
    var time = e.target.dataset.time
    this.props.onTimestampClick(time)
  }

  render() {
    return (
      <div>
        <a onClick={this.timeClick.bind(this)}
           href="#"
           data-time={this.props.comment.time}>
           ({this.props.comment.time})
        </a>
        {this.props.comment.text} - {this.props.comment.author}
      </div>
    )
  }
}
