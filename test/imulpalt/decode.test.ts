/* eslint prettier/prettier: 0 */
import assert from 'assert';
import testCases from './test-cases.json';
import { imulpalt, YearMonthDay } from '../../src';

describe('imulpalt.decode', (): void => {
    it.each([
        { year: 0, month: 1, day: 1 },
    ])('should not throw with valid numbers. (%#)', (item): void => {
        assert.doesNotThrow((): YearMonthDay => imulpalt.decode(item));
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
        assert.throws((): YearMonthDay => imulpalt.decode(item));
    });

    it.each([
        { year: 1618, month: 1, day: 1 },
        { year: 1618, month: 12, day: 1 },
        { year: 1618, month: 1, day: 1 },
        { year: 1618, month: 1, day: 30 },
        { year: 1618, month: 8, day: 31 },
        { year: 3, month: 12, day: 30 },
        { year: 4, month: 12, day: 31 },
    ])('should not throw with valid imulpalt. (%#)', (item): void => {
        assert.doesNotThrow((): YearMonthDay => imulpalt.decode(item));
    });

    it.each([
        { year: 1618, month: 0, day: 1 },
        { year: 1618, month: 13, day: 1 },
        { year: 1618, month: 1, day: 0 },
        { year: 1618, month: 1, day: 31 },
        { year: 1618, month: 8, day: 32 },
        { year: 3, month: 12, day: 31 },
        { year: 4, month: 12, day: 32 },
    ])('should throw with invalid imulpalt. (%#)', (item): void => {
        assert.throws((): YearMonthDay => imulpalt.decode(item));
    });

    it.each(testCases)('should return correct milpalt from imulpalt. (%#)', (item): void => {
        assert.deepStrictEqual(imulpalt.decode(item.imulpalt), item.milpalt);
    });
});
