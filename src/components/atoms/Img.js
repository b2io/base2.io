import { pick } from 'lodash';
import React from 'react';
import { hasAll, renameKeys, supportsWebp } from '../../util/helpers';

const srcProps = obj =>
  pick(
    supportsWebp() && hasAll(obj, ['srcWebp', 'srcSetWebp'])
      ? renameKeys(obj, [['srcWebp', 'src'], ['srcSetWebp', 'srcSet']])
      : obj,
    ['src', 'srcSet'],
  );

function Img({ resolutions, sizes, ...rest }) {
  if (sizes) {
    return <img {...srcProps(sizes)} sizes={sizes.sizes} {...rest} />;
  }

  if (resolutions) {
    return (
      <img
        {...srcProps(resolutions)}
        height={resolutions.height}
        width={resolutions.width}
        {...rest}
      />
    );
  }

  return <img {...rest} />;
}

export default Img;
