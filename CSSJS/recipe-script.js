
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

  function changeChart(chart,button) {

    var flexSection = document.getElementById(chart);
 
    const Fbutton = document.getElementById(button);

    var computedStyle = window.getComputedStyle(flexSection);


    if (computedStyle.display === 'block') {
        flexSection.style.display = 'none';
        Fbutton.src = "/IMG/icon/down.svg";
        
    } else {
        flexSection.style.display = 'block';
        Fbutton.src = "/IMG/icon/up.svg";
    }
}



            
