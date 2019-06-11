/* eslint prettier/prettier: 0 */
import assert from 'assert';
import testCases from './test-cases.json';
import invalidMilpaltCases from '../invalid-milpalt-cases.json';
import { xiaalx } from '../../src';

describe('xiaalx.encode', (): void => {
    it.each([
        { year: 1988, month: 11, day: 30 },
    ])('should not throw with valid numbers. (%#)', (milpalt): void => {
        assert.doesNotThrow((): number => xiaalx.encode(milpalt));
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
    ])('should throw with invalid numbers. (%#)', (milpalt): void => {
        assert.throws((): number => xiaalx.encode(milpalt));
    });

    it.each(invalidMilpaltCases)('should throw with invalid milpalt. (%#)', (milpalt): void => {
        assert.throws((): number => xiaalx.encode(milpalt));
    });

    it.each(testCases)('should return correct xiaalx from milpalt. (%#)', (item): void => {
        assert.deepStrictEqual(xiaalx.encode(item.milpalt), item.xiaalx);
    });
});
