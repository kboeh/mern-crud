const mongoose = require('mongoose');
const Product = require('./models/product');

require('dotenv').config();

main().catch(err => console.log(err));

async function main() {
//username + password + database name in MONGODB_URI
  await mongoose.connect(process.env.MONGODB_URI);
  console.log('Connected to database.')
}

const seedProducts = [
    // {
    // name: 'Grapefruit',
    // price: 1.00,
    // category: 'vegetable',
    // },
    {
    name: 'Apple',
    price: 2.00,
    category: 'fruit',
    },
]

Product.insertMany(seedProducts)
.then(res => {
    console.log(res)
})
.catch(e => {
    console.log(e)
})