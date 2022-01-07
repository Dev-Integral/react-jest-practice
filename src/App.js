export const Add = (x, y) => x + y ;

export const Total = (shipping, subTotal) => Add(shipping, subTotal);

export const numberWithComma = function(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

export const functions = {
    add: (x,y ) => x + y,
    isNull: ()=> null,
    checkValue: (x) => x,
    createUser: ()=> {return {firstName: 'Ayoola', lastName: 'Taiwo'}}
}

