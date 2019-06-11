/* eslint prettier/prettier: 0 */
import assert from 'assert';
import testCases from './test-cases.json';
import invalidMilpaltCases from '../invalid-milpalt-cases.json';
import { imulpalt, YearMonthDay } from '../../src';

describe('imulpalt.encode', (): void => {
    it.each([
        { year: 1988, month: 11, day: 30 },
    ])('should not throw with valid numbers. (%#)', (item): void => {
        assert.doesNotThrow((): YearMonthDay => imulpalt.encode(item));
    });

    it.each([
        { year: Infinity, month: 11, day: 30 },
        { year: 1988, month: Infinity, day: 30 },
        { year: 1988, month: 11, day: Infinity },
        { year: Number.NaN, month: 11, day: 30 },
        { year: 1988, month: Number.NaN, day: 30 },
        { year: 1988, month: 11, day: Number.NaN },
        { year: 1988.1, month: 11, day: 30 },
        { year: 1988, month: 11.1, day: 30 },
        { year: 1988, month: 11, day: 30.1 },
    ])('should throw with invalid numbers. (%#)', (item): void => {
        assert.throws((): YearMonthDay => imulpalt.encode(item));
    });

    it.each(invalidMilpaltCases)('should throw with invalid milpalt. (%#)', (item): void => {
        assert.throws((): YearMonthDay => imulpalt.encode(item));
    });

    it.each(testCases)('should return correct imulpalt from milpalt. (%#)', (item): void => {
        assert.deepStrictEqual(imulpalt.encode(item.milpalt), item.imulpalt);
    });
});
