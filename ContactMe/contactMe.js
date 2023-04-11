const hamburger = document.getElementsByClassName('hamburger')[0];
const nav = document.getElementsByTagName('nav')[0];
const main = document.getElementsByTagName('main')[0];

hamburger.onclick = () => {

  if(!nav.active) {

    nav.classList.toggle('active');
    hamburger.classList.toggle('active');
  }

  main.onclick = () => {

    if(document.getElementsByClassName('active')) {
      
      nav.classList.remove('active');
      hamburger.classList.remove('active');
    }
  }
}