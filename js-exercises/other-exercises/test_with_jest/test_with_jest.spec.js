const test_with_jest = require("./test_with_jest");

describe('test_with_jest', () => {
    test('capitalize hoi', () => {
        expect(test_with_jest.capitalize('hoi')).toBe('Hoi');
    });
    test('reverse hoi', () => {
        expect(test_with_jest.reverseString('hoi')).toBe('ioh')
    });
    test('analyze array', () => {
        expect(test_with_jest.analyzeArray([1,8,3,4,2,6])).toEqual({
            average: 4,
            min: 1,
            max: 8,
            length: 6
        })
    });
})