function showSidebar(){
    const sidebar = document.querySelector('.navbar')
    sidebar.style.display = 'flex';
  } 
  
  function closeSidebar(){
    const Sidebar = document.querySelector('.navbar')
    Sidebar.style.display = 'none';
  } 
  
  
  function changeImage() {
    var image = document.getElementById("header-navbar-button");
  
    // Check the current source and change it to the other image
    if (image.src.match("img/icon/menu.svg")) {
      image.src = "img/icon/close.svg";
      const sidebar = document.querySelector('.navbar')
      sidebar.style.display = 'flex';
    } else {
      image.src = "img/icon/menu.svg";
      const Sidebar = document.querySelector('.navbar')
      Sidebar.style.display = 'none';
    }
  }