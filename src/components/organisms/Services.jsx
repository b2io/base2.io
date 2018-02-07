import PropTypes from 'prop-types';
import React from 'react';
import { mapProps } from 'recompose';
import { ServiceList } from '../molecules';
import { toNodesWithImage } from '../../util/graphql';

class Services extends React.Component {
  static defaultProps = {};

  static propTypes = {
    services: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.node.isRequired,
      }),
    ).isRequired,
  };

  render() {
    const { services } = this.props;

    return (
      <ServiceList>
        {services.map(service => (
          <ServiceList.Item {...service} key={service.id} />
        ))}
      </ServiceList>
    );
  }
}

function mapPropsToProps({ data }) {
  return {
    services: toNodesWithImage(data.services),
  };
}

export default mapProps(mapPropsToProps)(Services);

export const pageQuery = graphql`
  query ServicesQuery {
    services {
      edges {
        node {
          id
          image
          imgAlt
          heading
          subheading
          description
        }
      }
    }
  }
`;
