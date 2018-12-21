import assert from 'assert';
import testCases from './test-cases';
import invalidMilpaltCases from '../invalid-milpalt-cases';
import { imulpalt } from '../../src';

describe('imulpalt.encode', () => {
    it('should throw with invalid numbers.', () => {
        assert.doesNotThrow(() => imulpalt.encode({ year: 1988, month: 11, day: 30 }));
        assert.throws(() => imulpalt.encode({ year: Infinity, month: 11, day: 30 }));
        assert.throws(() => imulpalt.encode({ year: 1988, month: Infinity, day: 30 }));
        assert.throws(() => imulpalt.encode({ year: 1988, month: 11, day: Infinity }));
        assert.throws(() => imulpalt.encode({ year: Number.NaN, month: 11, day: 30 }));
        assert.throws(() => imulpalt.encode({ year: 1988, month: Number.NaN, day: 30 }));
        assert.throws(() => imulpalt.encode({ year: 1988, month: 11, day: Number.NaN }));
        assert.throws(() => imulpalt.encode({ year: 1988.1, month: 11, day: 30 }));
        assert.throws(() => imulpalt.encode({ year: 1988, month: 11.1, day: 30 }));
        assert.throws(() => imulpalt.encode({ year: 1988, month: 11, day: 30.1 }));
    });

    it('should throw with invalid milpalt.', () => {
        invalidMilpaltCases.forEach(milpalt => {
            assert.throws(() => imulpalt.encode(milpalt));
        });
    });

    it('should return correct imulpalt from milpalt.', () => {
        testCases.forEach(item => {
            assert.deepStrictEqual(imulpalt.encode(item.milpalt), item.imulpalt);
        });
    });
});
