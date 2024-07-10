function toggleMode () {

    const html = document.documentElement
    html.classList.toggle("light")


//pegar a tag da img 

const img = document.querySelector("#profile img")


 if (html.classList.contains("light")) {
   

//se tiver ligh mode, adicionar imagem light
img.setAttribute("scr","./assets/avatar-lightJ.png")
 } else{

 //se tiver sem light mode, manter a imagem normal
 img.setAttribute("scr","./assets/avatar-dark.png")
}


}
