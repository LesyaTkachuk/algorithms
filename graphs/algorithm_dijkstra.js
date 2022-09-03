const graph = {};
graph.a = { b: 2, c: 1 };
graph.b = { f: 7 };
graph.c = { d: 5, e: 2 };
graph.d = { f: 2 };
graph.e = { f: 1 };
graph.f = { g: 1 };
graph.g = {};

console.log("graph ", graph);
//First In First Out FIFO

function shortPath(graph, start, end) {
  let costs = {};
  let processedNodes = [];
  let neigbours = {};
  Object.keys(graph).forEach((node) => {
    if (node !== start) {
      let value = graph[start][node];
      costs[node] = value || 1_000_000_000;
    }
  });
  console.log("costs=", costs);
  let node = findNodeLowestCost(costs, processedNodes);
  console.log("node", node);

  while (node) {
    let cost = costs[node];
    neigbours = graph[node];
    Object.keys(neigbours).forEach((neigbour) => {
      let newCost = cost + neigbours[neigbour];
      if (newCost < costs[neigbour]) {
        costs[neigbour] = newCost;
      }
    });
    processedNodes.push(node);
    node = findNodeLowestCost(costs, processedNodes);
  }
  return costs;
}

function findNodeLowestCost(costs, processed) {
  let lowestCost = 1_000_000_000;
  let lowestNode;
  Object.keys(costs).forEach((node) => {
    let cost = costs[node];
    if (cost < lowestCost && !processed.includes(node)) {
      lowestCost = cost;
      lowestNode = node;
    }
  });
  return lowestNode;
}

console.log(shortPath(graph, "a", "g"));
// console.log(shortPath(graph, "a", "f"));
// console.log(shortPath(graph, "a", "n"));
