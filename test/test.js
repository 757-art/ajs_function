import  { lifeLevel } from '../src/function.js';
test('pureFunction', () => {
    const character = {
    name: 'Маг',
    health: 90
    };
    const result = lifeLevel(character);
    expect(result).toBe('healthy');
})
test.each ([
    {a: 55, expected: 'healthy'},
    {a: 49, expected: 'wounded'},
    {a: 14, expected: 'critical'},
])('', ({a, expected}) => {
    const result = lifeLevel({ health: a });
    expect(result).toBe(expected);
});