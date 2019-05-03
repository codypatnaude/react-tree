import React, { Component } from "react";
import { Child } from "./child";

export class TreeView extends Component {
  render() {
    if (!this.props.tree) {
      return <div>No tree</div>;
    }
    const generations = [];
    const maxGen = this.getMaxGeneration(this.props.tree) + 1;
    for (let i = 0; i < maxGen; i++) {
      const currentGen = this.getGeneration(i, this.props.tree);
      generations.push(currentGen);
    }
    let scale = 1;

    return (
      <div>
        <div>{maxGen} Generations</div>
        <div className="tree-view">
          {generations.map((gen, genIndex) => {
            const curScale = scale;
            scale = scale * 0.75;
            return (
              <div
                className="generation"
                key={genIndex}
                style={{ transform: "scale(" + curScale + ")" }}
              >
                {gen.map((child, childIndex) => (
                  <Child
                    key={childIndex}
                    node={child}
                    highlightChildren={this.props.highlightChildren}
                  />
                ))}
              </div>
            );
          })}
        </div>
      </div>
    );
  }

  getMaxGeneration(node) {
    const generations = [node.generation];
    if (node.leftChild) {
      generations.push(this.getMaxGeneration(node.leftChild));
    }
    if (node.rightChild) {
      generations.push(this.getMaxGeneration(node.rightChild));
    }

    return generations.reduce((max, curr) => (max > curr ? max : curr), 0);
  }

  getGeneration(target, node) {
    let members = [];
    if (node.generation === target) {
      members.push(node);
    } else if (node.generation < target) {
      if (node.leftChild) {
        const leftMembers = this.getGeneration(target, node.leftChild);
        members = [...members, ...leftMembers];
      }
      if (node.rightChild) {
        const rightMembers = this.getGeneration(target, node.rightChild);
        members = [...members, ...rightMembers];
      }
    }

    return members;
  }
}
