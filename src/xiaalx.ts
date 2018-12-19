import { YearMonthDay } from './types';
import { mustBeSafeIntegers } from './utils';
import { validate, daysSinceYearZero, daysToYearMonthDay } from './gregorian';

const epoch = daysSinceYearZero({ year: 2007, month: 3, day: 8 });

export function encode(date: YearMonthDay): number {
    validate(date);

    return daysSinceYearZero(date) - epoch;
}

export function decode(xiaalx: number): YearMonthDay {
    mustBeSafeIntegers([xiaalx]);

    return daysToYearMonthDay(xiaalx + epoch);
}
