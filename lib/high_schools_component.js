import React from 'react'

export default class HighSchoolsComponent extends React.Component {
  onSchoolClick(e) {
    var schoolId = e.target.dataset.id
    this.props.handleSchoolClick(schoolId)
  }

  render() {
    var keys = Object.keys(this.props.highSchools)
    var highSchools = keys.map((key) => {
      var school = this.props.highSchools[key]
      return (
        <li onClick={this.onSchoolClick.bind(this)} data-id={school.id}>{school.name} ({school.count})</li>
      )
    })
    return(
      <ul>
        {highSchools}
      </ul>
    )
  }
}
