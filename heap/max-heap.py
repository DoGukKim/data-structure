class MaxHeap:
    def __init__(self):
        self.heap = []

    def heapify_up(self, index):
        while index > 0:
            parent_index = (index - 1) // 2
            if self.heap[index] > self.heap[parent_index]:
                self.heap[index], self.heap[parent_index] = (
                    self.heap[parent_index],
                    self.heap[index],
                )
                index = parent_index
            else:
                break

    def insert(self, value):
        self.heap.append(value)
        self.heapify_up(len(self.heap) - 1)

    def heapify_down(self, index):
        while True:
            left_child_index = 2 * index + 1
            right_child_index = 2 * index + 2
            largest_index = index
            if (
                left_child_index < len(self.heap)
                and self.heap[left_child_index] > self.heap[largest_index]
            ):
                largest_index = left_child_index
            if (
                right_child_index < len(self.heap)
                and self.heap[right_child_index] > self.heap[largest_index]
            ):
                largest_index = right_child_index
            if largest_index != index:
                self.heap[index], self.heap[largest_index] = (
                    self.heap[largest_index],
                    self.heap[index],
                )
                index = largest_index
            else:
                break

    def extract_max(self):
        if len(self.heap) == 0:
            return None
        max_value = self.heap[0]

        if len(self.heap) == 1:
            return self.heap.pop()

        self.heap[0] = self.heap[-1]
        self.heap.pop()
        self.heapify_down(0)

        return max_value
