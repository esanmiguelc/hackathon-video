import React from 'react'

export default class CommentBox extends React.Component {
  onSubmit(e) {
    e.preventDefault()
    var form = e.target;
    var formData = new FormData(form)
    var text = formData.get('text')
    var commenterName = formData.get('commenterName')
    form.reset()

    this.props.storeComment(text, commenterName)
  }

  render() {
    return(
      <form onSubmit={this.onSubmit.bind(this)}>
        <textarea className="comment-input" name='text' placeholder='Write your comment here'></textarea>
        <input className="commenter-name" name='commenterName' placeholder='Name' />
        <button className="comment-submit" type='submit'>Submit</button>
      </form>
    )
  }
}
