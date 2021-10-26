const chars_lbl = document.querySelectorAll('label')
const char_icon = document.querySelectorAll('.char_icon')


for(let i = 0; i < 2; i++){
    console.log(chars_lbl[i].textContent)

    if(chars_lbl[i].textContent == "Pikachu"){
        console.log(true)
        char_icon[i].style.backgroundImage = "url('css/imgs/index/pikachuMain.jpg')"
    }else if(chars_lbl[i].textContent == "Bulbasaur"){
        console.log(true)
        char_icon[i].style.backgroundImage = "url('css/imgs/index/bulbasaurMain.jpg')"
    }else if(chars_lbl[i].textContent == "Charmander"){
        char_icon[i].style.backgroundImage = "url('css/imgs/index/charmanderMain.jpg')"
    }else if(chars_lbl[i].textContent == "Squirtle"){
        char_icon[i].style.backgroundImage = "url('css/imgs/index/squirtleMain.jpg')"
    }else if(chars_lbl[i].textContent == "Chimchar"){
        char_icon[i].style.backgroundImage = "url('css/imgs/index/chimcharMain.jpg')"
    }else if(chars_lbl[i].textContent == "Piplup"){
        char_icon[i].style.backgroundImage = "url('css/imgs/index/piplupMain.jpg')"
    }

    //console.log(char_icon[i].style.backgroundImage)
}