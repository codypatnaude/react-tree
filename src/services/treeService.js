import { v4 as uuid } from "uuid";

export class TreeService {
  buildTree(config) {
    console.log(config);
    return this.buildBinaryTree(config);
  }

  buildBinaryTree(config) {
    let root = null;
    let parents = [];
    let i = 0;
    let generation = 0;
    while (i < config.nodeCount) {
      const children = [];

      if (!root) {
        root = this._generateNode(generation);
        children.push(root);
        i++;
      }

      console.log(parents);
      for (let x = 0; x < parents.length; x++) {
        const parent = parents[x];
        console.log(parent);
        const left = this._generateNode(generation, parent);
        const right = this._generateNode(generation, parent);

        if (i < config.nodeCount) {
          parent.leftChild = left;
          children.push(left);
          i++;
        }

        if (i < config.nodeCount) {
          parent.rightChild = right;
          children.push(right);
          i++;
        }

        if (i >= config.nodeCount) {
          break;
        }
      }

      parents = children;
      generation++;
    }

    return root;
  }

  highlightChildren(node, tree) {
    console.log({ node, tree });
    this._setChildrenHighlightState(tree, false);
    this._setChildrenHighlightState(node);
    console.log(tree);
    return tree;
  }

  _setChildrenHighlightState(node, highlight = true) {
    node.highlight = highlight;

    if (node.leftChild) {
      this._setChildrenHighlightState(node.leftChild, highlight);
    }

    if (node.rightChild) {
      this._setChildrenHighlightState(node.rightChild, highlight);
    }
  }

  _removeHighlight;

  _generateNode(generation, parent = null) {
    return {
      parent,
      generation,
      id: uuid()
    };
  }
}
