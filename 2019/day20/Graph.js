class Graph {
  // https://www.geeksforgeeks.org/implementation-graph-javascript/
  
  constructor (numberOfNodes) {
    this.numberOfNodes = numberOfNodes;
    this.AdjList = new Map();
  }

  addVertex(v) {
    this.AdjList.set(v, []);
  }
  addEdge(v, w) {
    this.AdjList.get(v).push(w);
    this.AdjList.get(w).push(v);
  }
  printGraph() {
    const get_keys = this.AdjList.keys();
    for (var i of get_keys) {
      const values = this.AdjList.get(i);
      const conc = '';

      for(let j of values) {
        conc = `${conc}${j} `;
      }
      console.log(i + " -> " + conc); 
    }
  }
}
export default Graph;