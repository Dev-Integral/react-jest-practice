import axios from "axios";

export const Add = (x, y) => x + y ;

export const Total = (shipping, subTotal) => Add(shipping, subTotal);

export const numberWithComma = function(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

export const functions = {
    add: (x,y ) => x + y,
    isNull: ()=> null,
    checkValue: (x) => x,
    createUser: ()=> {return {firstName: 'Ayoola', lastName: 'Taiwo'}},
    fetchUser: ()=> axios.get('https://jsonplaceholder.typicode.com/users/1')
        .then(res => res.data)
        .catch(error => {return {'error': error}})
}

export const reverseString = (str) => str.split('').reverse().join('').toLowerCase();

export const chunkArray =(arr, len)=>{
    // Init chunked array
    const chunkedArr = [];

    // Loop through arr
    arr.forEach(val => {
        // Get last element
        const last = chunkedArr[chunkedArr.length - 1];

        // Check if last and if last length is equal to the chunk len
        if(!last || last.length === len){
            chunkedArr.push([val]);
        }else{
            last.push(val);
        }
    });
    return chunkedArr;
}
