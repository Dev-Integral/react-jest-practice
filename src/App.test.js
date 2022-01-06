import {Add, Total} from './App'

// This is a unit test;
test('Addition of two  numbers', ()=>{
    const value = Add(2, 3);
    expect(value).toBe(5);
});
// This is an Integration test;
test('Total', ()=> {
    expect(Total(5, 7)).toBe(12);
})