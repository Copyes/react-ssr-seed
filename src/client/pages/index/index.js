import React from 'react';

export default class Index extends React.Component {
  constructor(props) {
    super(props);
  }

  handleClick = () => {
    console.log(1111);
  }

  render() {
    return <h1 onClick={this.handleClick}>click here</h1>
  }
}