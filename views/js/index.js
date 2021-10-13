const pokeball_img = document.querySelectorAll('.pokemon-lists-div .pokemon-div .pokeball-img')
const pokemon_img = document.querySelectorAll('.pokemon-lists-div .pokemon-div .pokemon-img')
let imgHover

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
    },700)
}

const imageSliderOut = (index) =>{
    pokeball_img[index].src = "css/imgs/index/pokeball.png"
    pokemon_img[index].style.cursor = 'default'

    clearInterval(imgHover);
}

for(let i = 0; i < pokeball_img.length; i++){
    pokemon_img[i].addEventListener('mouseover' , ()=> { imageSliderIn(i) }, false)
    pokemon_img[i].addEventListener('mouseout' , ()=> { imageSliderOut(i) }, false)

}