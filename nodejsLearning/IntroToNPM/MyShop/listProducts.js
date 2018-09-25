var faker = require('faker');
console.log('==================================================');
console.log('Product Name:\t\t\tPrice:');

for (var i = 0; i < 10; i++) {
    console.log(faker.commerce.productName() + "\t\t" + faker.commerce.price());
}
console.log('==================================================');

