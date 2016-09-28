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
      <div>
        <h1 className='title'>{this.props.video.title}</h1>
        <p className='description'>{this.props.video.description}</p>
      </div>
      </div>
    )
  }
}
