

const someItems = () => {
    let iterations = -1;
    const iterator = {
        [Symbol.iterator]: () => ({
            next: () => {
                iterations++;
                switch(iterations) {
                    case 0: 
                        return { value: 'Big Sword', done: false };
                    case 1: 
                        return { value: 'Armor', done: false };
                    case 2:
                        return { value: 'Knife', done: false};
                    default:
                        return { done: true };
                }
            }
        })
    }
    return iterator;
}

function* someItemsYield() {
    yield "Big Sword";
    yield "Armor";
    yield "Knife";
}


for(const item of someItems()) {
    console.log(item);
}

for(const item of someItemsYield()) {
    console.log(item);
}
