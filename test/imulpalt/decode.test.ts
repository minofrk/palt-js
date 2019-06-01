/* eslint prettier/prettier: 0 */
import assert from 'assert';
import testCases from './test-cases';
import { imulpalt, YearMonthDay } from '../../src';

describe('imulpalt.decode', (): void => {
    it('should throw with invalid numbers.', (): void => {
        assert.doesNotThrow((): YearMonthDay => imulpalt.decode({ year: 0, month: 1, day: 1 }));
        assert.throws((): YearMonthDay => imulpalt.decode({ year: Infinity, month: 1, day: 1 }));
        assert.throws((): YearMonthDay => imulpalt.decode({ year: 0, month: Infinity, day: 1 }));
        assert.throws((): YearMonthDay => imulpalt.decode({ year: 0, month: 1, day: Infinity }));
        assert.throws((): YearMonthDay => imulpalt.decode({ year: Number.NaN, month: 1, day: 1 }));
        assert.throws((): YearMonthDay => imulpalt.decode({ year: 0, month: Number.NaN, day: 1 }));
        assert.throws((): YearMonthDay => imulpalt.decode({ year: 0, month: 1, day: Number.NaN }));
        assert.throws((): YearMonthDay => imulpalt.decode({ year: 0.1, month: 1, day: 1 }));
        assert.throws((): YearMonthDay => imulpalt.decode({ year: 0, month: 1.1, day: 1 }));
        assert.throws((): YearMonthDay => imulpalt.decode({ year: 0, month: 1, day: 1.1 }));
    });

    it('should throw with invalid imulpalt.', (): void => {
        assert.throws((): YearMonthDay => imulpalt.decode({ year: 1618, month: 0, day: 1 }));
        assert.doesNotThrow((): YearMonthDay => imulpalt.decode({ year: 1618, month: 1, day: 1 }));
        assert.doesNotThrow((): YearMonthDay => imulpalt.decode({ year: 1618, month: 12, day: 1 }));
        assert.throws((): YearMonthDay => imulpalt.decode({ year: 1618, month: 13, day: 1 }));

        assert.throws((): YearMonthDay => imulpalt.decode({ year: 1618, month: 1, day: 0 }));
        assert.doesNotThrow((): YearMonthDay => imulpalt.decode({ year: 1618, month: 1, day: 1 }));
        assert.doesNotThrow((): YearMonthDay => imulpalt.decode({ year: 1618, month: 1, day: 30 }));
        assert.throws((): YearMonthDay => imulpalt.decode({ year: 1618, month: 1, day: 31 }));

        assert.doesNotThrow((): YearMonthDay => imulpalt.decode({ year: 1618, month: 8, day: 31 }));
        assert.throws((): YearMonthDay => imulpalt.decode({ year: 1618, month: 8, day: 32 }));

        assert.doesNotThrow((): YearMonthDay => imulpalt.decode({ year: 3, month: 12, day: 30 }));
        assert.throws((): YearMonthDay => imulpalt.decode({ year: 3, month: 12, day: 31 }));
        assert.doesNotThrow((): YearMonthDay => imulpalt.decode({ year: 4, month: 12, day: 31 }));
        assert.throws((): YearMonthDay => imulpalt.decode({ year: 4, month: 12, day: 32 }));
    });

    it('should return correct milpalt from imulpalt.', (): void => {
        testCases.forEach((item): void => {
            assert.deepStrictEqual(imulpalt.decode(item.imulpalt), item.milpalt);
        });
    });
});
