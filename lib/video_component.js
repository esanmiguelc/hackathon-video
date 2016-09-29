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
    var athleteName = this.props.video.first_name + ' ' + this.props.video.last_name
    var imageStyle = {backgroundImage: `url(${this.props.video.video_thumbnail_url})`}

    return (
      <div className="video-element">
      <div>
        <div className='fallback-video-thumbnail'>
          <div className='video-thumbnail' style={imageStyle}></div>
        </div>
        <h1 className='title'>{athleteName}</h1>
      </div>
      </div>
    )
  }
}
