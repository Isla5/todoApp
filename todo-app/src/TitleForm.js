import React, { Component } from 'react';
import './App.css';

export default class App extends Component {
  constructor(){
    super();
    this.state = {
      titlefieldvalue: '',
    }
  };

  onSubmit = (e) => {
    e.preventDefault()
    this.setState({
      titlefieldvalue: '',
    });
    this.props.onTitleAdd({name: this.state.titlefieldvalue, todos: []});
  }

  render() {
    return (
      <div className="App">
        <form onSubmit={this.onSubmit}>
          <input
            value={this.state.titlefieldvalue}
            onChange={(event) => this.setState({titlefieldvalue: event.target.value})}
          />
          <input type='submit' value='Add Title'/>
        </form>
        <div className="App">
          <ul>
            {this.props.titleList.map((workGroupTitle, index) => {
              return (
                <li
                  key={index}
                  onClick={() => this.props.onWorkGroupTitleSelect(index)}>
                  {workGroupTitle.name}
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    );
  }
}
