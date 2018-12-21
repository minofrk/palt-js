import assert from 'assert';
import testCases from './test-cases';
import invalidMilpaltCases from '../invalid-milpalt-cases';
import { xiaalx } from '../../src';

describe('xiaalx.encode', () => {
    it('should throw with invalid numbers.', () => {
        assert.doesNotThrow(() => xiaalx.encode({ year: 1988, month: 11, day: 30 }));
        assert.throws(() => xiaalx.encode({ year: Infinity, month: 11, day: 30 }));
        assert.throws(() => xiaalx.encode({ year: 1988, month: Infinity, day: 30 }));
        assert.throws(() => xiaalx.encode({ year: 1988, month: 11, day: Infinity }));
        assert.throws(() => xiaalx.encode({ year: Number.NaN, month: 11, day: 30 }));
        assert.throws(() => xiaalx.encode({ year: 1988, month: Number.NaN, day: 30 }));
        assert.throws(() => xiaalx.encode({ year: 1988, month: 11, day: Number.NaN }));
        assert.throws(() => xiaalx.encode({ year: 1988.1, month: 11, day: 30 }));
        assert.throws(() => xiaalx.encode({ year: 1988, month: 11.1, day: 30 }));
        assert.throws(() => xiaalx.encode({ year: 1988, month: 11, day: 30.1 }));
    });

    it('should throw with invalid milpalt.', () => {
        invalidMilpaltCases.forEach(milpalt => {
            assert.throws(() => xiaalx.encode(milpalt));
        });
    });

    it('should return correct xiaalx from milpalt.', () => {
        testCases.forEach(item => {
            assert.deepStrictEqual(xiaalx.encode(item.milpalt), item.xiaalx);
        });
    });
});
