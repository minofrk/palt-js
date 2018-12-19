import assert from 'assert';
import testCases from './test-cases';
import { decode } from '../../src/xiaalx';

describe('xiaalx.decode', () => {
    it('should throw with invalid numbers.', () => {
        assert.doesNotThrow(() => decode(0));
        assert.throws(() => decode(Infinity));
        assert.throws(() => decode(Number.NaN));
        assert.throws(() => decode(0.1));
    });

    it('should return correct milpalt from xiaalx.', () => {
        testCases.forEach(({ xiaalx, milpalt }) => {
            assert.deepStrictEqual(decode(xiaalx), milpalt);
        });
    });
});
