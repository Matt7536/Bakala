function addTax(price){
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










const products = [
{
    id: generateId(),
    price: 5.85,
    name: "Yellow Chease Bulk",
    image: '2016/03/05/19/24/cheese-1238395_960_720.jpg',
    description: "400gr of delicious vegan yellow chease",
},
{
    id: generateId(),
    price: 2.85,
    name: "Mozarella",
    image: '2016/03/05/19/24/cheese-1238395_960_720.jpg',
    description: "250gr of delicious vegan chease cream",
},
{
    id: generateId(),
    price: 7.85,
    name: "Parmegian",
    image: '2016/03/05/19/24/cheese-1238395_960_720.jpg',
    description: "250gr of delicious vegan chease cream",
},
{
    id: generateId(),
    price: 1.85,
    name: "Chease Cream",
    image: '2016/03/05/19/24/cheese-1238395_960_720.jpg',
    description: "250gr of delicious vegan chease cream",
},
{
    id: generateId(),
    price: 11.85,
    name: "Rockfort",
    image: '2016/03/05/19/24/cheese-1238395_960_720.jpg',
    description: "250gr of delicious vegan chease cream",
}
]






function getProductTemplate() {

}







//  -------------------------------------------------------------------------------------



function sortProducts() {
    const sortField = document.querySelector('#sort-field');
    const sortDirection = sortField.value;

    //sort array of products
}




//  -------------------------------------------------------------------------------------





//פונקציה שמקבלת תבנית של מוצרים כשלהם על הנתונים שלהם
function getProductsTemplate() {
    const IMG_PATH = 'https://cdn.pixabay.com/photo/'; // configuration of the project
    let html = '';

    //syntax: arr.forEach(item =>{});
    products.forEach(prod => {
        html +=
            `<div class="card" style="width: 18rem;">
                <img src="${IMG_PATH}${prod.image}"
                    class="card-img-top" alt="${prod.description}">
                <div class="card-body">
                    <h5 class="card-title">${prod.name}</h5>
                    <p class="card-text">$
                        ${addTax(prod.price)}</p>
                    <a href="#" class="btn btn-primary">View Details</a>
                </div>
            </div>`;
    })

    return html;
}

// פונקציה שמחילה את הנתונים בקונטיינר בדף
function displayProduct() {
    const container = document.getElementById('products-container');
    const product_html = getProductsTemplate();
    container.innerHTML = product_html;
}

displayProduct();








