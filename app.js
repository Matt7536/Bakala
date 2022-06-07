function addTask(price){
    if (!price || price<=0 || typeof(price) === 'string'){
        throw Error('No free gifts. Show me the money');
    }
        const vat = 1.17; //מע"מ
        const total = (price*vat).toFixed(2);
        return total;
}

function generateId() {
    //const rand = Math.random(); //0.1234567890
    //console.log(rand);
    //const serial = rand*10000000000;
    //console.log(serial);
    //const floor = Math.floor(serial);
    //return floor;

    const time = new Date().getTime();
    const rand = Math.random();
    console.log(time);
    console.log(rand);
    return Math.floor(rand*time);
}

/* function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
} */
