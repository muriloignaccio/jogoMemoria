//Criando váriavel para chamar todas as divs presentes no HTML
let cartas = document.querySelectorAll(".container div");

//Criando váriavel que irá armazenar a quantidade de cliques
let click = 0;

// function fecharCartas(){
//     all.classlist.toggle("")
// }

//Criando função que irá mudar a cor quando clicar em alguma div, obedeçendo a condição de que só podera mudar a cor se a quantidade de cliques for menor que 2 e que a div não já tenha mudado de cor.
function mudarCor(event){
    if(click < 2 && event.target.style.backgroundColor != "red"){
        event.target.style.backgroundColor = "red";
        console.log(event.target.id);
        console.log(click);
        event.onclick = click++;
    }
}

//Dizendo que ao clicar na div ela deve executar a função que irá mudar a cor
// function abrirCartas(){
    //     for(let carta of cartas){
        
        //     }
        // }
let images = [
    "barbara.jpeg",
    "barbara.jpeg",
    "barbara.jpeg",
    "barbara.jpeg",
    "barbara.jpeg",
    "barbara.jpeg",
    "barbara.jpeg",
    "barbara.jpeg",
    "fagner.jpeg",
    "fagner.jpeg",
    "fagner.jpeg",
    "fagner.jpeg",
    "fagner.jpeg",
    "fagner.jpeg",
    "fagner.jpeg",
    "fagner.jpeg",
];

shuffle(images);
function fotoBack(){
    for(let carta of cartas){
        carta.onclick = mudarCor;
        carta.style.backgroundImage = `url(images/${images[Number(carta.id)]})`;
        carta.style.backgroundRepeat = "no-repeat"
    }
}
//Criando uma função que irá embaralhar a posição das cartas
// function shuffle(lista) {
    
//     //Criando váriaveis que irão ser responsáveis por fazer uma troca nos valores das posições da lista
//     //Váriavel j irá armazernar um número aleatória entre 0 e 15; Váriavel x irá guardar o valor da lista antes de ser trocado; Váriavel i fará o trabalho de um contador
//     let aleatorio, abrigador, i;
//     for (i = lista.length - 1; i > 0; i--) {
//         aleatorio = Math.floor(Math.random() * (i + 1));
//         abrigador = lista[i].id;
//         lista[i].id = lista[aleatorio].id;
//         lista[aleatorio].id = abrigador;
//     }
//     return lista;
// }
function shuffle(lista) {
    
    //Criando váriaveis que irão ser responsáveis por fazer uma troca nos valores das posições da lista
    //Váriavel j irá armazernar um número aleatória entre 0 e 15; Váriavel x irá guardar o valor da lista antes de ser trocado; Váriavel i fará o trabalho de um contador
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

//Criando uma função que irá embaralhar a posição das cartas
// function shuffle(lista) {
    
//     //Criando váriaveis que irão ser responsáveis por fazer uma troca nos valores das posições da lista
//     //Váriavel j irá armazernar um número aleatória entre 0 e 15; Váriavel x irá guardar o valor da lista antes de ser trocado; Váriavel i fará o trabalho de um contador
//     let aleatorio, abrigador, i;
//     for (i = lista.length - 1; i > 0; i--) {
//         aleatorio = Math.floor(Math.random() * (i + 1));
//         abrigador = lista[i].style.gridArea;
//         lista[i].style.gridArea = lista[aleatorio].style.gridArea;
//         lista[aleatorio].style.gridArea = abrigador;
//     }
//     return lista;
// }
// for (position of positions){
//     shuffle(positions);
//     position.style.gridArea = "c" + String(random);

// }


shuffle(images);