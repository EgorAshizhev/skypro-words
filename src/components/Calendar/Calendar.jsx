import React, { useState, useMemo } from 'react';
import {
  SCalendar,
  SCalendarTtl,
  SCalendarNav,
  SCalendarNavBtn,
  SCalendarPeriod,
  SCalendarDayNames,
  SCalendarDayName,
  SCalendarCells,
  SCalendarCell,
  SCalendarDateCreate,
} from './Calendar.styled';

const WEEKDAYS = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'];

const MONTHS = [
  'Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь',
  'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь',
];

const isSameDay = (a, b) =>
  a &&
  b &&
  a.getFullYear() === b.getFullYear() &&
  a.getMonth() === b.getMonth() &&
  a.getDate() === b.getDate();

const parseValue = (value) => {
  if (!value) return null;
  const d = new Date(value);
  return Number.isNaN(d.getTime()) ? null : d;
};

const getMonthMatrix = (year, month) => {
  const firstOfMonth = new Date(year, month, 1);
  // приводим к неделе, начинающейся с понедельника
  const firstWeekday = (firstOfMonth.getDay() + 6) % 7;
  const start = new Date(year, month, 1 - firstWeekday);

  const days = [];
  for (let i = 0; i < 42; i += 1) {
    const d = new Date(start);
    d.setDate(start.getDate() + i);
    days.push(d);
  }
  return days;
};

const formatDate = (d) => {
  if (!d) return 'Не указано';
  const dd = String(d.getDate()).padStart(2, '0');
  const mm = String(d.getMonth() + 1).padStart(2, '0');
  const yy = String(d.getFullYear()).slice(-2);
  return `${dd}.${mm}.${yy}`;
};

/**
 * Календарь-датапикер.
 * value: ISO-строка даты | null
 * onChange(isoString): вызывается при выборе дня (если !readOnly)
 * readOnly: только отображение, без выбора
 * label: подпись под календарём, например "Срок исполнения"
 */
export const Calendar = ({ value, onChange, readOnly = false, label = 'Срок исполнения' }) => {
  const selected = useMemo(() => parseValue(value), [value]);
  const [viewDate, setViewDate] = useState(() => selected || new Date());

  const year = viewDate.getFullYear();
  const month = viewDate.getMonth();
  const days = useMemo(() => getMonthMatrix(year, month), [year, month]);
  const today = useMemo(() => new Date(), []);

  const goPrevMonth = () => setViewDate(new Date(year, month - 1, 1));
  const goNextMonth = () => setViewDate(new Date(year, month + 1, 1));

  const handleDayClick = (day) => {
    if (readOnly) return;
    if (day.getMonth() !== month) {
      setViewDate(new Date(day.getFullYear(), day.getMonth(), 1));
    }
    onChange?.(day.toISOString());
  };

  return (
    <SCalendar className="calendar">
      <SCalendarTtl className="calendar__ttl">
        <SCalendarNav className="calendar__nav">
          <SCalendarNavBtn
            type="button"
            onClick={goPrevMonth}
            aria-label="Предыдущий месяц"
          >
            &#8249;
          </SCalendarNavBtn>
          <SCalendarPeriod className="calendar__period">
            {MONTHS[month]} {year}
          </SCalendarPeriod>
          <SCalendarNavBtn
            type="button"
            onClick={goNextMonth}
            aria-label="Следующий месяц"
          >
            &#8250;
          </SCalendarNavBtn>
        </SCalendarNav>
      </SCalendarTtl>

      <SCalendarDayNames className="calendar__day-names">
        {WEEKDAYS.map((w) => (
          <SCalendarDayName key={w} className="calendar__day-name">
            {w}
          </SCalendarDayName>
        ))}
      </SCalendarDayNames>

      <SCalendarCells className="calendar__cells">
        {days.map((day) => {
          const isCurrentMonth = day.getMonth() === month;
          const isSelected = isSameDay(day, selected);
          const isToday = isSameDay(day, today);
          return (
            <SCalendarCell
              key={day.toISOString()}
              type="button"
              className="calendar__cell"
              $muted={!isCurrentMonth}
              $selected={isSelected}
              $today={isToday && !isSelected}
              $readOnly={readOnly}
              disabled={readOnly}
              onClick={() => handleDayClick(day)}
            >
              {day.getDate()}
            </SCalendarCell>
          );
        })}
      </SCalendarCells>

      {label && (
        <SCalendarDateCreate className="date-create">
          {label} <span>{formatDate(selected)}</span>
        </SCalendarDateCreate>
      )}
    </SCalendar>
  );
};
