import React from 'react'
import ReactDOM from 'react-dom'

export default class VideoComponent extends React.Component {

  handleClick() {
    this.props.handleVideoClick(this.props.video)
  }

  componentDidMount() {
    ReactDOM.findDOMNode(this).addEventListener("click", this.handleClick.bind(this))
  }

  componentWillUnmount() {
    ReactDOM.findDOMNode(this).removeEventListener("click", this.handleClick.bind(this))
  }

  render() {
    return (
      <div className="video-element">
        <div>{this.props.video.title}</div>
        <div>{this.props.video.description}</div>
        <div>{this.props.video.video_url}</div>
      </div>
    )
  }
}
