import React from 'react'
import CommentComponent from 'lib/comment_component'

export default class CommentList extends React.Component {
    render() {
      var commentComponent = this.props.comments.map((comment) => { return (
        <CommentComponent comment={comment} onTimestampClick={this.props.timestampHandler} />
      )})
      return (<ul className="comment-list">{commentComponent}</ul>)
    }
}
