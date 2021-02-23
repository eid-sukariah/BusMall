'use strict'
let imgRight = document.getElementById('img1');
let imgMiddle = document.getElementById('img2');
let imgleft = document.getElementById('img3');
let button = document.getElementById('button');

let maxAttempt = 25;
let counterAttempt =0;
let objectsArray = [];
let NameArray = [];
let votArr = [];
let showArr = [];
let firstTry = [];

function basMall(name, image){
    this.name = name;
    this.image = image;
    //this.showArr = 0;
    this.counterClick =0;
    this.imageShow = 0;
    
    objectsArray.push(this);
    NameArray.push(this.name)
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
//console.log(objectsArray);


function generateRandomNo(){
  let random =  Math.floor(Math.random()*objectsArray.length);

   return random; 

   if (firstTry.length !== 0){
    while(firstTry.includes(leftImageIndex) || firstTry.includes(rightImageIndex) || firstTry.includes(midleImageIndex))
    leftImageIndex = generateRandomNo ();
    rightImageIndex = generateRandomNo();
    midleImageIndex = generateRandomNo();

}
}


let leftImageIndex;
let rightImageIndex;                                      //for save a new value
let midleImageIndex;
function renderThreeImage(){
    firstTry = []; 
    leftImageIndex = generateRandomNo ();
    rightImageIndex = generateRandomNo();
    midleImageIndex = generateRandomNo();


while((rightImageIndex === midleImageIndex) || (rightImageIndex === leftImageIndex) || (leftImageIndex === midleImageIndex)){
    leftImageIndex = generateRandomNo();
    rightImageIndex = generateRandomNo();
}

firstTry.push(leftImageIndex, rightImageIndex, midleImageIndex)
console.log(firstTry);



       

//.textContent     atribute ('name' , value)
imgRight.setAttribute('src', objectsArray[rightImageIndex].image);
objectsArray[rightImageIndex].imageShow++ ;                            //put this counter in if was wrong

imgMiddle.setAttribute('src', objectsArray[midleImageIndex].image);
objectsArray[midleImageIndex].imageShow++ ;

imgleft.setAttribute('src', objectsArray[leftImageIndex].image);
objectsArray[leftImageIndex].imageShow++ ;

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
    //console.log(event);

    if(counterAttempt <= maxAttempt){
        if(event.target.id === 'img1'){
        objectsArray[rightImageIndex].counterClick++ ;
        counterAttempt++ ;

        }else if (event.target.id === 'img2'){
        objectsArray[midleImageIndex].counterClick++ ;
        counterAttempt++ ;

        }else{
        objectsArray[leftImageIndex].counterClick++ ;
        counterAttempt++ ;

    }
    renderThreeImage();
    saveVote();
    }else{
       
        let unList = document.getElementById('ulist');
        let li;
        for(let i=0; i < objectsArray.length; i++){
            li = document.createElement('li');
            unList.appendChild(li);
           li.textContent = `${objectsArray[i].name} ==> had [${objectsArray[i].counterClick}]votes, and was seen [${objectsArray[i].imageShow}]times.`
        } 
        chartRender()

        div.removeEventListener('click', handleClicking);
        }    
   
    
        //handleClicking(event);   
}


//  button.addEventListener('click', function()){

//  }



function chartRender(){
    for(let j=0; j < objectsArray.length; j++){
        votArr.push(objectsArray[j].imageShow)
        showArr.push(objectsArray[j].counterClick)
        }
        console.log(votArr);
        console.log(showArr);


var ctx = document.getElementById('myChart').getContext('2d');
var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'bar',

    // The data for our dataset
    data: {
        labels: NameArray,
        datasets: [{
            label: 'votes',
            backgroundColor: '#413c69',
            borderColor: 'rgb(255, 99, 132)',
            data: votArr,
        },{
            label: 'imageShow',
            backgroundColor: '#4a47a3',
            borderColor: 'rgb(255, 99, 132)',
            data: showArr,
        }]
    },

    // Configuration options go here
    options: {}
});

console.log(votArr);
}
console.log(showArr)


function saveVote(){
    let vote = objectsArray;
    localStorage.setItem('vote',JSON.stringify(vote));
console.log(localStorage)
}
let list;
function getVoteToScreen(){
    let getVoteToScreen = localStorage.getItem('vote')
     list = JSON.parse(getVoteToScreen);
    console.log(list);

    if(list){
        objectsArray = list;
    }
    
}



getVoteToScreen();