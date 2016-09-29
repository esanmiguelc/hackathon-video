import React from 'react'
import ListComponent from 'lib/list_component'
import PlayerComponent from 'lib/player_component'
import 'fetch'

export default class MainComponent extends React.Component {
  constructor(props) {
    super(props)
    this.state = {videos: [], currentVideo: null}
    this.fetchVideos(this)
  }

  fetchVideos(context) {
    fetch("http://localhost:4567/endpoint")
      .then((response) => {return response.json()})
      .then((videos) => context.setState({videos: videos}))
      .catch((data) => console.log(data))
  }

  handleVideoClick(currentVideo) {
    this.setState({currentVideo: currentVideo})
  }

  render() {
    var player = this.state.currentVideo ? <PlayerComponent currentVideo={this.state.currentVideo} /> : null;
    return (
      <div className='container'>
        {player}
        <ListComponent videos={this.state.videos} handleVideoClick={this.handleVideoClick.bind(this)}/>
      </div>
    )
  }
}
