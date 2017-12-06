import { DateTime } from 'luxon';
import PropTypes from 'prop-types';
import React from 'react';

class Time extends React.Component {
  static defaultProps = {
    format: DateTime.DATE_HUGE,
  };

  static propTypes = {
    iso: PropTypes.string.isRequired,

    format: PropTypes.shape({}),
  };

  render() {
    const { format, iso } = this.props;
    const formattedDateTime = DateTime.fromISO(iso).toLocaleString(format);

    return <time dateTime={iso}>{formattedDateTime}</time>;
  }
}

export default Time;
