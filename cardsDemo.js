let cardsZone = document.querySelector('#container');

let gallery = [
{
name: 'A Great Picture',
artist: 'Bruno Brave',
image: '1.jpg',
pTag: 200,
},
{
name: 'Another Picture',
artist: 'Bruno Brave',
image: '2.jpg',
pTag: 360,
},
{
name: 'Morning Good',
artist: 'Carla Uno',
image: '3.webp',
pTag: 295,
},
{
name: 'Old Picture',
artist: 'Kamilla Hart',
image: '4.jpg',
pTag: 522,
}
];

// html יצירת


let cardsHTML = '';

//יצירת כרטיסים
function createCards() {

gallery.forEach(photo =>{
    
let html = 
        `<div class="card">

            <img src="./${photo.image}" class="card-img-top"></img>

            <div class="card-body">
                <h5 class="card-title">${photo.name}</h5>
                <h6 class="card-text">${photo.artist}</h6>
                <p class="card-text">${photo.pTag}$</p>
                <a href="#" class="btn btn-primary">Claim Now</a>
            </div>

        </div>`;
cardsHTML += html;
});

return cardsHTML;
}

// השמה בדף
function insert(){
createCards();
cardsZone.innerHTML = cardsHTML;
}

insert();