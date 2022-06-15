// const hasPath = (graph, source, destination) => {
//   if (source === destination) return true;

//   for (const neighbor of graph[source]) {
//     if (hasPath(graph, neighbor, destination) === true) {
//       return true;
//     }
//   }

//   return false;
// };

const hasPath = (graph, source, destination) => {
  const queue = [source];

  while (queue.length > 0) {
    const current = queue.shift();

    if (current === destination) return true;

    for (const neighbor of graph[current]) {
      queue.push(neighbor);
    }
  }

  return false;
};
