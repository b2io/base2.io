import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { TechnologiesList } from '../molecules';

const Wrapper = styled.div`
  color: magenta;
`;

class Technologies extends React.Component {
  static defaultProps = {};

  static propTypes = {
    technologies: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.node.isRequired,
        image: PropTypes.shape({}).isRequired,
        name: PropTypes.string.isRequired,
      }),
    ).isRequired,
  };

  render() {
    const { technologies } = this.props;

    return (
      <Wrapper id="technologies">
        <TechnologiesList>
          {technologies.map(technology => (
            <TechnologiesList.Item {...technology} key={technology.id} />
          ))}
        </TechnologiesList>
      </Wrapper>
    );
  }
}

export default Technologies;
