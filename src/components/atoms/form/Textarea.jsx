import Input from './Input';

const TextArea = Input.withComponent('textarea').extend`
  overflow: auto;
  resize: vertical;
`;

export default TextArea;
