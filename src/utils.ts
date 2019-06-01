import { YearMonthDay } from './types';

export function unixMsec({ year, month, day }: YearMonthDay): number {
    return new Date(0).setUTCFullYear(year, month - 1, day);
}

export function mustBeSafeIntegers(values: readonly number[]): void {
    if (values.every(Number.isSafeInteger)) return;
    throw new Error('Safe integers are required.');
}
