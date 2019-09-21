//Criando váriavel para chamar todas as divs presentes no HTML
let cartas = document.querySelectorAll(".container div");

//Criando uma lista com a url de todas as imagens que vão aparecer nas cartas
let images = [
    "barbara.jpeg", "barbara.jpeg", "barbara.jpeg", "barbara.jpeg", "barbara.jpeg", "barbara.jpeg",
    "barbara.jpeg", "barbara.jpeg", "fagner.jpeg", "fagner.jpeg", "fagner.jpeg", "fagner.jpeg",
    "fagner.jpeg", "fagner.jpeg", "fagner.jpeg", "fagner.jpeg"
];

//Criando função que irá colocar todas as imagens da lista "images" como background image das divs
function fotoBack(){
    for(let carta of cartas){
        carta.onclick = mudarCor;
        carta.style.backgroundImage = `url(images/${images[Number(carta.id)]})`;
        carta.style.backgroundRepeat = "no-repeat"
    }
}

//Criando função que irá aleatorizar cada posição de uma lista e após ira colocar elas como background image
function shuffle(lista) {
    
    //Criando váriaveis que irão ser responsáveis por fazer uma troca nos valores das posições da lista onde a Váriavel j irá armazernar um número aleatória entre 0 e 15; Váriavel x irá guardar o valor da lista antes de ser trocado; Váriavel i fará o trabalho de um contador
    let aleatorio, abrigador, i;
    for (i = lista.length - 1; i > 0; i--) {
        aleatorio = Math.floor(Math.random() * (i + 1));
        abrigador = lista[i];
        lista[i] = lista[aleatorio];
        lista[aleatorio] = abrigador;
        fotoBack();
    }
    return lista;
}

//Executando função para randomizar as posições da lista "images" e colocar cada elemento como background image
shuffle(images);

// function esconderCartas(event){
//     event.target.style.backgroundImage="none";
// }
// for(carta of cartas){
//     carta.onclick = esconderCartas;
// }
//Criando váriavel que irá armazenar a quantidade de cliques
let click = 0;

//Criando função que irá mudar a cor quando clicar em alguma div, obedeçendo a condição de que só podera mudar a cor se a quantidade de cliques for menor que 2 e que a div não já tenha mudado de cor.
function mudarCor(event){
    if(click < 2 && event.target.style.backgroundColor != "red"){
        event.target.style.backgroundColor = "red";
        console.log(event.target.id);
        console.log(click);
        event.onclick = click++;
    }
}

