import { pick } from 'lodash';
import PropTypes from 'prop-types';
import React from 'react';
import Observer from 'react-intersection-observer';
import { hasAll, renameKeys, supportsWebp } from '../../util/helpers';

const srcProps = obj =>
  pick(
    supportsWebp() && hasAll(obj, ['srcWebp', 'srcSetWebp'])
      ? renameKeys(obj, [['srcWebp', 'src'], ['srcSetWebp', 'srcSet']])
      : obj,
    ['src', 'srcSet'],
  );

function Img({ alt, resolutions, sizes, ...rest }) {
  return (
    <Observer>
      {({ inView, ref }) => {
        if (!inView) return <div ref={ref} />;

        if (sizes) {
          return (
            <img
              {...rest}
              {...srcProps(sizes)}
              alt={alt}
              ref={ref}
              sizes={sizes.sizes}
            />
          );
        }

        if (resolutions) {
          return (
            <img
              {...rest}
              {...srcProps(resolutions)}
              alt={alt}
              height={resolutions.height}
              width={resolutions.width}
              ref={ref}
            />
          );
        }

        return <img {...rest} alt={alt} ref={ref} />;
      }}
    </Observer>
  );
}

Img.defaultProps = {
  resolutions: null,
  sizes: null,
};

Img.propTypes = {
  alt: PropTypes.string.isRequired,

  resolutions: PropTypes.shape({
    height: PropTypes.number.isRequired,
    src: PropTypes.string.isRequired,
    srcSet: PropTypes.string.isRequired,
    width: PropTypes.number.isRequired,

    srcSetWebp: PropTypes.string,
    srcWebp: PropTypes.string,
  }),
  sizes: PropTypes.shape({
    src: PropTypes.string.isRequired,
    srcSet: PropTypes.string.isRequired,

    srcSetWebp: PropTypes.string,
    srcWebp: PropTypes.string,
  }),
};

export default Img;
