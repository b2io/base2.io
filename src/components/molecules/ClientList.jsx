import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { em } from 'polished';
import { UL, LI, Img } from '../atoms';
import { mediaQuery, webpBackground } from '../../util/style';

const ClientList = styled(UL)`
  background: bottom center / auto 100% no-repeat;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  list-style-type: none;
  margin: 0;
  padding: 0;
  width: 100%;

  ${webpBackground(
    'img/backgrounds/space-fog-purple.png',
    'img/backgrounds/space-fog-purple.webp'
    )
  };
`;

const Client = styled(LI)`
  align-items: center;
  display: flex;
  justify-content: center;
  margin: ${em('30px')} 0;
  padding: 0 ${em('16px')};
  width: 50%;

  ${mediaQuery.small`
    width: 25%;
  `};

  > div {
    text-align: center;
    width: 100%;
  }
`;

const ClientLogo = styled(Img)`
  max-height: ${em('80px')};
  max-width: 100%;
  width: auto;

  ${mediaQuery.large`
    max-height: ${em('155px')};
    max-width: ${em('200px')};
  `};
`;

class ClientListItem extends React.Component {
  static defaultProps = {};

  static propTypes = {
    image: PropTypes.shape({}).isRequired,
    name: PropTypes.string.isRequired,
  };

  render() {
    const { image, name } = this.props;

    return (
      <Client>
        <ClientLogo {...image} alt={name} title={name} />
      </Client>
    );
  }
}

ClientList.Item = ClientListItem;

export default ClientList;
