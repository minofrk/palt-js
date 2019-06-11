/* eslint prettier/prettier: 0 */
import assert from 'assert';
import testCases from './test-cases.json';
import { xiaalx, YearMonthDay } from '../../src';

describe('xiaalx.decode', (): void => {
    it.each([
        0,
    ])('should not throw with valid numbers. (%#)', (value): void => {
        assert.doesNotThrow((): YearMonthDay => xiaalx.decode(value));
    });

    it.each([
        Infinity,
        Number.NaN,
        0.1,
    ])('should throw with invalid numbers. (%#)', (value): void => {
        assert.throws((): YearMonthDay => xiaalx.decode(value));
    });

    it.each(testCases)('should return correct milpalt from xiaalx. (%#)', (item): void => {
        assert.deepStrictEqual(xiaalx.decode(item.xiaalx), item.milpalt);
    });
});
