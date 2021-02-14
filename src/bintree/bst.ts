import { Node } from './node'

export class BinarySearchTree {
    root: Node | null

    constructor(rootVal: number | null = null) {
        this.root = rootVal !== null ? new Node(rootVal) : null
    }

    Get(val: number): Node | null {
        return GetLoop(this.root, val)
    }

    Put(val: number): void {
        this.root = PutRecursive(this.root, val)
    }
}

export function GetRecursive(root: Node | null, val: number): Node | null {
    if (root === null) {
        return null
    }
    if (root.val === val) {
        return root
    }
    if (val > root.val) {
        return GetRecursive(root.right, val)
    } else {
        return GetRecursive(root.left, val)
    }
}

export function GetLoop(root: Node | null, val: number): Node | null {
    let node = root

    while (node !== null && node.val !== val) {
        if (node.val > val) {
            node = node.left
        } else if (node.val < val) {
            node = node.right
        }
    }

    return node
}

export function PutRecursive(root: Node | null, val: number): Node {
    if (root === null) {
        return new Node(val)
    }

    if (val < root.val) {
        root.left = PutRecursive(root.left, val)
    } else if (val > root.val) {
        root.right = PutRecursive(root.right, val)
    }

    return root
}

export function PutLoop(root: Node | null, val: number): Node {
    if (root === null) {
        root = new Node(val)
        return root
    }

    let node = root

    while(node.val !== val) {
        if (val < node.val) {
            if (node.left === null) {
                node.left = new Node(val)
                break
            }
            node = node.left
        } else if (val > node.val) {
            if (node.right === null) {
                node.right = new Node(val)
                break
            }
            node = node.right
        }
    }

    return root
}
