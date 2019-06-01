/* eslint prettier/prettier: 0 */
import assert from 'assert';
import testCases from './test-cases';
import invalidMilpaltCases from '../invalid-milpalt-cases';
import { xiaalx } from '../../src';

describe('xiaalx.encode', (): void => {
    it('should throw with invalid numbers.', (): void => {
        assert.doesNotThrow((): number => xiaalx.encode({ year: 1988, month: 11, day: 30 }));
        assert.throws((): number => xiaalx.encode({ year: Infinity, month: 11, day: 30 }));
        assert.throws((): number => xiaalx.encode({ year: 1988, month: Infinity, day: 30 }));
        assert.throws((): number => xiaalx.encode({ year: 1988, month: 11, day: Infinity }));
        assert.throws((): number => xiaalx.encode({ year: Number.NaN, month: 11, day: 30 }));
        assert.throws((): number => xiaalx.encode({ year: 1988, month: Number.NaN, day: 30 }));
        assert.throws((): number => xiaalx.encode({ year: 1988, month: 11, day: Number.NaN }));
        assert.throws((): number => xiaalx.encode({ year: 1988.1, month: 11, day: 30 }));
        assert.throws((): number => xiaalx.encode({ year: 1988, month: 11.1, day: 30 }));
        assert.throws((): number => xiaalx.encode({ year: 1988, month: 11, day: 30.1 }));
    });

    it('should throw with invalid milpalt.', (): void => {
        invalidMilpaltCases.forEach((milpalt): void => {
            assert.throws((): number => xiaalx.encode(milpalt));
        });
    });

    it('should return correct xiaalx from milpalt.', (): void => {
        testCases.forEach((item): void => {
            assert.deepStrictEqual(xiaalx.encode(item.milpalt), item.xiaalx);
        });
    });
});
