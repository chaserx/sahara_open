import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest';
import { restaurant } from './restaurant.js'

describe('restaurant', () => {
  let element;

  beforeEach(() => {
    element = document.createElement('div');
  });

  afterEach(() => {
    vi.resetAllMocks()
  });

  it('should pass a sample test', () => {
    expect(true).toBe(true);
  });

  it('throws error if element is not provided', () => {
    expect(() => restaurant()).toThrow('Element is required');
  });

  it('updates element with "No." if it is Sunday', () => {
    const sunday = new Date('2024-06-09 12:00:00');
    restaurant(element, sunday);
    expect(element.innerHTML).toBe('No.');
  });

  it('updates element with vacation message if within vacation', () => {
    const vacationDate = new Date('2024-07-01 12:30:00');
    restaurant(element, vacationDate);
    expect(element.innerHTML).toBe('Maybe.<br>They might be closed for vacation.');
  });

  it('updates element with "No." if not within working hours', () => {
    const earlyMorning = new Date('2024-11-07T10:00:00');
    restaurant(element, earlyMorning);
    expect(element.innerHTML).toBe('No.');
  });

  it('updates element with holiday message if it is a holiday', () => {
    const holidayDate = new Date('2024-01-01 12:00:00');
    
    restaurant(element, holidayDate);
    expect(element.innerHTML).toBe('Maybe.<br>Today might be a holiday.');
  });

  it('updates element with "Yes." if open', () => {
    const openDate = new Date('2024-11-07T12:00:00');
    restaurant(element, openDate);
    expect(element.innerHTML).toBe('Yes.');
  });
});
