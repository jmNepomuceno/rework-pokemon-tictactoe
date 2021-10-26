const chars_lbl = document.querySelectorAll('label')
const char_icon = document.querySelectorAll('.char_icon img')

const player_mini_icon = document.querySelectorAll('.mini-icon')
const p1_health_bar = document.querySelector('.arena-div__p1-div__health .bar-div .health-div')
const p2_health_bar = document.querySelector('.arena-div__p2-div__health .bar-div .health-div')

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
// let i = 0
// if (i == 0) {

//       i = 1;
//       var elem = p2_health_bar;
//       var width = 100;
//       var id = setInterval(frame, 100);
//       function frame() {
//         if (width <= 1) {
//           clearInterval(id);
//           i = 0;
//         } else {
//           width--;
//           elem.style.width = width + "%";
//         }
//       }
//     }

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