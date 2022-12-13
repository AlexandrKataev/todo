import dayjs from 'dayjs';
import calendar from 'dayjs/plugin/calendar';
import isToday from 'dayjs/plugin/isToday';
import isTomorrow from 'dayjs/plugin/isTomorrow';

import 'dayjs/locale/ru';

dayjs.extend(calendar);
dayjs.extend(isToday);
dayjs.extend(isTomorrow);
dayjs.locale('ru');

export const getDate = (date: string) => {
  const formattedDate = dayjs(date).calendar(null, {
    sameDay: 'сегодня H:mm',
    nextDay: 'завтра H:mm',
    nextWeek: 'DD MMM',
    lastDay: 'DD MMM',
    lastWeek: 'DD MMM',
    sameElse: 'DD MMM',
  });

  const dateStatus = () => {
    if (dayjs(date).isToday()) {
      return 'today';
    }
    if (dayjs(date).isTomorrow()) {
      return 'tommorow';
    }
    if (dayjs(date).isBefore(dayjs())) {
      return 'passed';
    }
    if (dayjs(date).isAfter(dayjs())) {
      return 'notsoon';
    }
  };

  return { formattedDate, dateStatus };
};
