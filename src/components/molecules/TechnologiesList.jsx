import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Img, UL, LI } from '../atoms';

const TechnologiesList = styled(UL)`
  list-style: none;
  margin: 3em 0;
  padding: 0;
  text-align: center;
`;

const Technology = styled(LI)`
  display: inline-block;
  margin: 1em;
  vertical-align: top;
`;

const TechnologyLogo = styled(Img)`
  height: auto;
  vertical-align: middle;
  width: 260px;
`;

function TechnologiesListItem({ image, name }) {
  return (
    <Technology>
      <TechnologyLogo {...image} alt={name} title={name} />
    </Technology>
  );
}

TechnologiesListItem.defaultProps = {};

TechnologiesListItem.propTypes = {
  image: PropTypes.shape({}).isRequired,
  name: PropTypes.string.isRequired,
};

TechnologiesList.Item = TechnologiesListItem;

export default TechnologiesList;
