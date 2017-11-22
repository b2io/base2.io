import get from 'lodash/get';

const toNodesWithImage = data =>
  data.edges.map(({ node }) => ({
    ...node,
    image: get(node, 'image.childImageSharp'),
  }));

export { toNodesWithImage };
