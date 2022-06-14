const DFS = (graph, source) => {
  const stack = [source];

  while (stack.length > 0) {
    const current = stack.pop();
    for (const neighbor of graph[current]) {
      stack.push(neighbor);
    }
  }
};

const graph = {
  a: ["b", "c"],
  b: ["d"],
  c: ["e"],
  d: ["f"],
  e: [],
  f: [],
};

const result_1 = DFS(graph, "a");
console.log(result_1);

// recursive DFS
const recursiveDFS = (graph, source) => {
  for (const neighbor of graph[source]) {
    recursiveDFS(graph, neighbor);
  }
};

const result_2 = DFS(graph, "a");
console.log(result_2);
