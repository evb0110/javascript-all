// create an array with nodes
var nodes = new vis.DataSet([
  { id: 1, group: 'myGroup', label: '   1   ' },
  { id: 2, group: 'myGroup', label: '   2   ' },
  { id: 3, label: '   3   ' },
  { id: 4, label: '   4   ' },
  { id: 5, label: '   5   ' },
]);

// create an array with edges
var edges = new vis.DataSet([
  { from: 1, to: 3 },
  { from: 1, to: 5 },
  { from: 1, to: 4 },
  { from: 1, to: 2 },
  { from: 2, to: 4 },
  { from: 5, to: 4 },
  { from: 3, to: 4 },
  { from: 2, to: 5 },
  { from: 3, to: 5 },
]);

// create a network
var container = document.getElementById('mynetwork');

// provide the data in the vis format
var data = {
  nodes,
  edges,
};
var options = {
  interaction: {
    hover: true,
    hideEdgesOnDrag: true,
  },
  groups: {
    myGroup: {
      color: {
        background: 'red',
        border: 'green',
        hover: {
          background: 'yellow',
        },
      },
      borderWidth: 3,
    },
  },

};

// initialize your network!
var network = new vis.Network(container, data, options);
network.setOptions(options);
