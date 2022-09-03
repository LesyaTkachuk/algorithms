const graph = {};
graph.a = ["b", "c"];
graph.b = ["f"];
graph.c = ["d", "e"];
graph.d = ["f"];
graph.e = ["f"];
graph.f = ["g"];

console.log("graph ", graph);
//First In First Out FIFO

function breadthSearch(graph, start, end) {
  let count = 0;
  let queue = [];
  queue.push(start);
  while (queue.length > 0) {
    const current = queue.shift();
    if (!graph[current]) {
      graph[current] = [];
    }
    if (graph[current].includes(end)) {
      console.log("count=", count);
      return true;
    } else {
      queue = [...queue, ...graph[current]];
    }
    count += 1;
  }
  console.log("count=", count);
  return false;
}

console.log(breadthSearch(graph, "a", "g"));
console.log(breadthSearch(graph, "a", "f"));
console.log(breadthSearch(graph, "a", "n"));
