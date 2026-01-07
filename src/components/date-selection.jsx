import { addMonths } from 'date-fns';
import { useState } from 'react';

import { DatePickerWithRange } from './ui/date-picker-with-range';

const DateSelection = () => {
  const [date] = useState({
    from: new Date(),
    to: addMonths(new Date(), 1),
  });

  return <DatePickerWithRange value={date} />;
};

export default DateSelection;
