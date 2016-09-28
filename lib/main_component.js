import React from 'react'
import ListComponent from 'lib/list_component'
import 'fetch'

export default class MainComponent extends React.Component {
  constructor(props) {
      super(props)
      this.state = {videos: this.fetchVideos()}
  }

  fetchVideos() {
    fetch("http://localhost:4567/")
      .then((response) => {
        return JSON.parse(response)
      }).catch((data) => console.log(data))
  }

  render() {
    return (
      <div>
        <ListComponent videos={this.state.videos}/>
      </div>
    )
  }
}
