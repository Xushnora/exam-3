let elSearchBtn = document.getElementById('searchBtn');
let elHeaderModal= document.getElementById('searchModal');
let elIcon = document.getElementById('icon');


let count = 0;
elSearchBtn.addEventListener('click', function(){
    elHeaderModal.classList.toggle('show-header');

    if (count == 0) {
        elIcon.className = "bx bx-x";
        count++;
    } else {
        elIcon.className = "fal fa-search";
        count = 0;
    }

});



let elHomebutton = document.getElementById('openHomeBtn');
let elHomeModal= document.getElementById('homeModal');
let elHomeClose= document.getElementById('homeClose');

elHomebutton.addEventListener('click', function(){
  elHomeModal.classList.add('show-home');
})
elHomeClose.addEventListener('click', function(){
  elHomeModal.classList.remove('show-home');
});



let elHomebutton2 = document.getElementById('openHomeBtn2');
let elHomeModal2 = document.getElementById('homeModal2');
let elHomeClose2 = document.getElementById('homeClose2');

elHomebutton2.addEventListener('click', function(){
  elHomeModal2.classList.add('show-home');
})
elHomeClose2.addEventListener('click', function(){
  elHomeModal2.classList.remove('show-home');
});


let elHomebutton3 = document.getElementById('openHomeBtn3');
let elHomeModal3 = document.getElementById('homeModal3');
let elHomeClose3 = document.getElementById('homeClose3');

elHomebutton3.addEventListener('click', function(){
  elHomeModal3.classList.add('show-home');
})
elHomeClose3.addEventListener('click', function(){
  elHomeModal3.classList.remove('show-home');
});


