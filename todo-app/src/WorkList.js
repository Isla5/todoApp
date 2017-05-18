import React, { PureComponent } from 'react';
import _ from "lodash"

export default class WorkList extends PureComponent {
  constructor(){
    super();
    this.state = {
      itemFieldValue: '',
    }
  };

  componentDidMount(){
    console.log()
  }

  onSubmit = (e) => {
    e.preventDefault();
    this.setState({
      itemFieldValue: '',
    });
    this.props.onItemAdd({work: this.state.itemFieldValue, checked: false});
  }

  render() {
    return (
      <div className="App">
        <div className ="checkedStatus">
          {_.filter(this.props.titleList[this.props.selectedWorkGroupTitleIndex].todos, (item) => {return item.checked == true}).length} of {this.props.titleList[this.props.selectedWorkGroupTitleIndex].todos.length}  done
        </div>
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
        <form onSubmit={this.onSubmit}>
          <input
            value={this.state.itemFieldValue}
            onChange={(event) => this.setState({itemFieldValue: event.target.value})}
          />
          <input type='submit' value='+'/>
        </form>
      </div>
    );
  }
}
