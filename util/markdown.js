import { compact, flattenDeep, getOr, zip } from 'lodash/fp';
import { compiler } from 'markdown-to-jsx';
import React from 'react';

const withKeys = (element, index) =>
  React.cloneElement(element, { key: index });

// TOOD: Set appropriate options.
const md = raw => compiler(raw, {});

const toEls = strings =>
  strings
    .filter(s => s.length)
    .map(md)
    .map(el => getOr([el], 'props.children', el));

const markdown = (strings, ...tags) =>
  compact(flattenDeep(zip(toEls(strings), tags))).map(withKeys);

export default markdown;
