// TODO add support for alt on images/logos

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Grid = styled.div`
  display: grid;
  grid-gap: calc(3vw + 16px);
  grid-template-columns: repeat(5, 10vw);
  width: 100%;
`;
const Image = styled.img`
  align-self: center;
  display: flex;
  width: 100%;
`;

const Logo = props => <Image src={props.image} />;

function LogoGrid(props) {
  const logos = props.logos;
  const gridItems = logos.map(logo => <Logo key={logo} image={logo} />);
  return (
    <Grid>
      {gridItems}
    </Grid>
  );
}

Logo.propTypes = {
  image: PropTypes.string.isRequired,
};

LogoGrid.propTypes = {
  logos: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default LogoGrid;
