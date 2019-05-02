import get from 'lodash/get';
import PropTypes from 'prop-types';
import React from 'react';
import { FaBars } from 'react-icons/fa';
import {
  MdAssignment,
  MdCode,
  MdComputer,
  MdPhoneIphone,
  MdRefresh,
  MdWallpaper,
} from 'react-icons/md';

const iconsByName = {
  assignment: MdAssignment,
  code: MdCode,
  computer: MdComputer,
  iphone: MdPhoneIphone,
  menutoggle: FaBars,
  refresh: MdRefresh,
  wallpaper: MdWallpaper,
};

function Icon({ name, ...rest }) {
  return React.createElement(get(iconsByName, name, null), rest);
}

Icon.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Icon;
