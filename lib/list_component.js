import React from 'react'
import VideoComponent from 'lib/video_component'

export default class ListComponent extends React.Component {

  render() {
    var videos = this.props.videos.map( (el) => {
      return (
        <VideoComponent videoName={el} />
      )
    });

    return (
      <div>
        <div>I am a List</div>
        {videos}
      </div>
    )
  }
}
