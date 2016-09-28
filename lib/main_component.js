import React from 'react'
import ListComponent from 'lib/list_component'

export default class MainComponent extends React.Component {

  render() {
    var videos = ['a', 'b', 'c'];
    return (
      <div>
        <div>Hello World</div>
        <ListComponent videos={videos}/>
      </div>
    )
  }
}
