import {Total, numberWithComma, functions, reverseString} from './App'

// This is a unit test;
test('Addition of two  numbers', ()=>{
    const value = functions.add(2, 3);
    expect(value).toBe(5);
});
// This is an Integration test because the Total fxn is dependent on the output of the Add fxn;
test('Total', ()=> {
    expect(Total(5, 7)).toBe(12);
});

// This should convert numbers to include commas
test('number with comma', ()=>{
    let expNum = numberWithComma(50000);
    let expNum2 = numberWithComma(50000.23);
    expect(expNum).toBe('50,000');
    expect(expNum2).toBe('50,000.23');
});

// CHECKS FOR TRUTHY AND FALSY VALUES; 0 null undefined

// toBeNull matches only null
// toBeUndefined matches only undefined
// toBeDefined is the opposite of toBeUndefined
// toBeTruthy matches anything that an if statement treats as true
// toBeFalsy matches anything that an if statement treats as false

// toBeNull
test('Should be null', ()=>{
    expect(functions.isNull()).toBeNull();
});

// toBeFalsy
test('Should be falsy', ()=>{
    expect(functions.checkValue(0)).toBeFalsy();
    expect(functions.checkValue(undefined)).toBeFalsy();
    expect(functions.checkValue(null)).toBeFalsy();
    expect(functions.checkValue(false)).toBeFalsy();
});

// toEqual
test('User should be Ayoola Taiwo object', ()=>{
    expect(functions.createUser()).toEqual({
        firstName: 'Ayoola',
        lastName: 'Taiwo'
    });
});

// Less than and greater than
test('Should be under 1600', ()=>{
    const load1 = 800;
    const load2 = 500;
    expect(load1+load2).toBeLessThan(1600);
}) 

// Regex
test('There is no I in team', ()=>{
    expect('team').not.toMatch(/I/i);
})

// Arrays
test('Admin should be in usernames', () => {
    const usernames = ['Taiwo', 'Kehinde', 'Admin'];
    expect(usernames).toContain('Admin');
});

// working with Async data

// Promise
test('User fetched name should be Leanne Graham', ()=>{
    // expect.assertions(2);
    // return functions.fetchUser().then(res =>{
    //     expect(res.username).toEqual('Bret');
    //     expect(res.name).toEqual('Leanne Graham');
    // });
});

// Async Await
test('User fetched name should be Leanne Graham', async()=>{
    // expect.assertions(2);
    // const data =await functions.fetchUser();
    //     expect(data.username).toEqual('Bret');
    //     expect(data.name).toEqual('Leanne Graham');
});

test('reverseString fxn exist', ()=>{
    expect(reverseString).toBeDefined();
});

test('String Reverses', ()=>{
    expect(reverseString('hello')).toBe('olleh');
});

test('String reverses with uppercase', ()=>{
    expect(reverseString('Hello')).toBe('olleh');
})