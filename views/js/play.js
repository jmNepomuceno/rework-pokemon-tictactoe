const chars_lbl = document.querySelectorAll('label')
const char_icon = document.querySelectorAll('.char_icon img')

const player_mini_icon = document.querySelectorAll('.mini-icon')
const p1_health_bar = document.querySelector('.arena-div__p1-div__health .bar-div .health-div')
const p2_health_bar = document.querySelector('.arena-div__p2-div__health .bar-div .health-div')

const arena_div = document.querySelector('arena-div__battle-div')
const boxes_div = document.querySelectorAll('.boxes')
const rows = document.querySelectorAll('.rows')
let x_o = false

let p1_health_bar_width = p1_health_bar.offsetWidth
let p2_health_bar_width = p2_health_bar.offsetWidth
let to_fix_width = 100 

const skillsX = {
	"Pikachu" : {
		h1 : {
			top : "0",
			left : "-5%",
			deg : "0deg"
		},
		h2 : {
			top : "31%",
			left : "-5px",
			deg : "0deg"
		},
		h3 : {
			top : "65%",
			left : "-5px",
			deg : "0deg"
		},

		v1 : {
			top : "30%",
			left : "-31%",
			deg : "90deg"
		},
		v2 : {
			top : "30%",
			left : "0",
			deg : "90deg"
		},
		v3 : {
			top : "30%",
			left : "35%",
			deg : "90deg"
		},

		sL : {
			width : "130%",
			top : "25%",
			left : "-15%",
			deg : "42deg"
		},
		sR : {
			width : "140%",
			top : "35%",
			left : "-30%",
			deg : "312deg"
		}
	},

	1 : {
		h1 : {
			width : "450px",
			top : "25px",
			left : "0px",
			deg : "0deg"
		},
		h2 : {
			width : "450px",
			top : "175px",
			left : "0px",
			deg : "0deg"
		},
		h3 : {
			width : "450px",
			top : "325px",
			left : "0px",
			deg : "0deg"
		},

		v1 : {
			width : "463px",
			top : "173px",
			left : "-150px",
			deg : "90deg"
		},
		v2 : {
			width : "463px",
			top : "173px",
			left : "0px",
			deg : "90deg"
		},
		v3 : {
			width : "463px",
			top : "173px",
			left : "150px",
			deg : "90deg"
		},

		sL : {
			width : "550px",
			top : "180px",
			left : "-50px",
			deg : "45deg"
		},
		sR : {
			width : "550px",
			top : "180px",
			left : "-45px",
			deg : "-45deg"
		}
	},

	2 : {
		h1 : {
			width : "450px",
			top : "25px",
			left : "0px",
			deg : "0deg"
		},
		h2 : {
			width : "450px",
			top : "175px",
			left : "0px",
			deg : "0deg"
		},
		h3 : {
			width : "450px",
			top : "325px",
			left : "0px",
			deg : "0deg"
		},

		v1 : {
			width : "450px",
			top : "173px",
			left : "-150px",
			deg : "90deg"
		},
		v2 : {
			width : "450px",
			top : "173px",
			left : "0px",
			deg : "90deg"
		},
		v3 : {
			width : "450px",
			top : "173px",
			left : "150px",
			deg : "90deg"
		},

		sL : {
			width : "600px",
			top : "160px",
			left : "-65px",
			deg : "45deg"
		},
		sR : {
			width : "600px",
			top : "165px",
			left : "-85px",
			deg : "-45deg"
		}
	},

	3 : {
		h1 : {
			width : "450px",
			top : "25px",
			left : "0px",
			deg : "-180deg"
		},
		h2 : {
			width : "450px",
			top : "175px",
			left : "0px",
			deg : "-180deg"
		},
		h3 : {
			width : "450px",
			top : "325px",
			left : "0px",
			deg : "-180deg"
		},

		v1 : {
			width : "450px",
			top : "175px",
			left : "-150px",
			deg : "-90deg"
		},
		v2 : {
			width : "450px",
			top : "175px",
			left : "0px",
			deg : "-90deg"
		},
		v3 : {
			width : "450px",
			top : "175px",
			left : "150px",
			deg : "-90deg"
		},

		sL : {
			width : "600px",
			top : "170px",
			left : "-75px",
			deg : "225deg"
		},
		sR : {
			width : "600px",
			top : "175px",
			left : "-75px",
			deg : "-225deg"
		}
	},

	4 : {
		h1 : {
			width : "500px",
			top : "20px",
			left : "0px",
			deg : "0deg"
		},
		h2 : {
			width : "500px",
			top : "170px",
			left : "0px",
			deg : "0deg"
		},
		h3 : {
			width : "500px",
			top : "320px",
			left : "0px",
			deg : "0deg"
		},

		v1 : {
			width : "500px",
			top : "200px",
			left : "-170px",
			deg : "90deg"
		},
		v2 : {
			width : "500px",
			top : "200px",
			left : "-20px",
			deg : "90deg"
		},
		v3 : {
			width : "500px",
			top : "200px",
			left : "130px",
			deg : "90deg"
		},

		sL : {
			width : "670px",
			top : "190px",
			left : "-85px",
			deg : "45deg"
		},
		sR : {
			width : "670px",
			top : "150px",
			left : "-90px",
			deg : "-45deg"
		}
	},

	5 : {
		h1 : {
			width : "550px",
			top : "20px",
			left : "-5px",
			deg : "-10deg"
		},
		h2 : {
			width : "550px",
			top : "175px",
			left : "-5px",
			deg : "-10deg"
		},
		h3 : {
			width : "550px",
			top : "330px",
			left : "-5px",
			deg : "-10deg"
		},

		v1 : {
			width : "650px",
			top : "270px",
			left : "-255px",
			deg : "82deg"
		},
		v2 : {
			width : "650px",
			top : "270px",
			left : "-105px",
			deg : "82deg"
		},
		v3 : {
			width : "650px",
			top : "270px",
			left : "45px",
			deg : "82deg"
		},

		sL : {
			width : "800px",
			top : "235px",
			left : "-135px",
			deg : "40deg"
		},
		sR : {
			width : "800px",
			top : "110px",
			left : "-130px",
			deg : "-55deg"
		}
	}
}

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

const enable_box = () => {
    for(let i = 0; i < boxes_div.length; i++) {
        boxes_div[i].textContent = ""
        boxes_div[i].style.pointerEvents = "auto"
    }
    x_o = true
}

const create_element = (where) => {
    if(where){
        let secondary_row = document.createElement('div') 
        secondary_row.className = "sec_row"
        arena_div.appendChild(secondary_row)
    }else{
        arena_div.removeChild(document.querySelector('.sec_row'))
    }
}

const check_pattern = (ltr) => {

    if(boxes_div[0].textContent == ltr && boxes_div[1].textContent == ltr && boxes_div[2].textContent == ltr){
        create_element(true);
        health_bar(ltr);
        disable_box();
    }
    else if(boxes_div[3].textContent == ltr && boxes_div[4].textContent == ltr && boxes_div[5].textContent == ltr){
        create_element(true);
        health_bar(ltr);
        disable_box();
    }
    else if(boxes_div[6].textContent == ltr && boxes_div[7].textContent == ltr && boxes_div[8].textContent == ltr){
        create_element(true);
        health_bar(ltr);
        disable_box();
    }

    else if(boxes_div[0].textContent == ltr && boxes_div[3].textContent == ltr && boxes_div[6].textContent == ltr){
        create_element(true);

        health_bar(ltr);
        disable_box();
    }
    else if(boxes_div[1].textContent == ltr && boxes_div[4].textContent == ltr && boxes_div[7].textContent == ltr){
        create_element(true);
        health_bar(ltr);
        disable_box();
    }
    else if(boxes_div[2].textContent == ltr && boxes_div[5].textContent == ltr && boxes_div[8].textContent == ltr){
        create_element(true);
        health_bar(ltr);
        disable_box();
    }

    else if(boxes_div[0].textContent == ltr && boxes_div[4].textContent == ltr && boxes_div[8].textContent == ltr){
        create_element(true);
        health_bar(ltr);
        disable_box();
    }
    else if(boxes_div[2].textContent == ltr && boxes_div[4].textContent == ltr && boxes_div[6].textContent == ltr){
        create_element(true);
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

    let player_health_bar_width = (player == "X") ? p1_health_bar_width : p2_health_bar_width

    if (i == 0) {

        i = 1;
        var elem = player_health_bar;

        var width = player_health_bar_width

        let limit = (to_fix_width == 100) ? width - ((width - 100) + 25) : width - 25

        var id = setInterval(frame, 50);

        function frame() {
            if (width <= limit) {
                clearInterval(id);
                i = 0;
                if(player_health_bar_width == p1_health_bar_width){
                    console.log(width)
                    p1_health_bar_width = width
                    console.log(p1_health_bar_width)
                }
                else if(player_health_bar_width == p2_health_bar_width){
                    p2_health_bar_width = width
                }
                to_fix_width = 0
                enable_box();
                create_element(false)
            } else {
                width--;  
                elem.style.width = width + "%";
            }
        }
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


