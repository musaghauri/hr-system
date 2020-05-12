import format from 'date-fns/format';

const formatDate = (date, dFormat = 'do LLLL yyyy') =>
  format(new Date(date), dFormat);

export { formatDate };
