import { YearMonthDay } from './types';
import { mustBeSafeIntegers } from './utils';
import {
    isLeapYear,
    validate,
    daysSinceYearZero,
    daysToYearDay,
    daysToYearMonthDay,
} from './gregorian';

const epoch = daysSinceYearZero({ year: 400, month: 1, day: 1 });
const lengthsOfMonths = [30, 30, 30, 30, 31, 31, 31, 31, 31, 30, 30, 30];

function isValidImulpalt({ year, month, day }: YearMonthDay): boolean {
    if (day <= 0 || 32 <= day || month <= 0 || 13 <= month) return false;

    if (month === 12 && isLeapYear(year)) {
        return day <= 31;
    }

    return day <= lengthsOfMonths[month - 1];
}

export function encode(date: YearMonthDay): YearMonthDay {
    validate(date);

    const { year, day } = daysToYearDay(daysSinceYearZero(date) - epoch);

    if (day === 366) return { year, month: 12, day: 31 };

    let leftDays = day;
    let imulMonth = 0;

    for (; ; imulMonth++) {
        const lom = lengthsOfMonths[imulMonth];
        if (leftDays <= lom) break;
        leftDays -= lom;
    }

    return { year, month: imulMonth + 1, day: leftDays };
}

export function decode({ year, month, day }: YearMonthDay): YearMonthDay {
    mustBeSafeIntegers([year, month, day]);

    if (!isValidImulpalt({ year, month, day })) {
        throw new Error('Invalid imulpalt.');
    }

    let nthDayOfYear = day;

    for (let i = 0; i < month - 1; i++) {
        nthDayOfYear += lengthsOfMonths[i];
    }

    return daysToYearMonthDay(
        daysSinceYearZero({ year, month: 1, day: nthDayOfYear }) + epoch,
    );
}
