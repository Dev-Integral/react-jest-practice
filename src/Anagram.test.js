import {isAnagram} from "./Anagram";

const nameCheck =()=> 'Checking names. . . ';
const nameChecked =()=> console.log('closed');

// beforeEach(()=> 'start database or something');
// afterEach(()=> 'close database or something');

describe('Checking Names', ()=>{
    beforeAll(()=> nameCheck());
    afterAll(()=> nameChecked());

    test('User is Jeff', ()=>{
        const user = 'Jeff';
        expect(user).toBe('Jeff');
    });

    test('User is Karen', ()=>{
        const user = 'Karen';
        expect(user).toBe('Karen');
    });

})

test('isAnagram fxn exists', ()=>{
    expect(typeof isAnagram).toEqual('function');
});

test('"cinema" is an anagram of "iceman"', ()=>{
    expect(isAnagram('iceman', 'cinema')).toBeTruthy();
});

test('"Dormitory" is an anagram of "Dirty Room##"', ()=>{
    expect(isAnagram('Dormitory', "Dirty Room##")).toBeTruthy();
});

