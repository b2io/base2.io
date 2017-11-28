import { DateTime } from 'luxon';
import React from 'react';

class Time extends React.Component {
  static defaultProps = {
    format: DateTime.DATE_HUGE,
  };

  render() {
    const { format, iso } = this.props;
    const datetime = DateTime.fromISO(iso).toLocaleString(format);

    return <time datetime={iso}>{datetime}</time>;
  }
}

export default Time;
