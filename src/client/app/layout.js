import React from 'react';
import { NavLink } from 'react-router-dom';

export default class Layout extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <div>
      <NavLink to="/index">首页</NavLink>
      <NavLink to="/list"  style={{ marginLeft: "10px" }}>列表页</NavLink>
      <div>{this.props.children}</div>
    </div>
  }
}