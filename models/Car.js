const cars = [
  {
    id: 1,
    name: 'Mitsubishi Pajero',
    price: 500000,
    photo: 'image-1.png',
    startRent: '2022-03-02',
    finishRent: '2022-03-02',
    createdRent: '2022-03-25',
    updatedRent: '2022-03-30',
  },
  {
    id: 2,
    name: 'Suzuki Ignis',
    price: 350000,
    photo: 'image-1.png',
    startRent: '2022-03-02',
    finishRent: '2022-03-02',
    createdRent: '2022-03-25',
    updatedRent: '2022-03-30',
  },
  {
    id: 3,
    name: 'Toyota Fortuner',
    price: 500000,
    photo: 'image-1.png',
    startRent: '2022-03-02',
    finishRent: '2022-03-02',
    createdRent: '2022-03-25',
    updatedRent: '2022-03-30',
  },
  {
    id: 4,
    name: 'Toyota Avanza',
    price: 350000,
    photo: 'image-1.png',
    startRent: '2022-03-02',
    finishRent: '2022-03-02',
    createdRent: '2022-03-25',
    updatedRent: '2022-03-30',
  },
  {
    id: 5,
    name: 'Honda Civic',
    price: 550000,
    photo: 'image-1.png',
    startRent: '2022-03-02',
    finishRent: '2022-03-02',
    createdRent: '2022-03-25',
    updatedRent: '2022-03-30',
  },
];

module.exports = {
  findAll: () => Promise.resolve(cars),
  create: ({ name, price, photo, startRent, finishRent, createdRent, updatedRent }) => {
    const id = cars[cars.length-1].id + 1;
    const car = {
      id,
      name,
      price,
      photo,
      startRent,
      finishRent,
      createdRent,
      updatedRent
    };
    cars.push(car);
    console.log(typeof priceNum)
    return Promise.resolve(car);
  },
};