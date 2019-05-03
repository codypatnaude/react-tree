import React, { Component } from "react";

export class Child extends Component {
  handleClick() {
    this.props.highlightChildren(this.props.node);
  }
  render() {
    return (
      <div
        className={"child " + (this.props.node.highlight ? "highlight" : "")}
        onClick={this.handleClick.bind(this)}
      >
        child
      </div>
    );
  }
}
