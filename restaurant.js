// update these dates for when the folks at Sahara are on vacation.
const VACATION_START = new Date('2024-06-10')
const VACATION_END = new Date('2024-09-04')

import { isAHoliday } from '@18f/us-federal-holidays';
const HOLIDAY_OPTIONS = { utc: false};

function restaurant(element) {
  element.innerHTML = `${_isSaharaOpen()}`
  return;
}

function _isSaharaOpen() {
  const now = new Date
  
  if (_isTodaySunday(now)) { // closed on sundays
    return "No."
  } else if (_isTodayWithinKnownVacation(now)) { // is today a known vacation day
    return "Maybe.<br />They might be closed for vacation."
  } else {
    if (_inWorkingHours(now)) { // within working hours
      if (isAHoliday(now, HOLIDAY_OPTIONS)){ // is today a federal holiday
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
  return _inRange(date, VACATION_START, VACATION_END)
}

function _inWorkingHours(date) {
  return _inRange(date.getHours(), 11, 19)
}

function _inRange(num, rangeStart = 0, rangeEnd = 1) {
  return (rangeStart < num && num < rangeEnd) || (rangeEnd < num && num < rangeStart)
}

export { restaurant }