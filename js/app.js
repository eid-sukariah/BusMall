'use strict'
let imgRight = document.getElementById('img1');
let imgMiddle = document.getElementById('img2');
let imgleft = document.getElementById('img3');
// imgRight.setAttribute('src','/img/bag.jpg');
let maxAttempt = 25;
let counterAttempt =0;
let objectsArray = [];

function basMall(name, image){
    this.name = name;
    this.image = image;
    this.imageShow = 0;
    this.counterClick =0;
    //console.log(this);
    objectsArray.push(this);
}



new basMall('bag','img/bag.jpg');
new basMall('banana','img/banana.jpg');
new basMall('bathroom','img/bathroom.jpg');
new basMall('boots','img/boots.jpg');
new basMall('breakfast','img/breakfast.jpg');
new basMall('bubblegum','img/bubblegum.jpg');
new basMall('chair','img/chair.jpg');
new basMall('cthulhu','img/cthulhu.jpg');
new basMall('dog-duck','img/dog-duck.jpg');
new basMall('dragon','img/dragon.jpg');
new basMall('pen','img/pen.jpg');
new basMall('scissors','img/scissors.jpg');
new basMall('shark','img/shark.jpg');
new basMall('sweep','img/sweep.png');
new basMall('tauntaun','img/tauntaun.jpg');
new basMall('unicorn','img/unicorn.jpg');
new basMall('usb','img/usb.gif');
new basMall('water-can','img/water-can.jpg');
new basMall('wine-glass','img/wine-glass.jpg');
//new.basMall('wine-glass','img/wine-glass.jpg');
//console.log(objectsArray);


function generateRandomNo(){
  let random =  Math.floor(Math.random()*objectsArray.length);
   return random; 
}


let leftImageIndex;
let rightImageIndex;                                      //for save a new value
let midleImageIndex;
function renderThreeImage(){
    leftImageIndex = generateRandomNo();
    rightImageIndex = generateRandomNo();
    midleImageIndex = generateRandomNo();


while((rightImageIndex === midleImageIndex) || (rightImageIndex === leftImageIndex) || (leftImageIndex === midleImageIndex)){
    leftImageIndex = generateRandomNo();
    rightImageIndex = generateRandomNo();
}

//.textContent     atribute ('name' , value)
imgRight.setAttribute('src', objectsArray[rightImageIndex].image);
imgMiddle.setAttribute('src', objectsArray[midleImageIndex].image);      // setAttribute : for any attribute
imgleft.setAttribute('src', objectsArray[leftImageIndex].image);


}
renderThreeImage();


//      method         typeEvent            fun.
// imgRight.addEventListener('click', handleClicking);      
// imgMiddle.addEventListener('click', handleClicking);
// imgleft.addEventListener('click', handleClicking);
let div = document.getElementById('contener');
div.addEventListener('click', handleClicking);

                      //objact
function handleClicking(event){
    console.log(event);

    counterAttempt++ ;
    if(counterAttempt <= maxAttempt){
        if(event.target.id === 'img1'){
        objectsArray[rightImageIndex].imageShow++ ;
        objectsArray[rightImageIndex].counterClick++ ;

        }else if (event.target.id === 'img2'){
        objectsArray[midleImageIndex].imageShow++ ;
        objectsArray[midleImageIndex].counterClick++ ;
        }else{
        objectsArray[leftImageIndex].imageShow++ ;
        objectsArray[leftImageIndex].counterClick++ ;
    }
    renderThreeImage();

    }else{
        let unList = document.getElementById('ulist');
        let li;
        for(let i=0; i < objectsArray.length; i++){
            li = document.createElement('li');
            unList.appendChild(li);
           li.textContent = `[${objectsArray[i].name}] had ${objectsArray[i].counterClick}votes, and was seen [${objectsArray[i].imageShow}]times.`
        } 
        div.removeEventListener('click', handleClicking);
    }

    
}


//  button.addEventListener('click', function()){

//  }