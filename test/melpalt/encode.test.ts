/* eslint prettier/prettier: 0 */
import assert from 'assert';
import testCases from './test-cases';
import invalidMilpaltCases from '../invalid-milpalt-cases';
import { melpalt, YearMonthDay } from '../../src';

describe('melpalt.encode', (): void => {
    it('should throw with invalid numbers.', (): void => {
        assert.doesNotThrow((): YearMonthDay => melpalt.encode({ year: 1988, month: 11, day: 30 }));
        assert.throws((): YearMonthDay => melpalt.encode({ year: Infinity, month: 11, day: 30 }));
        assert.throws((): YearMonthDay => melpalt.encode({ year: 1988, month: Infinity, day: 30 }));
        assert.throws((): YearMonthDay => melpalt.encode({ year: 1988, month: 11, day: Infinity }));
        assert.throws((): YearMonthDay => melpalt.encode({ year: Number.NaN, month: 11, day: 30 }));
        assert.throws((): YearMonthDay => melpalt.encode({ year: 1988, month: Number.NaN, day: 30 }));
        assert.throws((): YearMonthDay => melpalt.encode({ year: 1988, month: 11, day: Number.NaN }));
        assert.throws((): YearMonthDay => melpalt.encode({ year: 1988.1, month: 11, day: 30 }));
        assert.throws((): YearMonthDay => melpalt.encode({ year: 1988, month: 11.1, day: 30 }));
        assert.throws((): YearMonthDay => melpalt.encode({ year: 1988, month: 11, day: 30.1 }));
    });

    it('should throw with invalid milpalt.', (): void => {
        invalidMilpaltCases.forEach((milpalt): void => {
            assert.throws((): YearMonthDay => melpalt.encode(milpalt));
        });
    });

    it('should return correct melpalt from milpalt.', (): void => {
        testCases.forEach((item): void => {
            assert.deepStrictEqual(melpalt.encode(item.milpalt), item.melpalt);
        });
    });
});
