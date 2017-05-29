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
      search: ''
    }
  };

  onTitleAdd = (newTitle) => {
    const titleList = this.state.titleList;
    titleList.push(newTitle);
  }

  onWorkGroupTitleSelect = (selectedWorkGroupTitleIndex) => {
    this.setState({selectedWorkGroupTitleIndex});

  }

  onItemAdd = (newItem) => {
    const titleList = this.state.titleList.slice();
    const currentList = this.state.titleList[this.state.selectedWorkGroupTitleIndex];
    currentList.todos.push(newItem);
    const newList = currentList.todos;
    currentList.todos = _.sortBy(newList, (item) => {return item.checked});
    this.setState({titleList});
  }

  onCheckedChange = (titleId, itemId) => {
    const newList = this.state.titleList[titleId].todos;
    newList[itemId].checked = !newList[itemId].checked;
    const titleList = this.state.titleList.slice();
    titleList[titleId].todos = _.sortBy(newList, (item) => {return item.checked});
    this.setState({titleList});
  }

  filterList = (event) => {
    this.setState({
      search: event.target.value.substr(0,19)
    });
    console.log(this.state.titleList)
  }

  render() {
    let filteredList=this.state.titleList
    return (
      <div className="App">
        <input
          type="text"
          value={this.state.search}
          onChange={this.filterList}
        />
        <TitleForm
          onWorkGroupTitleSelect={this.onWorkGroupTitleSelect}
          titleList={this.state.titleList}
          search={this.state.search.toLowerCase()}
          onTitleAdd={this.onTitleAdd}
        />
        <WorkList
          selectedWorkGroupTitleIndex={this.state.selectedWorkGroupTitleIndex}
          onCheckedChange={this.onCheckedChange}
          titleList={this.state.titleList}
          checked={this.state.checked}
          onItemAdd={this.onItemAdd}
        />
      </div>
    )
  }
}
