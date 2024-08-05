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
    document.getElementById('sidebar-icon').style.display = 'none'
    document.getElementById('close-icon').style.display = 'block'
    document.querySelector('.sidebar').style.transform = "translateX(0)"
})
document.getElementById('close-icon').addEventListener("click" , function (){
    document.getElementById('close-icon').style.display = 'none'
    document.getElementById('sidebar-icon').style.display = 'block'
    document.querySelector('.sidebar').style.transform = "translateX(100%)"
})