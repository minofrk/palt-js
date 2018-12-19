import { YearMonthDay } from './types';
import { mustBeSafeIntegers } from './utils';
import { isLeapYear, validate, daysSinceYearZero, daysToYearDay, daysToYearMonthDay } from './gregorian';

const epoch = daysSinceYearZero({ year: 1988, month: 11, day: 30 });

export function encode(date: YearMonthDay): YearMonthDay {
    validate(date);

    const { year, day } = daysToYearDay(daysSinceYearZero(date) - epoch);

    return {
        year,
        month: Math.floor((day - 1) / 28) + 1,
        day  : (day - 1) % 28 + 1,
    };
}

export function decode({ year, month, day }: YearMonthDay): YearMonthDay {
    mustBeSafeIntegers([year, month, day]);

    if (!isValidMelpalt({ year, month, day })) {
        throw new Error('Invalid melpalt.');
    }

    return daysToYearMonthDay(daysSinceYearZero({ year, month: 1, day: day + (month - 1)*28 }) + epoch);
}

function isValidMelpalt({ year, month, day }: YearMonthDay): boolean {
    if (day <= 0 || 29 <= day || month <= 0 || 15 <= month) return false;

    if (month === 14) {
        return isLeapYear(year)? (day <= 2): (day === 1);
    }

    return 1 <= day && day <= 28;
}
