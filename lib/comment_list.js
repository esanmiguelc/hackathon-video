import React from 'react'

export default class CommentList extends React.Component {
    comments() {
      return [{text: "blah", author: "Eli", time: 3}];
    }

    timeClick(e) {
      e.preventDefault()
      var time = e.target.dataset.time
      this.props.timestampHandler(time)
    }

    render() {
      var commentComponent = this.comments().map((comment) => { return (
        <div>
          <a onClick={this.timeClick.bind(this)} href="#" data-time={comment.time}>({comment.time})</a> {comment.text} - {comment.author}
        </div>
      )})
      return (<ul className="comment-list">{commentComponent}</ul>)
    }
}
