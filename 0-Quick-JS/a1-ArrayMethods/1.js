const items = [
    { name: 'Bike', price: '500' },
    { name: 'TV', price: '520' },
    { name: 'Book', price: '50' },
    { name: 'Car', price: '5' },
    { name: 'Phone', price: '45' },
    { name: 'Laptop', price: '456' },
    { name: 'Computer', price: '1000' },
    { name: 'mouse', price: '200' },
    { name: 'Keyboard', price: '250' },
    { name: 'CPC', price: '300' }
];
// filter methods 
const fiitem = items.filter((items) => {
    return items.price <= 500
})
console.log((fiitem));
// map methods
const newItem = items.map((item) => {
    return item.price
})
console.log(newItem);
// forEach
items.forEach((item) => {
    console.log(item.price);
})
