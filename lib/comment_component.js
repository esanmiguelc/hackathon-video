import React from 'react'

export default class CommentComponent extends React.Component {

  prettySeconds(longSeconds){
    var decimalCut = Math.floor(longSeconds);
    var minutes = Math.floor(decimalCut/60);
    var seconds = decimalCut - (minutes * 60);
    if(seconds < 10){
      seconds = "0" + seconds;
    };
    return minutes + ":" + seconds;
  }

  timeClick(e) {
    e.preventDefault()
    var time = e.target.dataset.time
    this.props.onTimestampClick(time)
  }

  render() {
    return (
      <li className="comment">
        <a onClick={this.timeClick.bind(this)}
           href="#"
           data-time={this.props.comment.time}>
           ({this.prettySeconds(this.props.comment.time)})
        </a>&nbsp;
        {this.props.comment.text} - {this.props.comment.author}
      </li>
    )
  }
}
