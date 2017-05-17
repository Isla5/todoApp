import React, { Component } from 'react';

export default class WorkList extends Component {
  constructor(){
    super();
    this.state = {
      itemFieldValue: '',
    }
  };

  onSubmit = (e) => {
    e.preventDefault()
    this.setState({
      itemFieldValue: '',
    });
    this.props.onItemAdd({work: this.state.itemFieldValue});
  }

  render() {
    return (
      <div className="App">
        <form onSubmit={this.onSubmit}>
          <input
            value={this.state.itemFieldValue}
            onChange={(event) => this.setState({itemFieldValue: event.target.value})}
          />
          <input type='submit' value='Add Title'/>
        </form>
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
