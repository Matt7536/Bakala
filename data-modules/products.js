// פונקציה היוצרת מספר סידורי
function generateId() {
    const time = new Date().getTime();
    const rand = Math.random();
    console.log(time);
    console.log(rand);
    return Math.floor(rand*time);
}

// פונקציה המוסיפה מע"מ לערך מספרי
function addTax(price){
    if (!price || price<=0 || typeof(price) === 'string'){
        throw Error('No free gifts. Show me the money');
    }
        const vat = 1.17; //מע"מ
        const total = (price*vat).toFixed(2);
        return total;
}






/////////////////  class תבנית לבניית מוצר עם  ////////////////////
class Product {
    constructor(price, type, image, des) {
        this.id = generateId();
        this.price = price;   
        this.name = type;
        this.image = image;
        this.description = des;
    }

    getName() {
        return `${this.name}`;
    }
    getID(){
        return `${this.id}`;
    }
    getPrice(){
        return `${addTax(this.price)}$`;
    }
    getImage(){
        return `./products${this.image}`;
    }
    getDes(){
        return `${this.description}`;
    }
    
}


///////////////////////////////////////////////////  מערך מוצרים  //////////////////////////////////////////////////////
const products = [

new Product (12, 'Chedder', '/chedder.jpg', '350gr of something')

/* {
    id: generateId(),
    price: 5.85,
    name: "Yellow Cheese",
    image: '/yellow cheese.jpg',
    description: "400gr of delicious vegan yellow chease",
},
{
    id: generateId(),
    price: 2.85,
    name: "Mozzarella",
    image: '/mozzarella.jpg',
    description: "250gr of delicious vegan chease cream",
},
{
    id: generateId(),
    price: 7.85,
    name: "Parmesan",
    image: '/parmesan.jpg',
    description: "250gr of delicious vegan chease cream",
},
{
    id: generateId(),
    price: 1.85,
    name: "Cream Cheese",
    image: '/cream cheese.jpg',
    description: "250gr of delicious vegan chease cream",
},
{
    id: generateId(),
    price: 11.85,
    name: "Roquefort",
    image: '/roquefort.jpg',
    description: "250gr of delicious vegan chease cream",
}*/
]
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



export {products, Product, generateId};