import React, { Component } from "react";

export class NodeForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nodeCount: 12
    };
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.buildTree(Object.assign({}, this.state));
  }

  handleOnChange(event) {
    console.log(event.target);
    this.setState({ [event.target.name]: event.target.value });
  }

  render() {
    return (
      <div className="input-form">
        <form onSubmit={this.handleSubmit.bind(this)}>
          <div className="form-group">
            <label htmlFor="node-count"># of nodes</label>
            <input
              id="node-count"
              type="number"
              name="nodeCount"
              value={this.state.nodeCount}
              //onKeyUp={this.handleOnChange.bind(this)}
              onChange={this.handleOnChange.bind(this)}
            />
          </div>
          <input type="submit" value="Build the Tree" />
        </form>
      </div>
    );
  }
}
