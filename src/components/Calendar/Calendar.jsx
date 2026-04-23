import React, { useState } from 'react';

function Calendar({ onDateSelect, selectedDate, isBrowseMode = false }) {
  const [currentMonth, setCurrentMonth] = useState(new Date(2023, 8));

  const months = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'];

  const getDaysInMonth = (year, month) => new Date(year, month + 1, 0).getDate();
  const getFirstDayOfMonth = (year, month) => new Date(year, month, 1).getDay();

  const handlePrev = () => setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1));
  const handleNext = () => setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1));

  const renderCalendarCells = () => {
    const year = currentMonth.getFullYear();
    const month = currentMonth.getMonth();
    const daysInMonth = getDaysInMonth(year, month);
    const firstDay = getFirstDayOfMonth(year, month);
    const startOffset = firstDay === 0 ? 6 : firstDay - 1;

    const cells = [];
    const prevMonthDays = getDaysInMonth(year, month - 1);

    for (let i = startOffset - 1; i >= 0; i--) {
      cells.push(<div key={`prev-${i}`} className="calendar__cell _other-month">{prevMonthDays - i}</div>);
    }

    for (let day = 1; day <= daysInMonth; day++) {
      const dateStr = `${day.toString().padStart(2, '0')}.${(month + 1).toString().padStart(2, '0')}.${year}`;
      const isCurrent = day === 8 && month === 8;
      const isSelected = selectedDate === dateStr;
      const isWeekend = (new Date(year, month, day).getDay() === 6 || new Date(year, month, day).getDay() === 0);

      cells.push(
        <div key={`current-${day}`} className={`calendar__cell _cell-day ${isCurrent ? '_current' : ''} ${isSelected ? '_active-day' : ''} ${isWeekend ? '_weekend' : ''}`} onClick={() => onDateSelect && onDateSelect(dateStr)}>
          {day}
        </div>
      );
    }

    const totalCells = 42;
    const remaining = totalCells - cells.length;
    for (let i = 1; i <= remaining; i++) {
      cells.push(<div key={`next-${i}`} className="calendar__cell _other-month">{i}</div>);
    }

    return cells;
  };

  return (
    <div className="pop-new-card__calendar calendar">
      <p className="calendar__ttl subttl">Даты</p>
      <div className="calendar__block">
        <div className="calendar__nav">
          <div className="calendar__month">{months[currentMonth.getMonth()]} {currentMonth.getFullYear()}</div>
          <div className="nav__actions">
            <div className="nav__action" onClick={handlePrev}>
              <svg xmlns="http://www.w3.org/2000/svg" width="6" height="11" viewBox="0 0 6 11">
                <path d="M5.72945 1.95273C6.09018 1.62041 6.09018 1.0833 5.72945 0.750969C5.36622 0.416344 4.7754 0.416344 4.41218 0.750969L0.528487 4.32883C-0.176162 4.97799 -0.176162 6.02201 0.528487 6.67117L4.41217 10.249C4.7754 10.5837 5.36622 10.5837 5.72945 10.249C6.09018 9.9167 6.09018 9.37959 5.72945 9.04727L1.87897 5.5L5.72945 1.95273Z" />
              </svg>
            </div>
            <div className="nav__action" onClick={handleNext}>
              <svg xmlns="http://www.w3.org/2000/svg" width="6" height="11" viewBox="0 0 6 11">
                <path d="M0.27055 9.04727C-0.0901833 9.37959 -0.0901832 9.9167 0.27055 10.249C0.633779 10.5837 1.2246 10.5837 1.58783 10.249L5.47151 6.67117C6.17616 6.02201 6.17616 4.97799 5.47151 4.32883L1.58782 0.75097C1.2246 0.416344 0.633778 0.416344 0.270549 0.75097C-0.0901831 1.0833 -0.090184 1.62041 0.270549 1.95273L4.12103 5.5L0.27055 9.04727Z" />
              </svg>
            </div>
          </div>
        </div>
        <div className="calendar__content">
          <div className="calendar__days-names">
            {['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'].map(day => <div key={day} className="calendar__day-name">{day}</div>)}
          </div>
          <div className="calendar__cells">{renderCalendarCells()}</div>
        </div>
        <input type="hidden" id="datepick_value" value="08.09.2023" />
        <div className="calendar__period">
          <p className="calendar__p date-end">{isBrowseMode ? 'Срок исполнения: ' : 'Выберите срок исполнения '}<span className="date-control">{selectedDate || '08.09.2023'}</span>{!isBrowseMode && '.'}</p>
        </div>
      </div>
    </div>
  );
}

export default Calendar;