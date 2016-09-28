import React from 'react'

export default class CommentList extends React.Component {
    render() {
      var comments = [{text: "blah", author: "Eli", time: 3}]
      var commentComponent = comments.map((comment) => { return (
        <div>
          ({comment.time}) {comment.text} - {comment.author}
        </div>
      )})
      return (<ul className="comment-list">{commentComponent}</ul>)
    }
}
