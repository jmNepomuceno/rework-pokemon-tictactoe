const pokeball_img = document.querySelectorAll('.pokemon-lists-div .pokemon-div .pokeball-img')
const pokemon_img = document.querySelectorAll('.pokemon-lists-div .pokemon-div .pokemon-img')
let imgHover

const p1_img_div = document.querySelector('.draft-div .draft-picks-div .player-one-div')
const p2_img_div = document.querySelector('.draft-div .draft-picks-div .player-two-div')
let clicked_img = false

const play_btn = document.querySelector('.go-play-btn')
const txt_input = document.querySelectorAll('.hidden-input')

const imageSliderIn = (index) =>{
    pokeball_img[index].src = "css/imgs/index/pokeballRoll.gif"
    pokemon_img[index].style.cursor = 'pointer'
    //console.log(poke_character.target.id)
    
    let i = 1
    let pikachuImg_arr = [
        "css/imgs/index/pikachu.jpg",
        "css/imgs/index/pikachu2.png",
        "css/imgs/index/pikachu3.jpg",
    ]

    let bulbasaurImg_arr = [
        "css/imgs/index/bulbasaur.webp",
        "css/imgs/index/bulbasaur2.jpg",
        "css/imgs/index/bulbasaur3.jpg",
    ]

    let charmanderImg_arr = [
        "css/imgs/index/charmander.png",
        "css/imgs/index/charmander2.jpg",
        "css/imgs/index/charmander3.jpg",
    ]

    let squirtleImg_arr = [
        "css/imgs/index/squirtle.jpg",
        "css/imgs/index/squirtle2.jpg",
        "css/imgs/index/squirtle3.png",
    ]

    let chimcharImg_arr = [
        "css/imgs/index/chimchar.jpg",
        "css/imgs/index/chimchar2.jpg",
        "css/imgs/index/chimchar3.jpg",
    ]

    let piplupImg_arr = [
        "css/imgs/index/piplup.png",
        "css/imgs/index/piplup2.png",
        "css/imgs/index/piplup3.jpg",
    ]

    imgHover = setInterval(()=>{
        if(pokemon_img[index].id == 'pikachu'){
            pokemon_img[index].src = pikachuImg_arr[i]
        }else if(pokemon_img[index].id == 'bulbasaur'){
            pokemon_img[index].src = bulbasaurImg_arr[i]
        }else if(pokemon_img[index].id == 'charmander'){
            pokemon_img[index].src = charmanderImg_arr[i]
        }else if(pokemon_img[index].id == 'squirtle'){
            pokemon_img[index].src = squirtleImg_arr[i]
        }else if(pokemon_img[index].id == 'chimchar'){
            pokemon_img[index].src = chimcharImg_arr[i]
        }else if(pokemon_img[index].id == 'piplup'){
            pokemon_img[index].src = piplupImg_arr[i]
        }
        i += 1

        if(i == 3) i = 0
    },600)
}

const imageSliderOut = (index) =>{
    pokeball_img[index].src = "css/imgs/index/pokeball.png"
    pokemon_img[index].style.cursor = 'default'

    clearInterval(imgHover);
    // console.log(pokeball_img[index].src)
    if(clicked_img){
        pokeball_img[index].src = "css/imgs/index/pokeball2.png"
        clicked_img = false
    }

}

const imageClick = (index) =>{
    let char_img_index = ""
    let char_name = ""
    if(index == 0){
        char_img_index = "css/imgs/index/pikachuMain.jpg"
        char_name = "Pikachu"
    }else if(index == 1){
        char_img_index = "css/imgs/index/bulbasaurMain.jpg"
        char_name = "Bulbasaur"
    }else if(index == 2){
        char_img_index = "css/imgs/index/charmanderMain.jpg"
        char_name = "Charmander"
    }else if(index == 3){
        char_img_index = "css/imgs/index/squirtleMain.jpg"
        char_name = "Squirtle"
    }else if(index == 4){
        char_img_index = "css/imgs/index/chimcharMain.jpg"
        char_name = "Chimchar"
    }else if(index == 5){
        char_img_index = "css/imgs/index/piplupMain.jpg"
        char_name = "Piplup"
    }
    
    
    if(!p1_img_div.style.backgroundImage){
        p1_img_div.style.backgroundImage = "url(" + char_img_index + ")"   
        txt_input[0].value = char_name
    }else{
        p2_img_div.style.backgroundImage = "url(" + char_img_index + ")"   
        play_btn.style.pointerEvents = "auto"
        txt_input[1].value = char_name

    }

    pokemon_img[index].style.pointerEvents = 'none'
    clicked_img = true

}

const main = () =>{
    for(let i = 0; i < pokeball_img.length; i++){
        pokemon_img[i].addEventListener('mouseover' , ()=> { imageSliderIn(i) }, false)
        pokemon_img[i].addEventListener('mouseout' , ()=> { imageSliderOut(i) }, false)
        pokemon_img[i].addEventListener('click', ()=>{imageClick(i)}, false)
    }
}