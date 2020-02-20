import styled from 'styled-components';
import { rem } from 'polished';
import { containerSizing, cssSome } from '../../util/style';

const Section = styled.section`
  ${containerSizing};

  ${cssSome('narrow')`
    font-size: ${rem('18px')};
    font-weight: 400;
    line-height: 1.5;
    margin: 0 auto ${rem('128px')};
    max-width: 1200px;
  `};
`;

export default Section;
