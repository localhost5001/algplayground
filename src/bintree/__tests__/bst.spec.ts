import { BinarySearchTree } from '../bst'
describe('BinarySearchTree', () => {
    it ('constructor should return a new bst with a non-null root value', () => {
        const bst = new BinarySearchTree(1)

        expect(bst.root.val).toBe(1)
        expect(bst.root.left).toBe(null)
        expect(bst.root.right).toBe(null)
    })

    it ('constructor should return a new bst with null root value', () => {
        const bst = new BinarySearchTree(null)

        expect(bst.root).toBe(null)
    })

    it ('put should build a valid binary search tree', () => {
        const bst = new BinarySearchTree(null)
        
        bst.Put(4)
        bst.Put(2)
        bst.Put(5)

        expect(bst.root.val).toBe(4)
        expect(bst.root.left.val).toBe(2)
        expect(bst.root.right.val).toBe(5)
    })

    it ('put should build a valid binary search tree', () => {
        const bst = new BinarySearchTree(7)

        bst.Put(2)
        bst.Put(9)
        bst.Put(9)
        bst.Put(4)
        bst.Put(6)
        bst.Put(3)
        bst.Put(8)
        bst.Put(20)

        expect(bst.root.left.val).toBe(2)
        expect(bst.root.left.right.left.val).toBe(3)
        expect(bst.root.left.right.right.val).toBe(6)

        expect(bst.root.right.val).toBe(9)
        expect(bst.root.right.right.val).toBe(20)
        expect(bst.root.right.left.val).toBe(8)
    })

    it ('get should return valid node', () => {
        const bst = new BinarySearchTree(7)

        bst.Put(2)
        bst.Put(9)
        bst.Put(4)
        bst.Put(6)
        bst.Put(3)
        bst.Put(8)
        bst.Put(20)

        expect(bst.Get(2).val).toBe(2)
        expect(bst.Get(3).val).toBe(3)
        expect(bst.Get(6).val).toBe(6)

        expect(bst.Get(9).val).toBe(9)
        expect(bst.Get(20).val).toBe(20)
        expect(bst.Get(8).val).toBe(8)

        expect(bst.Get(11)).toBeNull()
    })
})