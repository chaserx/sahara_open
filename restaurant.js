// update these dates for when the folks at Sahara are on vacation.
const vacationStart = new Date('2022-06-13')
const vacationEnd = new Date('2022-09-01')

import { isAHoliday } from '@18f/us-federal-holidays';
const options = { utc: false};

function restaurant(element) {
  element.innerHTML = `${_isSaharaOpen()}`
  return;
}

function _isSaharaOpen() {
  const date = new Date
  
  if (_isTodaySunday(date)) {
    return "No."
  } else if (_isTodayWithinKnownVacation(date)) {
    return "Maybe.<br />They might be closed for vacation."
  } else {
    if (_inWorkingHours(date)) {
      if (_isTodayAHoliday(date)){
        return "Maybe.<br />Today might be a holiday."
      } else {
        return "Yes."
      }
    } else {
      return "No."
    }
  }
}

function _isTodaySunday(date) {
  return date.getDay() === 0
}

function _isTodayWithinKnownVacation(date) {
  return _inRange(date, vacationStart, vacationEnd)
}

function _inWorkingHours(date) {
  return _inRange(date.getHours(), 11, 19)
}

function _isTodayAHoliday(date) {
  return isAHoliday(date, options);
}

function _inRange(num, rangeStart, rangeEnd = 0) {
  return (rangeStart < num && num < rangeEnd) || (rangeEnd < num && num < rangeStart)
}

export { restaurant }