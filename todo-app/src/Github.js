import React, { Component } from 'react';

const userUrl = username => `https://api.github.com/users/${username}`

export default class Github extends Component {
  constructor (props) {
    super (props);
    this.state = {
      requestFailed: false
    }
  }

  componentWillMount() {
    //the best place to make network requests is componentDidMount, but...
    fetch(userUrl(this.props.username))
      .then(response => {
        if(!response.ok) {
          throw Error("Request failed")
        }
        return response
      })
      .then(data => data.json())
      .then(data => {this.setState({
        githubData: data
      })}, () => {
        this.setState({
          requestFailed: true
        })
      })
  }

  render() {
    if(this.state.requestFailed) return <p>Hmm...Try again..Failed...</p>
    if(!this.state.githubData) return <p>Loading...</p>
    return(
      <div>
        {this.state.githubData.name}
      </div>
    )
  }
}
