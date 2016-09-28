import React from 'react'

export default class VideoComponent extends React.Component {

  render() {
    return (
      <div>{this.props.videoName}</div>
    )
  }
}
