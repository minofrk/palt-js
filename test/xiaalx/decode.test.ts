/* eslint prettier/prettier: 0 */
import assert from 'assert';
import testCases from './test-cases';
import { xiaalx, YearMonthDay } from '../../src';

describe('xiaalx.decode', (): void => {
    it('should throw with invalid numbers.', (): void => {
        assert.doesNotThrow((): YearMonthDay => xiaalx.decode(0));
        assert.throws((): YearMonthDay => xiaalx.decode(Infinity));
        assert.throws((): YearMonthDay => xiaalx.decode(Number.NaN));
        assert.throws((): YearMonthDay => xiaalx.decode(0.1));
    });

    it('should return correct milpalt from xiaalx.', (): void => {
        testCases.forEach((item): void => {
            assert.deepStrictEqual(xiaalx.decode(item.xiaalx), item.milpalt);
        });
    });
});
