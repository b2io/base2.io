import { DateTime } from 'luxon';
import PropTypes from 'prop-types';
import React from 'react';

function Time({
  format,
  iso
}) {
  const formattedDateTime = DateTime.fromISO(iso).toLocaleString(format);

  return <time dateTime={iso}>{formattedDateTime}</time>;
}

Time.defaultProps = {
  format: DateTime.DATE_HUGE,
};

Time.propTypes = {
  format: PropTypes.shape({}),
  iso: PropTypes.string.isRequired,
};

export default Time;
