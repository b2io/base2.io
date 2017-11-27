import { DateTime } from 'luxon';

const hugeDate = d => DateTime.fromISO(d).toLocaleString(DateTime.DATE_HUGE);

export { hugeDate };
