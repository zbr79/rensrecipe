
  
  function changeImage() {
    // console.log('called');
    var image = document.getElementById("header-navbar-button");
  
    // Check the current source and change it to the other image
    if (image.src.match("img/icon/menu.svg")) {
      image.src = "../../../../img/icon/close.svg";
      const sidebar = document.querySelector('.navbar')
      sidebar.style.display = 'flex';

    } else {

      image.src = "../../../../img/icon/menu.svg";
      const Sidebar = document.querySelector('.navbar')
      Sidebar.style.display = 'none';
    }
  }

  function changeChart(chart,button) {

    // console.log(chart);
   

    var flexSection = document.getElementById(chart);
 
    const Fbutton = document.getElementById(button);

   
    // console.log(chart);
    // console.log(flexSection.style.display);
    var computedStyle = window.getComputedStyle(flexSection);


    if (computedStyle.display) {
      console.log(computedStyle.display);

  } else {
      console.error('erro!');
  }


    if (computedStyle.display === 'block') {
        flexSection.style.display = 'none';
        Fbutton.src = "../../../../img/icon/down.svg";
        
    } else {
        flexSection.style.display = 'block';
        Fbutton.src = "../../../../img/icon/up.svg";
   

    }
}



            
