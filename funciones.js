//FUNCIONES
//calcular decuento

function getDiscount (price, discountPercentage) {
    let discountAmount = (discountPercentage / 100) * price;
    return price - discountAmount;
}

const price = 1200;
const discountPercentage = 20;
finalPrice = getDiscount(price, discountPercentage);

console.log('Price:'+price);
console.log('Discount:'+ discountPercentage +'%');
console.log('Total: ' + finalPrice);


