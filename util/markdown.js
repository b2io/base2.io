import {
  compact,
  filter,
  flattenDeep,
  flow,
  get,
  getOr,
  map,
  zip,
} from 'lodash/fp';
import { compiler } from 'markdown-to-jsx';
import React from 'react';

const withKeys = (element, index) =>
  React.cloneElement(element, { key: index });

// TOOD: Set appropriate options.
const md = raw => compiler(raw, {});

const processStrings = flow(
  filter(get('length')),
  map(md),
  map(el => getOr([el], 'props.children', el))
);

const markdown = (strings, ...tags) =>
  compact(flattenDeep(zip(processStrings(strings), tags))).map(withKeys);

export default markdown;
