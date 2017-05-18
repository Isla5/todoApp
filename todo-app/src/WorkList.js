import React, { PureComponent } from 'react';

export default class WorkList extends PureComponent {
  constructor(){
    super();
    this.state = {
      itemFieldValue: '',
    }
  };

  onSubmit = (e) => {
    e.preventDefault();
    console.log(this.props);
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
              <li key={index}>
                {currentWorklist.work}
                <input type='checkbox' checked={this.props.titleList[this.props.selectedWorkGroupTitleIndex].todos[index].checked} value="None" onChange={() => this.props.onCheckedChange(this.props.selectedWorkGroupTitleIndex, index) }/>
              </li>
            )
          })}
        </ul>
      </div>
    );
  }
}
