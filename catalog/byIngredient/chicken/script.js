
// scipt for top bar's sidebar buttton picture change
function changeImage() {
  var image = document.getElementById("sidebar-button").querySelector('img');
  console.log(image);

  // Check the current source and change it to the other image
  if (image.src.match("IMG/icon/menu.svg")) {
    image.src = "/IMG/icon/close.svg";
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'flex';
  } else {
    image.src = "/IMG/icon/menu.svg";
    const Sidebar = document.querySelector('.sidebar')
    Sidebar.style.display = 'none';
  }
}

// script for sidebar's toggle
function changeSideBar(chart,button) {

  var flexSection = document.getElementById(chart);

  const Fbutton = document.getElementById(button);

  var computedStyle = window.getComputedStyle(flexSection);


  if (computedStyle.display === 'block') {
      flexSection.style.display = 'none';
      Fbutton.src = "/IMG/icon/arrow-right.svg";
      
  } else {
      flexSection.style.display = 'block';
      Fbutton.src = "/IMG/icon/down.svg";
 

  }
}

// script for navbar toggle
function changeNavBar() {

  var flexSection = document.querySelector('.navbar-menu');

  const Fbutton = document.getElementById('navbar-button');

  const changeText = document.getElementById('navbar-title');

  var headerBorder = document.querySelector('.navbar-header');

  // var computedStyle = window.getComputedStyle(flexSection);


  if (flexSection.style.display === 'block') {
      flexSection.style.display = 'none';
      Fbutton.src = "/IMG/icon/down.svg";
      changeText.style.display = 'block';
      headerBorder.style.borderBottom = '2px solid gray'

      headerBorder.style.boxShadow ='10px 10px 10px rgba(0, 0, 0, 0.1)'; 
      console.log("if");
      
  } else {
      flexSection.style.display = 'block';
      Fbutton.src = "/IMG/icon/up.svg";
      changeText.style.display = 'none';
      headerBorder.style.borderBottom = '0px';
      headerBorder.style.boxShadow ='0px 0px 0px rgba(0, 0, 0, 0.1)'; 
      console.log("else");
 

  }
}
