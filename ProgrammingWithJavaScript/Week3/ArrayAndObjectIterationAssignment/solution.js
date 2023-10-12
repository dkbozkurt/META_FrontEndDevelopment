// Task 1
var dairy = ['cheese', 'sour cream', 'milk', 'yogurt', 'ice cream', 'milkshake']

function logDairy(){

    for(element of dairy)
    {
        console.log(element);
    }
}

logDairy();


// Task 2
const animal = {
    canJump: true
};

const bird = Object.create(animal);
bird.canFly = true;
bird.hasFeathers = true;

function birdCan()
{
    for(prop of Object.keys(bird))
    {
        console.log(`${prop}: ${bird[prop]}`);
    }
}

birdCan();

// Task 3

function animalCan(){
    for(prop in bird)
    {
        console.log(`${prop}: ${bird[prop]}`);
    }
}

animalCan();