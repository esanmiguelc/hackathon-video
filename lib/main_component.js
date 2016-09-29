import React from 'react'
import ListComponent from 'lib/list_component'
import PlayerComponent from 'lib/player_component'
import HighSchoolsComponent from 'lib/high_schools_component'
import 'fetch'

export default class MainComponent extends React.Component {
  constructor(props) {
    super(props)
    this.state = {videos: [], currentVideo: null, highSchools: {}}
  }

  componentWillMount() {
    this.fetchHighSchools(this);
  }

  fetchHighSchools(context) {
    fetch("http://localhost:3000/recruit/searches/videos")
      .then((response) => {
        return response.json()
      })
      .then((body) => {
        var highSchools = body.high_school_facet;
        context.setState({highSchools: highSchools})
      })
      .catch((response) => { console.log('error', response)})
  }

  fetchVideos(context, schoolId) {
    var url = `http://localhost:3000/recruit/searches/videos?high_school_id=${schoolId}`
    fetch(url)
      .then((response) => {return response.json()})
      .then((data) => context.setState({videos: data.results}))
      .catch((data) => console.log(data))
  }

  handleVideoClick(currentVideo) {
    this.setState({currentVideo: currentVideo})
  }

  handleSchoolClick(schoolId) {
    this.fetchVideos(this, schoolId)
  }

  render() {
    var player = this.state.currentVideo ? <PlayerComponent currentVideo={this.state.currentVideo} /> : null;
    return (
      <div className='container'>
        <div className='left-column'>
          <HighSchoolsComponent highSchools={this.state.highSchools} handleSchoolClick={this.handleSchoolClick.bind(this)}/>
        </div>
        <div className='right-column'>
          {player}
          <ListComponent videos={this.state.videos} handleVideoClick={this.handleVideoClick.bind(this)}/>
        </div>
      </div>
    )
  }
}
