const chars_lbl = document.querySelectorAll('label')
const char_icon = document.querySelectorAll('.char_icon img')

const player_mini_icon = document.querySelectorAll('.mini-icon')
const p1_health_bar = document.querySelector('.arena-div__p1-div__health .bar-div .health-div')
const p2_health_bar = document.querySelector('.arena-div__p2-div__health .bar-div .health-div')

const boxes_div = document.querySelectorAll('.boxes')
let x_o = false

const main = () =>{
    for(let i = 0; i < boxes_div.length; i++) {
        boxes_div[i].addEventListener('click', () => {clicked_box(i)})
    }
}

const clicked_box = (index) => {
    boxes_div[index].textContent = (!x_o) ? "X" : "O"
    boxes_div[index].style.pointerEvents = "none"

    check_pattern((!x_o) ? "X" : "O");
    x_o = !x_o
}

const disable_box = () => {
    for(let i = 0; i < boxes_div.length; i++) {
        boxes_div[i].style.pointerEvents = "none"
    }
}

const check_pattern = (ltr) => {


    if(boxes_div[0].textContent == ltr && boxes_div[1].textContent == ltr && boxes_div[2].textContent == ltr){
        health_bar(ltr);
        disable_box();
    }
    else if(boxes_div[3].textContent == ltr && boxes_div[4].textContent == ltr && boxes_div[5].textContent == ltr){
        health_bar(ltr);
        disable_box();
    }
    else if(boxes_div[6].textContent == ltr && boxes_div[7].textContent == ltr && boxes_div[8].textContent == ltr){
        health_bar(ltr);
        disable_box();
    }

    else if(boxes_div[0].textContent == ltr && boxes_div[3].textContent == ltr && boxes_div[6].textContent == ltr){
        health_bar(ltr);
        disable_box();
    }
    else if(boxes_div[1].textContent == ltr && boxes_div[4].textContent == ltr && boxes_div[7].textContent == ltr){
        health_bar(ltr);
        disable_box();
    }
    else if(boxes_div[2].textContent == ltr && boxes_div[5].textContent == ltr && boxes_div[8].textContent == ltr){
        health_bar(ltr);
        disable_box();
    }

    else if(boxes_div[0].textContent == ltr && boxes_div[4].textContent == ltr && boxes_div[8].textContent == ltr){
        health_bar(ltr);
        disable_box();
    }
    else if(boxes_div[2].textContent == ltr && boxes_div[4].textContent == ltr && boxes_div[6].textContent == ltr){
        health_bar(ltr);
        disable_box();
    }
    else{
        console.log("asdf")
    }
}

for(let i = 0; i < 2; i++){
    if(chars_lbl[i].textContent == "Pikachu"){
        char_icon[i].src = "/css/imgs/index/pikachuMain.jpg"
        player_mini_icon[i].src = "/css/imgs/arena/pikachuIcon.png"

    }else if(chars_lbl[i].textContent == "Bulbasaur"){
        char_icon[i].src = "/css/imgs/index/bulbasaurMain.jpg"
        player_mini_icon[i].src = "/css/imgs/arena/bulbasaurIcon.png"

    }else if(chars_lbl[i].textContent == "Charmander"){
        char_icon[i].src = "/css/imgs/index/charmanderMain.jpg"
        player_mini_icon[i].src = "/css/imgs/arena/charmanderIcon.png"

    }else if(chars_lbl[i].textContent == "Squirtle"){
        char_icon[i].src = "/css/imgs/index/squirtleMain.jpg"
        player_mini_icon[i].src = "/css/imgs/arena/squirtleIcon.png"

    }else if(chars_lbl[i].textContent == "Chimchar"){
        char_icon[i].src = "/css/imgs/index/chimcharMain.jpg"
        player_mini_icon[i].src = "/css/imgs/arena/chimcharIcon.png"

    }else if(chars_lbl[i].textContent == "Piplup"){
        char_icon[i].src = "/css/imgs/index/piplupMain.jpg"
        player_mini_icon[i].src = "/css/imgs/arena/piplupIcon.png"
    }
}

const health_bar = (player) => {
    let i = 0
    let player_health_bar = (player == "X") ? p1_health_bar : p2_health_bar

    if (i == 0) {

        i = 1;
        var elem = player_health_bar;

        var width = player_health_bar.offsetWidth

        let limit = width - 25

        var id = setInterval(frame, 100);

        function frame() {
            if (width <= limit) {
            clearInterval(id);
            i = 0;
            } else {
            width--;
            elem.style.width = width + "%";
            }
        }
    }

    // reset battle field
    for(let i = 0; i < boxes_div.length; i++) {
        boxes_div[i].textContent = ""
        boxes_div[i].style.pointerEvents = "auto"
        x_o = false

    }
}


function move() {
    if (i == 0) {
        i = 1;
        var elem = document.getElementById("myBar");
        var width = 1;
        var id = setInterval(frame, 10);
        function frame() {
          if (width >= 100) {
            clearInterval(id);
            i = 0;
          } else {
            width++;
            elem.style.width = width + "%";
          }
        }
      }
}

