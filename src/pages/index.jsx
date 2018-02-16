import PropTypes from 'prop-types';
import React from 'react';
import { mapProps } from 'recompose';
import {
  ContactUs,
  GlobalNavigation,
  Hero,
  Main,
  ServiceList,
} from '../components';
import { toNodesWithImage } from '../util/graphql';

class IndexPage extends React.Component {
  static defaultProps = {};

  static propTypes = {
    services: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.node.isRequired,
        image: PropTypes.shape({}).isRequired,
        imgAlt: PropTypes.string.isRequired,
        heading: PropTypes.string.isRequired,
        subheading: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
      }),
    ).isRequired,
  };

  render() {
    const { services } = this.props;

    return (
      <Main>
        <GlobalNavigation />
        <Hero />
        <ServiceList>
          {services.map(service => (
            <ServiceList.Item {...service} key={service.id} />
          ))}
        </ServiceList>
        <ContactUs />
      </Main>
    );
  }
}

function mapPropsToProps({ data }) {
  return {
    services: toNodesWithImage(data.services),
  };
}

export default mapProps(mapPropsToProps)(IndexPage);

export const pageQuery = graphql`
  query IndexPageQuery {
    services: allServicesJson {
      edges {
        node {
          id
          image {
            childImageSharp {
              sizes {
                ...GatsbyImageSharpSizes_withWebp_noBase64
              }
            }
          }
          imgAlt
          heading
          subheading
          description
        }
      }
    }
  }
`;
