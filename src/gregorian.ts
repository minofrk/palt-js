import { YearMonthDay, YearDay } from './types';
import { unixMsec, mustBeSafeIntegers } from './utils';

const epoch = unixMsec({ year: 0, month: 1, day: 1 });
const msecsInDay = 86400000;

export function daysSinceYearZero(date: YearMonthDay): number {
    return (unixMsec(date) - epoch) / msecsInDay;
}

export function daysToYearMonthDay(days: number): YearMonthDay {
    const date = new Date(days * msecsInDay + epoch);
    return {
        year: date.getUTCFullYear(),
        month: date.getUTCMonth() + 1,
        day: date.getUTCDate(),
    };
}

export function daysToYearDay(days: number): YearDay {
    const date = new Date(days * msecsInDay + epoch);
    const year = date.getUTCFullYear();
    const jan1st = daysSinceYearZero({ year, month: 1, day: 1 });
    return { year, day: days - jan1st + 1 };
}

export function isLeapYear(year: number): boolean {
    if (year % 400 === 0) return true;
    if (year % 100 === 0) return false;
    return year % 4 === 0;
}

export function validate({ year, month, day }: YearMonthDay): void {
    mustBeSafeIntegers([year, month, day]);

    const date = daysToYearMonthDay(daysSinceYearZero({ year, month, day }));

    if (date.year !== year || date.month !== month || date.day !== day) {
        throw new Error('Invalid gregorian date.');
    }
}
