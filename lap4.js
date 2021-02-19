const black = document.querySelectorAll('.black');
const white = document.querySelectorAll('.white');

for (let index = 0; index < black.length; index++) {
    black[index].addEventListener('click',play);
}
for (let index = 0; index < white.length; index++) {
    white[index].addEventListener('click',play);
}

let check =true

function play() {
    if (check) {
    color();
    check = false; 
} 
else {
    color2();
    check = true;
}
}

function color() {
    for (let index = 0; index < black.length; index++) {
        black[index].className = 'white';
    }
    for (let index = 0; index < white.length; index++) {
        white[index].className = 'black';
    }

}
function color2() {
    for (let index = 0; index < black.length; index++) {
        black[index].className = 'black';
    }
    for (let index = 0; index < white.length; index++) {
        white[index].className = 'white';
    }

}

