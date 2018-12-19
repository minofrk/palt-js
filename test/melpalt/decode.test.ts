import assert from 'assert';
import testCases from './test-cases';
import { decode } from '../../src/melpalt';

describe('melpalt.decode', () => {
    it('should throw with invalid numbers.', () => {
        assert.doesNotThrow(() => decode({ year: 0, month: 1, day: 1 }));
        assert.throws(() => decode({ year: Infinity, month: 1, day: 1 }));
        assert.throws(() => decode({ year: 0, month: Infinity, day: 1 }));
        assert.throws(() => decode({ year: 0, month: 1, day: Infinity }));
        assert.throws(() => decode({ year: Number.NaN, month: 1, day: 1 }));
        assert.throws(() => decode({ year: 0, month: Number.NaN, day: 1 }));
        assert.throws(() => decode({ year: 0, month: 1, day: Number.NaN }));
        assert.throws(() => decode({ year: 0.1, month: 1, day: 1 }));
        assert.throws(() => decode({ year: 0, month: 1.1, day: 1 }));
        assert.throws(() => decode({ year: 0, month: 1, day: 1.1 }));
    });

    it('should throw with invalid melpalt.', () => {
        assert.throws(() => decode({ year: 30, month: 0, day: 1 }));
        assert.doesNotThrow(() => decode({ year: 30, month: 1, day: 1 }));
        assert.doesNotThrow(() => decode({ year: 30, month: 14, day: 1 }));
        assert.throws(() => decode({ year: 30, month: 15, day: 1 }));

        assert.throws(() => decode({ year: 30, month: 1, day: 0 }));
        assert.doesNotThrow(() => decode({ year: 30, month: 1, day: 1 }));
        assert.doesNotThrow(() => decode({ year: 30, month: 1, day: 28 }));
        assert.throws(() => decode({ year: 30, month: 1, day: 29 }));

        assert.doesNotThrow(() => decode({ year: 30, month: 14, day: 1 }));
        assert.throws(() => decode({ year: 30, month: 14, day: 2 }));
        assert.doesNotThrow(() => decode({ year: 4, month: 14, day: 2 }));
        assert.throws(() => decode({ year: 4, month: 14, day: 3 }));
    });

    it('should return correct milpalt from melpalt.', () => {
        testCases.forEach(({ melpalt, milpalt }) => {
            assert.deepStrictEqual(decode(melpalt), milpalt);
        });
    });
});
