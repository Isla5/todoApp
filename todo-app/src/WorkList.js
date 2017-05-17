import React, { Component } from 'react';

export default class WorkList extends Component {

  componentDidUpdate () {
    console.log(this.props.titleList[this.props.selectedWorkGroupTitleIndex].todos)
  }

  render() {
    return (
      <div className="App">
        <ul>
          {this.props.titleList[this.props.selectedWorkGroupTitleIndex].todos.map((currentWorklist, index) => {
            return (
              <li key={currentWorklist.work}>
                {currentWorklist.work}
              </li>
            )
          })}
        </ul>
      </div>
    );
  }
}
