import { Node } from './node'

export function InOrderTraversal(node: Node) {
    if (!node) {
        return
    }
    InOrderTraversal(node.left)
    console.log(node.val)
    InOrderTraversal(node.right)
}

export function PreOrderTraversal(node: Node) {
    if (!node) {
        return
    }
    console.log(node.val)
    PreOrderTraversal(node.left)
    PreOrderTraversal(node.right)
}

export function PostOrderTraversal(node: Node) {
    if (!node) {
        return
    }
    PreOrderTraversal(node.left)
    PreOrderTraversal(node.right)
    console.log(node.val)
}
