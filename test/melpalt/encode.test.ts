import assert from 'assert';
import testCases from './test-cases';
import invalidMilpaltCases from '../invalid-milpalt-cases';
import { melpalt } from '../../src';

describe('melpalt.encode', () => {
    it('should throw with invalid numbers.', () => {
        assert.doesNotThrow(() => melpalt.encode({ year: 1988, month: 11, day: 30 }));
        assert.throws(() => melpalt.encode({ year: Infinity, month: 11, day: 30 }));
        assert.throws(() => melpalt.encode({ year: 1988, month: Infinity, day: 30 }));
        assert.throws(() => melpalt.encode({ year: 1988, month: 11, day: Infinity }));
        assert.throws(() => melpalt.encode({ year: Number.NaN, month: 11, day: 30 }));
        assert.throws(() => melpalt.encode({ year: 1988, month: Number.NaN, day: 30 }));
        assert.throws(() => melpalt.encode({ year: 1988, month: 11, day: Number.NaN }));
        assert.throws(() => melpalt.encode({ year: 1988.1, month: 11, day: 30 }));
        assert.throws(() => melpalt.encode({ year: 1988, month: 11.1, day: 30 }));
        assert.throws(() => melpalt.encode({ year: 1988, month: 11, day: 30.1 }));
    });

    it('should throw with invalid milpalt.', () => {
        invalidMilpaltCases.forEach(milpalt => {
            assert.throws(() => melpalt.encode(milpalt));
        });
    });

    it('should return correct melpalt from milpalt.', () => {
        testCases.forEach(item => {
            assert.deepStrictEqual(melpalt.encode(item.milpalt), item.melpalt);
        });
    });
});
