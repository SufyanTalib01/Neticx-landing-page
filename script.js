document.getElementById('London').style.display = "block";


function openCity(evt, cityName) {
    // Declare all variables
    var i, tabcontent, tablinks;
  
    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
  
    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
  
    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
  }

//   SIDEBAR 
document.getElementById('sidebar-icon').addEventListener("click" , function (){
  console.log('hello world');
    document.getElementById('sidebar-icon').style.display = 'none'
    document.getElementById('close-icon').style.display = 'block'
    document.querySelector('.sidebar').style.transform = "translateX(0)"
    console.log("hello world");
})
document.getElementById('close-icon').addEventListener("click" , function (){
    document.getElementById('close-icon').style.display = 'none'
    document.getElementById('sidebar-icon').style.display = 'block'
    document.querySelector('.sidebar').style.transform = "translateX(100%)"
});

// TEST 

if (window.matchMedia("(max-width: 736px)").matches) {
  let Flag = 0;

  

function Controller(x){
    Flag = Flag + x;
    Slideshow(Flag);
    reviewFlag = reviewFlag +  x;
    reviewSlideshow(reviewFlag);
}

function Slideshow(num){
    let Customer = document.getElementsByClassName('customer-id');
    if(num === Customer.length){
        Flag = 0;
        num = 0;
    }
    if(num < 0){
        Flag = Customer.length - 1;
        num = Customer.length - 1;
    }

    for(let y of Customer){
        y.style.display = 'none';
    }
    Customer[num].style.display = "block";
}
Slideshow(Flag);
console.log("this is mobile Mode");

// TEXT 
let reviewFlag = 0;
function reviewSlideshow(number){
  let reviewPara = document.getElementsByClassName('review-para-child');

  if(number === reviewPara.length){
    reviewFlag = 0;
    number = 0;
  }
  if(number < 0){
    reviewFlag = reviewPara.length - 1;
      number = reviewPara.length - 1;
  }

  for(let y of reviewPara){
      y.style.display = 'none';
  }
  reviewPara[number].style.display = "block";

  
}
reviewSlideshow(reviewFlag);
console.log("this is review mobile Mode");
}



let reviewParagraph = document.getElementsByClassName('review-para-child')
reviewParagraph[0].style.display = 'block'

// PORTFOLIO PAGE 

// let allProjects = document.getElementById('allprojects');

// allProjects.map((Pname) => {
//   Pname.style.display = 'none';
// })



