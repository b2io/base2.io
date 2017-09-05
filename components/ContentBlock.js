import styled from 'styled-components';

const ContentBlock = styled.div`
  --color-fg: ${props => props.color || 'var(--color-fg)'};
  margin: auto;
  max-width: 90%;
`;

export default ContentBlock;
