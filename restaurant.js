import { isAHoliday } from '@18f/us-federal-holidays';
import { VACATION_CONFIG, HOLIDAY_OPTIONS } from './config';


/**
 * Updates element with restaurant status
 * @param {HTMLElement} element 
 * @param {Date} [now=new Date()]
 */
export function restaurant(element, now = new Date()) {
  if (!element) throw new Error('Element is required');
  
  const status = isSaharaOpen(now);
  element.innerHTML = status.message;
}

/**
 * Determines if restaurant is open
 * @param {Date} date 
 * @returns {RestaurantStatus}
 */
function isSaharaOpen(date) {
  if (isSunday(date)) {
    return { message: "No.", isOpen: false };
  }

  if (isWithinVacation(date)) {
    return { message: "Maybe.<br />They might be closed for vacation.", isOpen: false };
  }

  if (!isWithinWorkingHours(date)) {
    return { message: "No.", isOpen: false };
  }

  if (isAHoliday(date, HOLIDAY_OPTIONS)) {
    return { message: "Maybe.<br />Today might be a holiday.", isOpen: false };
  }

  return { message: "Yes.", isOpen: true };
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
