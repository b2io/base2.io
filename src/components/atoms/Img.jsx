import { pick } from 'lodash';
import PropTypes from 'prop-types';
import React from 'react';
import { hasAll, renameKeys, supportsWebp } from '../../util/helpers';

const srcProps = obj =>
  pick(
    supportsWebp() && hasAll(obj, ['srcWebp', 'srcSetWebp'])
      ? renameKeys(obj, [['srcWebp', 'src'], ['srcSetWebp', 'srcSet']])
      : obj,
    ['src', 'srcSet'],
  );

class Img extends React.Component {
  static defaultProps = {
    resolutions: null,
    sizes: null,
  };

  static propTypes = {
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

  render() {
    const { alt, resolutions, sizes, ...rest } = this.props;

    if (sizes) {
      return (
        <img {...rest} {...srcProps(sizes)} alt={alt} sizes={sizes.sizes} />
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
        />
      );
    }

    return <img {...rest} alt={alt} />;
  }
}

export default Img;
