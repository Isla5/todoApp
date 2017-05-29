import React, { PureComponent } from 'react';

export default class Stopwatch extends PureComponent {
  constructor () {
    super();
    this.state={
      initSeconds: 0,
    }
  };

  handleStartClick = () => {
    this.increment = setInterval( () => {this.setState({initSeconds: this.state.initSeconds+1})}, 1000)
  }

  handleStopClick = () => {
    clearInterval(this.increment)
  }

  getSeconds = () => {
    //or--- return ('0' + this.state.initSeconds % 60).slice(-2)
    if ( this.state.initSeconds % 60 < 10 ) {
      return '0' + this.state.initSeconds % 60} else {
        return this.state.initSeconds % 60
    }
  }

  getMinutes = () => {
    return (Math.floor(this.state.initSeconds / 60 % 60))
  }

  getHours = () => {
    return Math.floor(this.state.initSeconds/3600)
  }

  render() {
    return(
      <div>
        <p> {this.getHours()} h : {this.getMinutes()} m : {this.getSeconds()} s </p>
        <button
          type='button'
          style = {{marginRight: 10, borderRadius: 5}}
          onClick={this.handleStartClick}>
          super button to start:DDD
        </button>
        <button
          type='button'
          style = {{borderRadius: 5}}
          onClick={this.handleStopClick}>
          oops, stop the stopwatch
        </button>
      </div>
    )
  }
}
