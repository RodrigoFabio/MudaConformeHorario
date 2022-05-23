function carregar (){
var msg = document.getElementById('msg')
var img = document.getElementById('imagem')
var data = new Date()
var hora= data.getHours()
msg.innerHTML= `Agora são ${hora} horas`
if(hora < 12 && hora >=0){
    //bom dia
    img.src= 'manha.png.png'
    document.body.style.background= 'yellow'
} else if(hora >= 12 && hora < 18){
    //boa tarde
    img.src= 'tarde.png.png'
    document.body.style.background= 'orange'
} else{
    //boa noite
    img.src= 'noite.png.png'
    document.body.style.background= 'blue'
}
}
