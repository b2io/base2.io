import React from 'react';
import styled from 'styled-components';
import { FullScreenSection, HighlightText, Logo, Title } from '../components';

import { color } from '../util/colors';
import { fullWidth, home } from '../util/templates';

const Index = styled.div`
  ${fullWidth};
  ${home};
`;

export default () =>
  <Index>
    <FullScreenSection color={color.black} height="80">
      <Logo />
    </FullScreenSection>
    <FullScreenSection image="/static/bg-1.png" height="110">
      <HighlightText color={color.black}>
        <Title>We turn ideas into beautiful software.</Title>
      </HighlightText>
    </FullScreenSection>
    <FullScreenSection color={color.blue} height="50" />
    <FullScreenSection height="180" image="/static/bg-2.png" />
    <FullScreenSection color={color.purple} height="50" />
    <FullScreenSection height="200" image="/static/bg-3.png" />
    <FullScreenSection color={color.red} height="50" />
    <FullScreenSection height="180" image="/static/bg-4.png" />
    <FullScreenSection color={color.yellow} height="50" />
    <FullScreenSection height="180" image="/static/bg-5.png" />
    <FullScreenSection color={color.black} />
  </Index>;
