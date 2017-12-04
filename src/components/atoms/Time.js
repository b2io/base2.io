import { DateTime } from 'luxon';
import React from 'react';

class Time extends React.Component {
  static defaultProps = {
    format: DateTime.DATE_HUGE,
  };

  render() {
    const { format, iso } = this.props;
    const formattedDateTime = DateTime.fromISO(iso).toLocaleString(format);

    return <time dateTime={iso}>{formattedDateTime}</time>;
  }
}

export default Time;
