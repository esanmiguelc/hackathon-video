import React from 'react'
import ListComponent from 'lib/list_component'
import PlayerComponent from 'lib/player_component'
import 'fetch'

export default class MainComponent extends React.Component {
  constructor(props) {
    super(props)
    this.state = {videos: [], current_video: null}
    this.fetchVideos(this)
  }

  fetchVideos(context) {
    fetch("http://localhost:4567/endpoint")
      .then((response) => return response.json())
      .then((videos) => context.setState({videos: videos}))
      .catch((data) => console.log(data))
  }

  render() {
    return (
      <div className='container'>
        <PlayerComponent video={this.state.current_video} />
        <ListComponent videos={this.state.videos}/>
      </div>
    )
  }
}
