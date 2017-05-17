import React, { Component } from 'react';
import TitleForm from './TitleForm';
import WorkList from './WorkList'

export default class App extends Component {
  constructor(){
    super();
    this.state = {
      titleList: [
        {
          name: 'Work',
          todos: [
            {work: 'work1'},
            {work: 'work2'}
          ]
        },
        {
          name: 'Private',
          todos: [
            {work: 'priv1'},
            {work: 'priv2'}
          ]
        }
      ],
      selectedWorkGroupTitleIndex: 0
    }
  };

  onTitleAdd = (newTitle) => {
    let titleList = this.state.titleList;
    titleList.push(newTitle);
    console.log(this.state.titleList);
  }

  onWorkGroupTitleSelect = (selectedWorkGroupTitleIndex) => {
    this.setState({selectedWorkGroupTitleIndex});
    console.log(this.state.titleList[selectedWorkGroupTitleIndex])
  }

  render() {
    return (
      <div className="App">
        <TitleForm
          onTitleAdd={this.onTitleAdd}
          titleList={this.state.titleList}
          onWorkGroupTitleSelect={this.onWorkGroupTitleSelect}/>
        <WorkList titleList={this.state.titleList} selectedWorkGroupTitleIndex={this.state.selectedWorkGroupTitleIndex}/>
      </div>
    )
  }
}
