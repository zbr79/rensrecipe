
// scipt for top bar's sidebar buttton picture change
function changeImage() {
  var image = document.getElementById("header-navbar-button").querySelector('img');
  console.log(image);

  // Check the current source and change it to the other image
  if (image.src.match("img/icon/menu.svg")) {
    image.src = "img/icon/close.svg";
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'flex';
  } else {
    image.src = "img/icon/menu.svg";
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
      Fbutton.src = "../../../../img/icon/arrow-right.svg";
      
  } else {
      flexSection.style.display = 'block';
      Fbutton.src = "../../../../img/icon/down.svg";
 

  }
}
