import assert from 'assert';
import testCases from './test-cases';
import { decode } from '../../src/imulpalt';

describe('imulpalt.decode', () => {
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

    it('should throw with invalid imulpalt.', () => {
        assert.throws(() => decode({ year: 1618, month: 0, day: 1 }));
        assert.doesNotThrow(() => decode({ year: 1618, month: 1, day: 1 }));
        assert.doesNotThrow(() => decode({ year: 1618, month: 12, day: 1 }));
        assert.throws(() => decode({ year: 1618, month: 13, day: 1 }));

        assert.throws(() => decode({ year: 1618, month: 1, day: 0 }));
        assert.doesNotThrow(() => decode({ year: 1618, month: 1, day: 1 }));
        assert.doesNotThrow(() => decode({ year: 1618, month: 1, day: 30 }));
        assert.throws(() => decode({ year: 1618, month: 1, day: 31 }));

        assert.doesNotThrow(() => decode({ year: 1618, month: 8, day: 31 }));
        assert.throws(() => decode({ year: 1618, month: 8, day: 32 }));

        assert.doesNotThrow(() => decode({ year: 3, month: 12, day: 30 }));
        assert.throws(() => decode({ year: 3, month: 12, day: 31 }));
        assert.doesNotThrow(() => decode({ year: 4, month: 12, day: 31 }));
        assert.throws(() => decode({ year: 4, month: 12, day: 32 }));
    });

    it('should return correct milpalt from imulpalt.', () => {
        testCases.forEach(({ imulpalt, milpalt }) => {
            assert.deepStrictEqual(decode(imulpalt), milpalt);
        });
    });
});
