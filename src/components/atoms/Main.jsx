import styled from 'styled-components';

const Main = styled.main`
  display: grid;
  grid-template-columns: 0 1fr 0;
  grid-template-rows: 100vh;

  ${mediaQuery.small`
    grid-template-columns: 2em 1fr 2em;
    grid-template-rows: 1958px;
  `};

  ${mediaQuery.medium`
  grid-template-columns: 100px 1fr 100px;
  // This is just to get some height to test
  grid-template-rows: 500px;
`;

export default Main;
