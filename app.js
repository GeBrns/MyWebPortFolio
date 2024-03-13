const closeBar = document.querySelector('.close-button');
const openBar = document.querySelector('.menu-button');

openBar.addEventListener("click", function (){
  if (openBar.style.display = 'flex'){
    openBar.style.display = 'none'
  } 
  else{
    openBar.style.display = 'flex'
  }
})

closeBar.addEventListener("click", function (){
  if (openBar.style.display = 'none'){
      openBar.style.display = 'flex'
  } 
  else{
    openBar.style.display = 'none'
  }
})

function showSidebar(){
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'flex' 

  }
  function hideSidebar(){
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'none'
  }

