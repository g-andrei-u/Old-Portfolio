//TIME FUNCTION

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

const expand3 = () => {

  if (state === false) {

    projects[2].style.display = 'block'
    arrow[2].style.transform = 'rotate(0.5turn)';
    state = true
  }
  else {

    projects[2].style.display = 'none'
    arrow[2].style.transform = 'rotate(0.0turn)';
    state = false
  }
}

const expand4 = () => {

  if (state === false) {

    projects[3].style.display = 'block'
    arrow[3].style.transform = 'rotate(0.5turn)';
    state = true
  }
  else {

    projects[3].style.display = 'none'
    arrow[3].style.transform = 'rotate(0.0turn)';
    state = false
  }
}

const expand5 = () => {

  if (state === false) {

    projects[4].style.display = 'block'
    arrow[4].style.transform = 'rotate(0.5turn)';
    state = true
  }
  else {

    projects[4].style.display = 'none'
    arrow[4].style.transform = 'rotate(0.0turn)';
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


// CONTACT ME FUNCTION

const contactButton = document.getElementById('contact-me-button');
const contactBar = document.getElementById('contact');


contactButton.onclick = () => {

  contactBar.classList.toggle('open');
  main.onclick = () => {

    if(document.getElementsByClassName('open')) {
      
      contactBar.classList.remove('open');
    }
  }
};


// ANIMATION

const onClickBar = document.getElementsByClassName('onclickbar');
const aboutMe = document.getElementById('about_me');
const photo = document.getElementById('portrait')


const observer = new IntersectionObserver((entries) => {

  entries.forEach((entrie) => {
    
    if(entrie.isIntersecting) {

      entrie.target.classList.add('animation');
    }
  });
});

for(let el = 0; el < onClickBar.length; el++) {
  observer.observe(onClickBar[el]);
  observer.observe(aboutMe);
  observer.observe(photo);
};