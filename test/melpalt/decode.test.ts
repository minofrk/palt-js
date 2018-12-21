import assert from 'assert';
import testCases from './test-cases';
import { melpalt } from '../../src';

describe('melpalt.decode', () => {
    it('should throw with invalid numbers.', () => {
        assert.doesNotThrow(() => melpalt.decode({ year: 0, month: 1, day: 1 }));
        assert.throws(() => melpalt.decode({ year: Infinity, month: 1, day: 1 }));
        assert.throws(() => melpalt.decode({ year: 0, month: Infinity, day: 1 }));
        assert.throws(() => melpalt.decode({ year: 0, month: 1, day: Infinity }));
        assert.throws(() => melpalt.decode({ year: Number.NaN, month: 1, day: 1 }));
        assert.throws(() => melpalt.decode({ year: 0, month: Number.NaN, day: 1 }));
        assert.throws(() => melpalt.decode({ year: 0, month: 1, day: Number.NaN }));
        assert.throws(() => melpalt.decode({ year: 0.1, month: 1, day: 1 }));
        assert.throws(() => melpalt.decode({ year: 0, month: 1.1, day: 1 }));
        assert.throws(() => melpalt.decode({ year: 0, month: 1, day: 1.1 }));
    });

    it('should throw with invalid melpalt.', () => {
        assert.throws(() => melpalt.decode({ year: 30, month: 0, day: 1 }));
        assert.doesNotThrow(() => melpalt.decode({ year: 30, month: 1, day: 1 }));
        assert.doesNotThrow(() => melpalt.decode({ year: 30, month: 14, day: 1 }));
        assert.throws(() => melpalt.decode({ year: 30, month: 15, day: 1 }));

        assert.throws(() => melpalt.decode({ year: 30, month: 1, day: 0 }));
        assert.doesNotThrow(() => melpalt.decode({ year: 30, month: 1, day: 1 }));
        assert.doesNotThrow(() => melpalt.decode({ year: 30, month: 1, day: 28 }));
        assert.throws(() => melpalt.decode({ year: 30, month: 1, day: 29 }));

        assert.doesNotThrow(() => melpalt.decode({ year: 30, month: 14, day: 1 }));
        assert.throws(() => melpalt.decode({ year: 30, month: 14, day: 2 }));
        assert.doesNotThrow(() => melpalt.decode({ year: 4, month: 14, day: 2 }));
        assert.throws(() => melpalt.decode({ year: 4, month: 14, day: 3 }));
    });

    it('should return correct milpalt from melpalt.', () => {
        testCases.forEach(item => {
            assert.deepStrictEqual(melpalt.decode(item.melpalt), item.milpalt);
        });
    });
});
