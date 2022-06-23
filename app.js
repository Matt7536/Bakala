import {products, generateId, Product} from "./data-modules/products.js";








/* function addTax(price){
    if (!price || price<=0 || typeof(price) === 'string'){
        throw Error('No free gifts. Show me the money');
    }
        const vat = 1.17; //מע"מ
        const total = (price*vat).toFixed(2);
        return total;
} */









////////////////////////////////////////////////  (לא נגענו עדיין) פונקציית מיון  //////////////////////////////////////


function sortProducts() {
    const sortField = document.querySelector('#sort-field');
    const sortDirection = sortField.value;

    //sort array of products
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


/* // לכל מוצר במערך ID יצירת
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



/* //////////////  class תבנית לבניית מוצר עם ///////////////
class Product {
    constructor(price, type, image, des) {
        this.id = generateId();
        this.price = price;   
        this.name = type;
        this.image = image;
        this.description = des;
    }

    getPrice(){
        return `${this.price}$`
    }
}

const prod1 = new Product(15);
console.log(prod1.getPrice());


///////////////////////////////////////////////////  מערך מוצרים  //////////////////////////////////////////////////////
const products = [

new Product (12, 'Chedder', '/chedder.jpg', '350gr of something'),

{
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
}
]
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */

























//.HTML-פונקציה שמקבלת מערך, עוברת על כל האובייקטים שבו ויוצרת לכל אחד מהם כרטיס ב 
// מסוג סטרינג, שאותו הפונקציה מחזירה לקריאה html את כל הכרטיסים שנוצרו היא צוברת לנתון בשם

function getProductsTemplate(productData) {
    let html = '';

    //syntax: arr.forEach(item =>{});
    productData.forEach(prod => {
        html +=
            `<div class="card" style="width: 18rem;">
                <img src="${prod.getImage()}"
                    class="card-img-top" alt="${prod.getDes()}">
                <div class="card-body">
                    <h5 class="card-title">${prod.getName()}</h5>
                    <p class="card-text">${prod.getPrice()}
                        </p>
                    <a href="#" class="btn btn-primary">View Details</a>
                </div>
            </div>`;
    });

    return html;
}




// פונקציה שמחילה את הנתונים בקונטיינר בדף
function displayProduct(theProducts) {
    const product_html = getProductsTemplate(theProducts);
    const container = document.getElementById('products-container');

    container.innerHTML = product_html;
    getTotalProduct();
}

displayProduct(products);








//Add total # of product by length, add id to html first
function getTotalProduct() {
    const total = document.getElementById('total-products');
    total.innerHTML = `(${products.length})`;
}


document.querySelector('.button').addEventListener('click', searchProduct());

function searchProduct() {
    const searchField = document.getElementById('search-field');
    const searchTerm = searchField.value;
    const searchResult = products.filter(prod => {
        return prod.name.toLowerCase().includes(searchTerm.toLowerCase());
        /* if (prod.name.toLowerCase() === searchTerm.toLowerCase){
            return true;
        } */
    });
    console.log(searchResult); // מחזיר מערך חדש עם תוצאות ה"חיפוש"
    displayProduct(searchResult);
}










