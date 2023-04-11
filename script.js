let timeEl = document.getElementById('timeNow');
timeEl.style.fontFamily = 'IBM Plex Sans';

const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

function time() {

    let d = new Date();
    let s = d.getSeconds();
    let m = d.getMinutes();
    let h = d.getHours();
    let day = d.getDate();
    let month = monthNames[d.getMonth()];
    let year = d.getFullYear();
    timeEl.textContent = 
    day + " " + month + " " + year + "  " + ("0" + h).substr(-2) + ":" + ("0" + m).substr(-2) + ":" + ("0" + s).substr(-2);
  }
setInterval(time, 100);


// EXPAND PROJECTS

let state = false
const projects = document.getElementsByClassName('project');
const arrow = document.getElementsByClassName('arrow')

const expand = () => {

  if (state === false) {

    projects[0].style.display = 'block';
    arrow[0].style.transform = 'rotate(0.5turn)';
    state = true
  }
  else {

    projects[0].style.display = 'none'
    arrow[0].style.transform = 'rotate(0.0turn)';
    state = false
  }
}

const expand2 = () => {

  if (state === false) {

    projects[1].style.display = 'block'
    arrow[1].style.transform = 'rotate(0.5turn)';
    state = true
  }
  else {

    projects[1].style.display = 'none'
    arrow[1].style.transform = 'rotate(0.0turn)';
    state = false
  }
}


// HAMBURGER

const hamburger = document.getElementsByClassName('hamburger')[0];
const nav = document.getElementsByTagName('nav')[0];
const main = document.getElementsByTagName('main')[0];
const aList = document.getElementsByTagName('a');

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

  for(let a in aList) {

    aList[a].onclick = () => {

      if(document.getElementsByClassName('active')) {

        nav.classList.remove('active');
        hamburger.classList.remove('active');
      }
    }
  }

}
