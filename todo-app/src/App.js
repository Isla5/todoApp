import React, { PureComponent } from 'react';
import TitleForm from './TitleForm';
import WorkList from './WorkList';
import _ from 'lodash';

export default class App extends PureComponent {
  constructor(){
    super();
    this.state = {
      titleList: [
        {
          name: 'Work',
          todos: [
            {work: 'work1', checked: false},
            {work: 'work2', checked: false},
            {work: 'work3', checked: false},
            {work: 'work4', checked: false},
          ]
        },
        {
          name: 'Private',
          todos: [
            {work: 'priv1', checked: false},
            {work: 'priv2', checked: false}
          ]
        }
      ],
      selectedWorkGroupTitleIndex: 0,
    }
  };

  onTitleAdd = (newTitle) => {
    let titleList = this.state.titleList;
    titleList.push(newTitle);
  }

  onWorkGroupTitleSelect = (selectedWorkGroupTitleIndex) => {
    this.setState({selectedWorkGroupTitleIndex});
    console.log(this.state.titleList[selectedWorkGroupTitleIndex])
  }

  onItemAdd = (newItem) => {
    let currentList = this.state.titleList[this.state.selectedWorkGroupTitleIndex];
    currentList.todos.push(newItem);
  }

  onCheckedChange = (titleId, itemId) => {
    console.log(this.state.titleList[titleId].todos[itemId].checked)
    const newList = this.state.titleList[titleId].todos;
    newList[itemId].checked = !newList[itemId].checked;
    const titleList = this.state.titleList.slice();
    titleList[titleId].todos = _.sortBy(newList, (item) => {return item.checked});
    this.setState({titleList});
    console.log(this.state.titleList[titleId].todos[itemId].checked);
    console.log(titleId, itemId);
    console.log(_.sortBy(newList, (item) => {return item.checked}))
  }

  render() {
    return (
      <div className="App">
        <TitleForm
          onTitleAdd={this.onTitleAdd}
          titleList={this.state.titleList}
          onWorkGroupTitleSelect={this.onWorkGroupTitleSelect}/>
        <WorkList
          checked={this.state.checked}
          onCheckedChange={this.onCheckedChange}
          titleList={this.state.titleList}
          selectedWorkGroupTitleIndex={this.state.selectedWorkGroupTitleIndex}
          onItemAdd={this.onItemAdd}/>
      </div>
    )
  }
}
