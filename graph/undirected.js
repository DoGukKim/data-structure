const undirectedPath = (edges, source, destination) => {
  const graph = buildGraph(edges);
  return hasPath(graph, source, destination, new Set());
};

const hasPath = (graph, source, destination, visited) => {
  if (source === destination) return true;
  if (visited.has(source)) return false;

  visited.add(source);

  for (const neighbor of graph[source]) {
    if (hasPath(graph, neighbor, destination, visited) === true) {
      return true;
    }
  }

  return false;
};

const buildGraph = (edges) => {
  const graph = {};
  for (const edge of edges) {
    const [a, b] = edge;
    if (!(a in graph)) graph[a] = [];
    if (!(b in graph)) graph[b] = [];
    graph[a].push(b);
    graph[b].push(a);
  }

  return graph;
};

const edges = [
  ["i", "j"],
  ["k", "i"],
  ["m", "k"],
  ["k", "l"],
  ["o", "n"],
];

console.log(undirectedPath(edges, "i", "o"));
