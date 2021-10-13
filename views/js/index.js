const pokeball_img = document.querySelector('.pokemon-lists-div .pokemon-div .pokeball-img')
const pokemon_img = document.querySelector('.pokemon-lists-div .pokemon-div .pokemon-img')

pokemon_img.addEventListener('mouseover' , ()=>{
    pokeball_img.src = "css/imgs/index/pokeballRoll.gif"
    pokemon_img.style.cursor = 'pointer'
},false)

pokemon_img.addEventListener('mouseout' , ()=>{
    pokeball_img.src = "css/imgs/index/pokeball.png"
    pokemon_img.style.cursor = 'default'
},false)