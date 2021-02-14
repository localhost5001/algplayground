import { Node } from '../node'

describe('Node', () => {
	it('should create valid node with null children', () => {
		const expectedVal = 5

		const treeNode = new Node(5)

		expect(treeNode.val).toBe(expectedVal)
		expect(treeNode.left).toBe(null)
		expect(treeNode.right).toBe(null)
	})

	it ('should create valid node with non-null children', () => {
		const expectedLeft = new Node(1)
		const expectedRight = new Node(2)
		const expectedVal = 5

		const treeNode = new Node(5, expectedLeft, expectedRight)

		expect(treeNode.val).toBe(expectedVal)
		expect(treeNode.left).toBe(expectedLeft)
		expect(treeNode.right).toBe(expectedRight)
	})
})