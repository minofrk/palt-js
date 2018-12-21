import assert from 'assert';
import testCases from './test-cases';
import { xiaalx } from '../../src';

describe('xiaalx.decode', () => {
    it('should throw with invalid numbers.', () => {
        assert.doesNotThrow(() => xiaalx.decode(0));
        assert.throws(() => xiaalx.decode(Infinity));
        assert.throws(() => xiaalx.decode(Number.NaN));
        assert.throws(() => xiaalx.decode(0.1));
    });

    it('should return correct milpalt from xiaalx.', () => {
        testCases.forEach(item => {
            assert.deepStrictEqual(xiaalx.decode(item.xiaalx), item.milpalt);
        });
    });
});
