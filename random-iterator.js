const random = require('random-number');

const randomIndex = array => 
    random({
        min: 0,
        max: array.length - 1,
        integer: true
    });


const randomIterator = array => {
    const tmpArray = array.slice();

    return {
        [Symbol.iterator] : () => ({
            next: () => {
                if(tmpArray.length == 0)
                    return { done: true };
                
                const index = randomIndex(tmpArray);
                const value = tmpArray[index];
                tmpArray.splice(index, 1);
                return {
                    value,
                    done: false
                }
            }
        })
    }
}

function* randomIteratorYield(array) {
    const tmpArray = array.slice();

    while(tmpArray.length > 0) {
        const index = randomIndex(tmpArray);
        const value = tmpArray[index];
        tmpArray.splice(index, 1);
        yield value;
    }
}

const myArray = [
    'Knife',
    'Gun',
    'Sword',
    'Axe'
];

for(const item of randomIterator(myArray)) {
    console.log('Random: ' + item);
}

for(const item of randomIteratorYield(myArray)) {
    console.log('Random Yield: ' + item);
}
