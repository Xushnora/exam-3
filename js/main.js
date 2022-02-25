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


let elShopBtn = document.getElementById('openShopBtn1');
let elShopModal= document.getElementById('shopOpen1');
let elIcon1 = document.getElementById('icon1');


let count = 0;
elShopBtn.addEventListener('click', function(){
    elShopModal.classList.toggle('show-shop');

    if (count == 0) {
        elIcon1.className = "bx bx-chevrons-up";
        count++;
    } else {
        elIcon.className = "bx bx-chevrons-down";
        count = 0;
    }

});
