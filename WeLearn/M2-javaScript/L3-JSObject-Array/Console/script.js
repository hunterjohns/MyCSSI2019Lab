const article = {
  name: 'Dog family gives birth to 10 puppies',
  views: 1035,
  datePublished: '03/25/2018',
  author: {
    name: 'Joe Corgi',
    title: 'Senior Canine Editor'
  }
};

const iPhone = {
  name: 'iPhone 8',
  color: 'black',
  serialNumber: 73938,
  camera: {
    size: 'small',
    zoomMeters: 500
  }
};

const favoriteFoods = {
  food1: 'Pizza',
  food2: 'Chicken',
  food3: 'Steak',
  food4: 'IceCream',
  food5: 'Crackers'
};

console.log(favoriteFoods.food1 + ' ' + favoriteFoods.food2 + ' ' + favoriteFoods.food3 + ' ' + favoriteFoods.food4 + ' ' + favoriteFoods.food5);
console.log(favoriteFoods);

for (var food in favoriteFoods) {
  console.log(favoriteFoods[food]);
}

const seasons = ['Spring',  'Summer', 'Fall', 'Winter'];
let message = 'The seasons are '

for (let i = 0; i < 4; i++) {
  message += seasons[i] + ' ';
}
console.log(message);
