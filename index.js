class Cars{
    numberOfseats = 3;
    color = 'green'

    static numberOfseats = 3
}

// an object

const  car = new Cars()

car.color = 'Red';
Cars.numberOfseats = 15;

console.log('car', Cars);