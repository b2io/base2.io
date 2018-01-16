import get from 'lodash/get';
import PropTypes from 'prop-types';
import React from 'react';
import AssignmentIcon from 'react-icons/lib/md/assignment';
import CodeIcon from 'react-icons/lib/md/code';
import ComputerIcon from 'react-icons/lib/md/computer';
import IPhoneIcon from 'react-icons/lib/md/phone-iphone';
import MenuToggleIcon from 'react-icons/lib/fa/bars';
import RefreshIcon from 'react-icons/lib/md/refresh';
import WallpaperIcon from 'react-icons/lib/md/wallpaper';

const iconsByName = {
  assignment: AssignmentIcon,
  code: CodeIcon,
  computer: ComputerIcon,
  iphone: IPhoneIcon,
  menutoggle: MenuToggleIcon,
  refresh: RefreshIcon,
  wallpaper: WallpaperIcon,
};

class Icon extends React.Component {
  static defaultProps = {};

  static propTypes = {
    name: PropTypes.string.isRequired,
  };

  render() {
    const { name, ...rest } = this.props;
    return React.createElement(get(iconsByName, name, null), rest);
  }
}

export default Icon;
