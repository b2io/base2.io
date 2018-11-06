import styled from 'styled-components';
import Input from './Input';

const TextArea = styled(Input.withComponent('textarea'))`
  overflow: auto;
  resize: vertical;
`;

export default TextArea;
