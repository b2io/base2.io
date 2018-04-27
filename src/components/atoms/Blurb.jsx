import styled from 'styled-components';
import P from './P';
import theme from '../../theme';

const Blurb = styled(P)`
  ${theme.rhythm.typography};
  margin-top: ${theme.rhythm.space};
`;

export default Blurb;
