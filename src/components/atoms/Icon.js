import get from 'lodash/get';
import React from 'react';
import AssignmentIcon from 'react-icons/lib/md/assignment';
import CodeIcon from 'react-icons/lib/md/code';
import ComputerIcon from 'react-icons/lib/md/computer';
import IPhoneIcon from 'react-icons/lib/md/phone-iphone';
import RefreshIcon from 'react-icons/lib/md/refresh';
import WallpaperIcon from 'react-icons/lib/md/wallpaper';

const iconsByName = {
  assignment: AssignmentIcon,
  code: CodeIcon,
  computer: ComputerIcon,
  iphone: IPhoneIcon,
  refresh: RefreshIcon,
  wallpaper: WallpaperIcon,
};

class Icon extends React.Component {
  render() {
    const { name, ...rest } = this.props;

    return React.createElement(get(iconsByName, name, null), rest);
  }
}

export default Icon;
