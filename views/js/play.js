const chars_lbl = document.querySelectorAll('label')
const char_icon = document.querySelectorAll('.char_icon img')

const player_mini_icon = document.querySelectorAll('.mini-icon')
const p1_health_bar = document.querySelector('.arena-div__p1-div__health .bar-div .health-div')
const p2_health_bar = document.querySelector('.arena-div__p2-div__health .bar-div .health-div')

const arena_div = document.querySelector('.arena-div__battle-div')
const arena_div_row_1 = document.querySelector('.arena-div__battle-div .row-1')
const boxes_div = document.querySelectorAll('.boxes')
const rows = document.querySelectorAll('.rows')

const icon_lbl = document.querySelectorAll('label')

const skill_gif_div = document.querySelector('.skill-gif')

const win_div = document.querySelector('.win-div')
const red_arrow = document.querySelector('.inner-win-div .inner-win-div__arrow-img')
const win_div_char_txt = document.getElementById('char-text')
const win_div_faint_txt = document.getElementById('win-faint-text')

let x_o = false

let p1_health_bar_width = p1_health_bar.offsetWidth
let p2_health_bar_width = p2_health_bar.offsetWidth
let to_fix_width , to_fix_width_p1 = 100 , to_fix_width_p2 = 100

let secondary_row

const skill_url = {
	"Pikachu" : { 
		"X" : 'thunder.png',
		"O" : 'thunderO.png'
	},
	"Bulbasaur" : { 
		"X" : 'razorleaf.png',
		"O" : 'razorleaf.png'
	},
	"Charmander" : { 
		"X" : 'kameRed.png',
		"O" : 'kameRedO.png'
	},
	"Squirtle" : { 
		"X" : 'kameO.png',
		"O" : 'kame.png'
	},
	"Chimchar" : { 
		"X" : 'flames.png',
		"O" : 'flames.png'
	},
	"Piplup" : { 
		"X" : 'water.gif',
		"O" : 'waterO.gif'
	}
}

const skill_gif = {
	"Pikachu" : "pikachuSkill.gif",
	"Bulbasaur" : "bulbasaurSkill.gif",
	"Charmander" : "charmanderSkill.gif",
	"Squirtle" : "squirtleSkill.gif",
	"Chimchar" : "chimcharSkill.gif",
	"Piplup" : "piplupSkill.gif"
	
}

const win_img_url = {
	"Pikachu" : {
		"X" : "pikachuWin.jpg",
		"O" : "pikachuFainted.jpg"
	},
	"Bulbasaur" : {
		"X" : "bulbasaurWin.jpg",
		"O" : "bulbasaurFainted.png"
	},
	"Charmander" : {
		"X" : "charmanderWin.jpg",
		"O" : "charmanderFainted.jpg"
	},
	"Squirtle" : {
		"X" : "squirtleWin.jpg",
		"O" : "squirtleFainted.jpg"
	},
	"Chimchar" : {
		"X" : "chimcharWin.jpg",
		"O" : "chimcharFainted.gif"
	},
	"Piplup" : {
		"X" : "piplupWin.jpg",
		"O" : "piplupFainted.jpg"
	},
}

const skillsX = {
	"Pikachu" : {
		h1 : {
			width: "100%",
			top : "0",
			left : "-5%",
			deg : "0deg"
		},
		h2 : {
			width: "100%",
			top : "31%",
			left : "-5px",
			deg : "0deg"
		},
		h3 : {
			width: "100%",
			top : "65%",
			left : "-5px",
			deg : "0deg"
		},

		v1 : {
			width: "100%",
			top : "30%",
			left : "-31%",
			deg : "90deg"
		},
		v2 : {
			width: "100%",
			top : "30%",
			left : "0",
			deg : "90deg"
		},
		v3 : {
			width: "100%",
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

	"Bulbasaur" : {
		h1 : {
			width: "100%",
			top : "0",
			left : "0",
			deg : "0deg"
		},
		h2 : {
			width: "100%",
			top : "35%",
			left : "0",
			deg : "0deg"
		},
		h3 : {
			width: "100%",
			top : "70%",
			left : "0",
			deg : "0deg"
		},

		v1 : {
			width: "100%",
			top : "30%",
			left : "-33.5%",
			deg : "90deg"
		},
		v2 : {
			width: "100%",
			top : "30%",
			left : "0",
			deg : "90deg"
		},
		v3 : {
			width: "100%",
			top : "30%",
			left : "33.5%",
			deg : "90deg"
		},

		sL : {
			width : "120%",
			top : "30%",
			left : "-10%",
			deg : "45deg"
		},
		sR : {
			width : "120%",
			top : "30%",
			left : "-10%",
			deg : "-45deg"
		}
	},

	"Charmander" : {
		h1 : {
            width : "110%",
			top : "0",
			left : "0",
			deg : "0deg"
		},
		h2 : {
            width : "110%",
			top : "30%",
			left : "0",
			deg : "0deg"
		},
		h3 : {
            width : "110%",
			top : "66%",
			left : "0",
			deg : "0deg"
		},

		v1 : {
			width : "110%",
			top : "35%",
			left : "-38.5%",
			deg : "90deg"
		},
		v2 : {
			width : "110%",
			top : "35%",
			left : "-5%",
			deg : "90deg"
		},
		v3 : {
			width : "110%",
			top : "35%",
			left : "28%",
			deg : "90deg"
		},

		sL : {
			width : "140%",
			top : "40%",
			left : "-15%",
			deg : "45deg"
		},
		sR : {
			width : "140%",
			top : "25%",
			left : "-15%",
			deg : "-45deg"
		}
	},

	"Squirtle" : {
		h1 : {
			width: "100%",
			top : "0",
			left : "0",
			deg : "0deg"
		},
		h2 : {
			width: "100%",
			top : "33.3%",
			left : "0",
			deg : "0deg"
		},
		h3 : {
			width: "100%",
			top : "66.6%",
			left : "0",
			deg : "0deg"
		},

		v1 : {
			width: "100%",
			top : "30%",
			left : "-33.3%",
			deg : "90deg"
		},
		v2 : {
			width: "100%",
			top : "30%",
			left : "0px",
			deg : "90deg"
		},
		v3 : {
			width: "100%",
			top : "30%",
			left : "33.3%",
			deg : "90deg"
		},

		sL : {
			width : "125%",
			top : "32%",
			left : "-15%",
			deg : "45deg"
		},
		sR : {
			width : "125%",
			top : "32%",
			left : "-15%",
			deg : "-45deg"
		}
	},

	"Chimchar" : {
		h1 : {
			top : "0",
			left : "0",
			deg : "0deg"
		},
		h2 : {
			top : "33.3%",
			left : "0",
			deg : "0deg"
		},
		h3 : {
			top : "66.6%",
			left : "0",
			deg : "0deg"
		},

		v1 : {
			top : "30%",
			left : "-33.3%",
			deg : "90deg"
		},
		v2 : {
			top : "30%",
			left : "0",
			deg : "90deg"
		},
		v3 : {
			top : "30%",
			left : "33.3%",
			deg : "90deg"
		},

		sL : {
			width : "120%",
			top : "30%",
			left : "-10%",
			deg : "45deg"
		},
		sR : {
			width : "120%",
			top : "30%",
			left : "-10%",
			deg : "-45deg"
		}
	},

	"Piplup" : {
		h1 : {
			width : "130%",
			top : "0",
			left : "0",
			deg : "-17deg"
		},
		h2 : {
			width : "130%",
			top : "30%",
			left : "0",
			deg : "-17deg"
		},
		h3 : {
			width : "130%",
			top : "65%",
			left : "0",
			deg : "-17deg"
		},

		v1 : {
			width : "130%",
			top : "50%",
			left : "-50%",
			deg : "77deg"
		},
		v2 : {
			width : "130%",
			top : "50%",
			left : "-15%",
			deg : "77deg"
		},
		v3 : {
			width : "130%",
			top : "50%",
			left : "18%",
			deg : "77deg"
		},

		sL : {
			width : "170%",
			top : "50%",
			left : "-30%",
			deg : "40deg"
		},
		sR : {
			width : "170%",
			top : "25%",
			left : "-30%",
			deg : "-55deg"
		}
	}
}

const skillsO = {	
	"Pikachu" : {
		h1 : {
			width: "100%",
			top : "0",
			right : "-2%",
			deg : "0deg"
		},
		h2 : {
			width: "100%",
			top : "32%",
			right : "-2%",
			deg : "0deg"
		},
		h3 : {
			width: "100%",
			top : "66%",
			right : "-2%",
			deg : "0deg"
		},

		v1 : {
			width: "100%",
			top : "35%",
			left : "-31%",
			deg : "90deg"
		},
		v2 : {
			width: "100%",
			top : "35%",
			left : "2",
			deg : "90deg"
		},
		v3 : {
			width: "100%",
			top : "35%",
			left : "35%",
			deg : "90deg"
		},

		sL : {
			width : "130%",
			top : "35%",
			left : "-10%",
			deg : "42deg"
		},
		sR : {
			width : "140%",
			top : "28%",
			left : "-20%",
			deg : "320deg"
		}
	},

	"Bulbasaur" : {
		h1 : {
			top : "0",
			left : "0",
			deg : "0deg"
		},
		h2 : {
			top : "35%",
			left : "0",
			deg : "0deg"
		},
		h3 : {
			top : "70%",
			left : "0",
			deg : "0deg"
		},

		v1 : {
			top : "30%",
			left : "-33.5%",
			deg : "90deg"
		},
		v2 : {
			top : "30%",
			left : "0",
			deg : "90deg"
		},
		v3 : {
			top : "30%",
			left : "33.5%",
			deg : "90deg"
		},

		sL : {
			width : "120%",
			top : "30%",
			left : "-10%",
			deg : "45deg"
		},
		sR : {
			width : "120%",
			top : "30%",
			left : "-10%",
			deg : "-45deg"
		}
	},

	"Charmander" : {
		h1 : {
            width : "110%",
			top : "0",
			right : "0",
			deg : "0deg"
		},
		h2 : {
            width : "110%",
			top : "30%",
			right : "0",
			deg : "0deg"
		},
		h3 : {
            width : "110%",
			top : "66%",
			right : "0",
			deg : "0deg"
		},

		v1 : {
			width : "110%",
			top : "35%",
			left : "-38.5%",
			deg : "90deg"
		},
		v2 : {
			width : "110%",
			top : "35%",
			left : "-5%",
			deg : "90deg"
		},
		v3 : {
			width : "110%",
			top : "35%",
			left : "28%",
			deg : "90deg"
		},

		sL : {
			width : "140%",
			top : "25%",
			left : "-26%",
			deg : "45deg"
		},
		sR : {
			width : "140%",
			top : "40%",
			left : "-26%",
			deg : "-45deg"
		}
	},

	"Squirtle" : {
		h1 : {
			width: "100%",
			top : "0",
			right : "0",
			deg : "0deg"
		},
		h2 : {
			width: "100%",
			top : "33.3%",
			right : "0",
			deg : "0deg"
		},
		h3 : {
			width: "100%",
			top : "66.6%",
			right : "0",
			deg : "0deg"
		},

		v1 : {
			width: "100%",
			top : "30%",
			right : "33.3%",
			deg : "90deg"
		},
		v2 : {
			width: "100%",
			top : "30%",
			right : "0px",
			deg : "90deg"
		},
		v3 : {
			width: "100%",
			top : "30%",
			right : "-33.3%",
			deg : "90deg"
		},

		sL : {
			width : "125%",
			top : "32%",
			right : "-15%",
			deg : "45deg"
		},
		sR : {
			width : "125%",
			top : "32%",
			right : "-15%",
			deg : "-45deg"
		}
	},

	"Chimchar" : {
		h1 : {
			width : "100%",
			top : "0",
			left : "0",
			deg : "0deg"
		},
		h2 : {
			width : "100%",
			top : "33.3%",
			left : "0",
			deg : "0deg"
		},
		h3 : {
			width : "100%",
			top : "66.6%",
			left : "0",
			deg : "0deg"
		},

		v1 : {
			width : "100%",
			top : "30%",
			left : "-33.3%",
			deg : "90deg"
		},
		v2 : {
			width : "100%",
			top : "30%",
			left : "0",
			deg : "90deg"
		},
		v3 : {
			width : "100%",
			top : "30%",
			left : "33.3%",
			deg : "90deg"
		},

		sL : {
			width : "120%",
			top : "30%",
			left : "-10%",
			deg : "45deg"
		},
		sR : {
			width : "120%",
			top : "30%",
			left : "-10%",
			deg : "-45deg"
		}
	},

	"Piplup" : {
		h1 : {
			width : "130%",
			top : "0",
			left : "0",
			deg : "-197deg"
		},
		h2 : {
			width : "130%",
			top : "30%",
			left : "0",
			deg : "-197deg"
		},
		h3 : {
			width : "130%",
			top : "65%",
			left : "0",
			deg : "-197deg"
		},

		v1 : {
			width : "130%",
			top : "50%",
			left : "-50%",
			deg : "77deg"
		},
		v2 : {
			width : "130%",
			top : "50%",
			left : "-15%",
			deg : "77deg"
		},
		v3 : {
			width : "130%",
			top : "50%",
			left : "18%",
			deg : "77deg"
		},

		sL : {
			width : "170%",
			top : "50%",
			left : "-30%",
			deg : "40deg"
		},
		sR : {
			width : "170%",
			top : "25%",
			left : "-30%",
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
        secondary_row = document.createElement('div') 
        secondary_row.className = "sec_row"
        arena_div_row_1.appendChild(secondary_row)
		//console.log(arena_div_row_1)
    }else{
		arena_div_row_1.removeChild(document.querySelector('.sec_row'))
	}
}

const secondary_row_coordinates = (index, where) => {

	let ltr = (index == "0") ? "X" : "O"

	if(ltr == "X"){
		secondary_row.style.width = skillsX[icon_lbl[index].textContent][where]["width"]
		secondary_row.style.top = skillsX[icon_lbl[index].textContent][where]["top"]
		secondary_row.style.left = skillsX[icon_lbl[index].textContent][where]["left"]
		secondary_row.style.transform = "rotate(" + skillsX[icon_lbl[index].textContent][where]["deg"] +")"
		secondary_row.style.backgroundImage = "url('css/imgs/arena/" + skill_url[icon_lbl[index].textContent][ltr] + "')"
	}
	else{
		secondary_row.style.width = skillsO[icon_lbl[index].textContent][where]["width"]
		secondary_row.style.top = skillsO[icon_lbl[index].textContent][where]["top"]
		secondary_row.style.left = skillsO[icon_lbl[index].textContent][where]["left"]
		secondary_row.style.transform = "rotate(" + skillsO[icon_lbl[index].textContent][where]["deg"] +")"
		secondary_row.style.backgroundImage = "url('css/imgs/arena/" + skill_url[icon_lbl[index].textContent][ltr] + "')"
	}
}

const play_skill_gif = (ltr,index) =>{
	let i_timer = 3, j_timer = 3
	//console.log(i_timer)
	let timer = setInterval(() => {
		if(i_timer == 0){
			create_element(false)
			skill_gif_div.style.display = "block"
			skill_gif_div.style.backgroundImage = "url('css/imgs/arena/" + skill_gif[icon_lbl[index].textContent] + "')"
			clearInterval(timer)

			let sec_timer = setInterval(() =>{
				if(j_timer == 0){
					health_bar(ltr);
					clearInterval(sec_timer)
				}
				j_timer -= 1
			},500)

		}
		i_timer -= 1
	}, 500)
	
}

const check_pattern = (ltr) => {

    if(boxes_div[0].textContent == ltr && boxes_div[1].textContent == ltr && boxes_div[2].textContent == ltr){
        let index = (ltr == "X") ? 0 : 1
	
		create_element(true);

		secondary_row_coordinates(index, "h1")
		play_skill_gif(ltr, index)

        disable_box();
    }
    else if(boxes_div[3].textContent == ltr && boxes_div[4].textContent == ltr && boxes_div[5].textContent == ltr){
        let index = (ltr == "X") ? 0 : 1
		create_element(true);

		secondary_row_coordinates(index, "h2")
		play_skill_gif(ltr, index)
		
        disable_box();
    }
    else if(boxes_div[6].textContent == ltr && boxes_div[7].textContent == ltr && boxes_div[8].textContent == ltr){
        let index = (ltr == "X") ? 0 : 1
		create_element(true);

		secondary_row_coordinates(index, "h3")
		play_skill_gif(ltr, index)
		
	 	disable_box();
    }

    else if(boxes_div[0].textContent == ltr && boxes_div[3].textContent == ltr && boxes_div[6].textContent == ltr){
        let index = (ltr == "X") ? 0 : 1
		create_element(true);

		secondary_row_coordinates(index, "v1")

		play_skill_gif(ltr, index)
        disable_box();
    }
    else if(boxes_div[1].textContent == ltr && boxes_div[4].textContent == ltr && boxes_div[7].textContent == ltr){
        let index = (ltr == "X") ? 0 : 1
		create_element(true);

		secondary_row_coordinates(index, "v2")

        play_skill_gif(ltr, index)
        disable_box();
    }
    else if(boxes_div[2].textContent == ltr && boxes_div[5].textContent == ltr && boxes_div[8].textContent == ltr){
        let index = (ltr == "X") ? 0 : 1
		create_element(true);

		secondary_row_coordinates(index, "v3")

        play_skill_gif(ltr, index)
        disable_box();
    }

    else if(boxes_div[0].textContent == ltr && boxes_div[4].textContent == ltr && boxes_div[8].textContent == ltr){
        let index = (ltr == "X") ? 0 : 1
		create_element(true);

		secondary_row_coordinates(index, "sL")

        play_skill_gif(ltr, index)
        disable_box();
    }
    else if(boxes_div[2].textContent == ltr && boxes_div[4].textContent == ltr && boxes_div[6].textContent == ltr){
        let index = (ltr == "X") ? 0 : 1
		create_element(true);

		secondary_row_coordinates(index, "sR")

        play_skill_gif(ltr, index)
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

const show_win_div = (index) => {
	win_div.style.display = 'block'
	//console.log(icon_lbl[index].textContent)
	win_div_char_txt.textContent = icon_lbl[index].textContent

	red_arrow.addEventListener('click', ()=>{
		let reverse_index = (index == 1) ? 0 : 1
		win_div_char_txt.textContent = icon_lbl[reverse_index].textContent
		win_div_faint_txt.textContent = "wins!"
	}, false)
}

const health_bar = (player) => {
    let i = 0
    let player_health_bar = (player == "X") ? p2_health_bar : p1_health_bar
	//console.log(player_health_bar.id)
    let player_health_bar_width = (player == "X") ? p1_health_bar_width : p2_health_bar_width

    if (i == 0) {
		
        i = 1;
        var elem = player_health_bar;
		//console.log(elem)

        //var width = player_health_bar_width
		var width = player_health_bar.offsetWidth
		//console.log(width)

		to_fix_width = (elem.id == "p1-health") ? to_fix_width_p1 : to_fix_width_p2
		//console.log(to_fix_width)

		if(width == 50){
			elem.style.backgroundColor = "rgb(241, 140, 0)"
		}
		if(width == 25){
			elem.style.backgroundColor = "rgb(206, 0, 0)"
		}


        let limit = (to_fix_width == 100) ? width - ((width - 100) + 25) : width - 25

        var id = setInterval(frame, 50);

        function frame() {
            if (width <= limit) {
                clearInterval(id);
                i = 0;
                if(player_health_bar == p1_health_bar_width){
					console.log("kyla")
					//console.log(width)
                    p1_health_bar_width = width
                }
                else if(player_health_bar_width == p2_health_bar_width){
                    p2_health_bar_width = width
                }
                if(elem.id == "p1-health"){
					to_fix_width_p1 = 0
				}else{
					to_fix_width_p2 = 0
				}
                enable_box();
				x_o = false
				skill_gif_div.style.display = "none"

				if(width == 0){
					disable_box();
					let index_winner = 0
					if(elem.id == "p2-health"){
						char_icon[0].src = "/css/imgs/arena/" + win_img_url[icon_lbl[0].textContent]["X"]
						char_icon[1].src = "/css/imgs/arena/" + win_img_url[icon_lbl[1].textContent]["O"]
						index_winner = 1
					}else{
						char_icon[1].src = "/css/imgs/arena/" + win_img_url[icon_lbl[1].textContent]["X"]
						char_icon[0].src = "/css/imgs/arena/" + win_img_url[icon_lbl[0].textContent]["O"]
						index_winner = 0
					}

					show_win_div(index_winner)
				}

            } else {
                width--;  
                elem.style.width = width + "%";
            }
        }
    }

}