import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { em } from 'polished';
import ReactTooltip from 'react-tooltip';
import { Img, UL, LI } from '../atoms';
import { mediaQuery } from '../../util/style';

const TechnologiesList = styled(UL)`
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  list-style: none;
  margin: 0;
  max-width: ${em('300px')};
  padding: 0;
  text-align: center;

  ${mediaQuery.small`
    max-width: ${em('530px')};
  `};

  ${mediaQuery.large`
    max-width: ${em('650px')};
  `};
`;

const Technology = styled(LI)`
  margin: ${em('10px')} 0;
  width: 25%;

  ${mediaQuery.small`
    margin: ${em('20px')} 0;
  `};

  ${mediaQuery.large`
    margin: ${em('30px')} 0;
  `};
`;

const TechnologyLogo = styled(Img)`
  height: auto;
  vertical-align: middle;
  width: ${em('50px')};

  ${mediaQuery.small`
    width: ${em('70px')};
  `};

  ${mediaQuery.large`
    width: ${em('100px')};
  `};
`;

function TechnologiesListItem({ image, name }) {
  return (
    <Technology>
      <TechnologyLogo {...image} alt={name} data-tip={name} />
      <ReactTooltip effect="solid" />
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
