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
    let filteredList = this.props.titleList.filter(
      (item) => {return item.name.toLowerCase().indexOf(this.props.search) !== -1}
    )
    return (
      <div className="App">
        <div className="App">
          <ul>
            {filteredList.map((workGroupTitle, index) => {
              return (
                <li
                  key={index}
                  onClick={() => this.props.onWorkGroupTitleSelect(index)}
                >
                  {workGroupTitle.name}
                </li>
              )
            })}
          </ul>
        </div>
        <form onSubmit={this.onSubmit}>
          <input
            value={this.state.titlefieldvalue}
            onChange={(event) => this.setState({titlefieldvalue: event.target.value})}
          />
          <input type='submit' value='+'/>
        </form>
      </div>
    );
  }
}
