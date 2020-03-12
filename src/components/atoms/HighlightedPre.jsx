import React from 'react';
import Highlight, { defaultProps } from 'prism-react-renderer';
import theme from 'prism-react-renderer/themes/dracula';
import Pre from './Pre';

/* eslint-disable */
const HighlightedPre = props => {
  const className = props.children.props.className || '';
  const matches = className.match(/language-(?<lang>.*)/);

  return (
    <Highlight
      {...defaultProps}
      code={props.children.props.children}
      language={matches?.groups?.lang ?? ''}
      theme={theme}
    >
      {({ className, style, tokens, getLineProps, getTokenProps }) => {
        return (
          <Pre className={className} style={style}>
            {tokens.map((line, i) => (
              <div {...getLineProps({ line, key: i })}>
                {line.map((token, key) => (
                  <span {...getTokenProps({ token, key })} />
                ))}
              </div>
            ))}
          </Pre>
        );
      }}
    </Highlight>
  );
};

export default HighlightedPre;
