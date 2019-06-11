/* eslint prettier/prettier: 0 */
import assert from 'assert';
import testCases from './test-cases.json';
import { melpalt, YearMonthDay } from '../../src';

describe('melpalt.decode', (): void => {
    it.each([
        { year: 0, month: 1, day: 1 },
    ])('should not throw with valid numbers. (%#)', (item): void => {
        assert.doesNotThrow((): YearMonthDay => melpalt.decode(item));
    });

    it.each([
        { year: Infinity, month: 1, day: 1 },
        { year: 0, month: Infinity, day: 1 },
        { year: 0, month: 1, day: Infinity },
        { year: Number.NaN, month: 1, day: 1 },
        { year: 0, month: Number.NaN, day: 1 },
        { year: 0, month: 1, day: Number.NaN },
        { year: 0.1, month: 1, day: 1 },
        { year: 0, month: 1.1, day: 1 },
        { year: 0, month: 1, day: 1.1 },
    ])('should throw with invalid numbers. (%#)', (item): void => {
        assert.throws((): YearMonthDay => melpalt.decode(item));
    });

    it.each([
        { year: 30, month: 1, day: 1 },
        { year: 30, month: 14, day: 1 },
        { year: 30, month: 1, day: 1 },
        { year: 30, month: 1, day: 28 },
        { year: 30, month: 14, day: 1 },
        { year: 4, month: 14, day: 2 },
    ])('should not throw with valid melpalt. (%#)', (item): void => {
        assert.doesNotThrow((): YearMonthDay => melpalt.decode(item));
    });

    it.each([
        { year: 30, month: 0, day: 1 },
        { year: 30, month: 15, day: 1 },
        { year: 30, month: 1, day: 0 },
        { year: 30, month: 1, day: 29 },
        { year: 30, month: 14, day: 2 },
        { year: 4, month: 14, day: 3 },
    ])('should throw with invalid melpalt. (%#)', (item): void => {
        assert.throws((): YearMonthDay => melpalt.decode(item));
    });

    it.each(testCases)('should return correct milpalt from melpalt. (%#)', (item): void => {
        assert.deepStrictEqual(melpalt.decode(item.melpalt), item.milpalt);
    });
});
