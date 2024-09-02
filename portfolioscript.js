let appProject = document.getElementById('app-projects');
let webProject = document.getElementById('web-projects');
let webBtnID = document.getElementById('web-btn-id');
let appBtnID = document.getElementById('app-btn-id');


// SIDEBAR 
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


// BUTTON FUNCTIONS 

function mobileAppbtn(){
  webProject.style.display = 'none';
  appProject.style.display = 'flex';
  appBtnID.classList.remove('portfolio-btns-active');
  webBtnID.classList.remove('portfolio-btns-active')
  document.getElementById('dataBaseBtn').classList.remove('portfolio-btns-active');
  document.getElementById('frontendBtn').classList.remove('portfolio-btns-active');
  document.getElementById('backendBtn').classList.remove('portfolio-btns-active');
  // webBtnID.classList.remove('portfolio-btns-active');
  appBtnID.className = "portfolio-btns-active";
}
function webBtn(){
  webProject.style.display = 'flex';
  appProject.style.display = 'none';
  appBtnID.classList.remove('portfolio-btns-active');
  webBtnID.classList.remove('portfolio-btns-active')
  document.getElementById('dataBaseBtn').classList.remove('portfolio-btns-active');
  document.getElementById('frontendBtn').classList.remove('portfolio-btns-active');
  document.getElementById('backendBtn').classList.remove('portfolio-btns-active');
  // appBtnID.classList.remove('portfolio-btns-active');
  webBtnID.className = 'portfolio-btns-active';
}

function frontendBtn(){
  webProject.style.display = 'flex';
  appProject.style.display = 'none';
  appBtnID.classList.remove('portfolio-btns-active');
  webBtnID.classList.remove('portfolio-btns-active')
  document.getElementById('dataBaseBtn').classList.remove('portfolio-btns-active');
  document.getElementById('frontendBtn').classList.remove('portfolio-btns-active');
  document.getElementById('backendBtn').classList.remove('portfolio-btns-active');
  document.getElementById('frontendBtn').className = 'portfolio-btns-active';
}

function dataBaseBtn(){
  webProject.style.display = 'none';
  appProject.style.display = 'flex';
  appBtnID.classList.remove('portfolio-btns-active');
  webBtnID.classList.remove('portfolio-btns-active')
  document.getElementById('dataBaseBtn').classList.remove('portfolio-btns-active');
  document.getElementById('frontendBtn').classList.remove('portfolio-btns-active');
  document.getElementById('backendBtn').classList.remove('portfolio-btns-active');
  document.getElementById('dataBaseBtn').className = 'portfolio-btns-active';
}

function backendBtn(){
  webProject.style.display = 'flex';
  appProject.style.display = 'none';
  appBtnID.classList.remove('portfolio-btns-active');
  webBtnID.classList.remove('portfolio-btns-active')
  document.getElementById('dataBaseBtn').classList.remove('portfolio-btns-active');
  document.getElementById('frontendBtn').classList.remove('portfolio-btns-active');
  document.getElementById('backendBtn').classList.remove('portfolio-btns-active');
  document.getElementById('backendBtn').className = 'portfolio-btns-active';
}