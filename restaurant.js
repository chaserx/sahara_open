import { isAHoliday } from '@18f/us-federal-holidays';
import { VACATION_CONFIG, HOLIDAY_OPTIONS } from './config';

export function restaurant(element) {
  element.innerHTML = `${_isSaharaOpen()}`
  return;
}

function _isSaharaOpen() {
  const now = new Date
  
  if (isSunday(now)) { // closed on sundays
    return "No."
  } else if (isWithinVacation(now)) { // is today a known vacation day
    return "Maybe.<br />They might be closed for vacation."
  } else {
    if (isWithinWorkingHours(now)) { // within working hours
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

/**
 * @param {Date} date
 * @returns {boolean}
 */
function isSunday(date) {
  return date.getDay() === 0;
}

/**
 * @param {Date} date
 * @returns {boolean}
 */
function isWithinVacation(date) {
  return isDateInRange(
    date,
    VACATION_CONFIG.START,
    VACATION_CONFIG.END
  );
}

/**
 * @param {Date} date
 * @returns {boolean}
 */
function isWithinWorkingHours(date) {
  return isNumberInRange(
    date.getHours(),
    VACATION_CONFIG.WORKING_HOURS.START,
    VACATION_CONFIG.WORKING_HOURS.END
  );
}

/**
 * @param {Date} date
 * @param {Date} start
 * @param {Date} end
 * @returns {boolean}
 */
function isDateInRange(date, start, end) {
  return date >= start && date <= end;
}

/**
 * @param {number} value
 * @param {number} start
 * @param {number} end
 * @returns {boolean}
 */
function isNumberInRange(value, start, end) {
  const [min, max] = start <= end ? [start, end] : [end, start];
  return value >= min && value <= max;
}
