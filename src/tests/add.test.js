/*  yarn test -- --watch  */


// const add = (a, b) => a + b + 1;

// test('should add two number', () => {
//     expect(result).toBe(7);

//     if (result !== 7) {
//         throw new Error(`You added 4 and 3. the result was ${result}. Expect 7`);
//     }
// });


// const add = (a, b) => a + b;

// test('should add two number', () => {
//     const result = add(3, 4);
//     expect(result).toBe(7);

// });


const generateGreeting = (name = 'Anonymous') => `Hello ${name}!`;

test('should generate greeting for name', () =>  {
    const result = generateGreeting('Hamam');
    expect(result).toBe('Hello Hamam!');
});

// test('should generate greeting for name', () => {
//     const result = generateGreeting();
//     expect(result).toBe('Hello Anonymous!');
// });