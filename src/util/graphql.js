import get from 'lodash/get';
import identity from 'lodash/identity';

const hoistChildImageSharp = node => ({
  ...node,
  image: get(node, 'image.childImageSharp'),
});

const toNodes = (data, mapNode = identity) =>
  data.edges.map(e => e.node).map(mapNode);

const toNodesWithImage = data => toNodes(data, hoistChildImageSharp);

export { toNodes, toNodesWithImage };
