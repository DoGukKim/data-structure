class MinHeap:
    def __init__(self):
        self.heap = []

    def heapify_up(self, index):
        while index > 0:
            parent_index = (index - 1) // 2

            if self.heap[index] < self.heap[parent_index]:
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
            smallest_index = index
            if (
                left_child_index < len(self.heap)
                and self.heap[left_child_index] < self.heap[smallest_index]
            ):
                smallest_index = left_child_index
            if (
                right_child_index < len(self.heap)
                and self.heap[right_child_index] < self.heap[smallest_index]
            ):
                smallest_index = right_child_index
            if smallest_index != index:
                self.heap[index], self.heap[smallest_index] = (
                    self.heap[smallest_index],
                    self.heap[index],
                )
                index = smallest_index
            else:
                break

    def extract_min(self):
        if len(self.heap) == 0:
            return None
        min_value = self.heap[0]
        self.heap[0] = self.heap[-1]
        self.heap.pop()
        self.heapify_down(0)
        return min_value


mh = MinHeap()
mh.insert(50)
mh.insert(20)
mh.insert(40)
mh.insert(30)
mh.insert(10)
print(mh.heap)
print(mh.extract_min())
print(mh.extract_min())
print(mh.extract_min())
print(mh.heap)
