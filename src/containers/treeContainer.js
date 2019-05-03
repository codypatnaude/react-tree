import React, { Component } from "react";
import { NodeForm } from "../components/nodeForm";
import { TreeService } from "../services/treeService";
import { TreeView } from "../components/treeView";

export class TreeContainer extends Component {
  constructor(props) {
    super(props);
    this.treeService = new TreeService();
    this.state = { tree: null };
  }

  buildTree = config => {
    const tree = this.treeService.buildTree(config);
    console.log(tree);
    this.setState({ tree });
  };

  highlightChildren(node) {
    console.log("highlighting");
    console.log(node);
    const tree = this.treeService.highlightChildren(node, this.state.tree);
    this.setState({ tree });
  }

  render() {
    return (
      <div className="tree-container">
        <NodeForm buildTree={this.buildTree.bind(this)} />
        <TreeView
          tree={this.state.tree}
          highlightChildren={this.highlightChildren.bind(this)}
        />
      </div>
    );
  }
}
