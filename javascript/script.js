//Criando váriavel para chamar todas as divs presentes no HTML
let cartas = document.querySelectorAll(".container div");

//Criando uma lista com a url de todas as imagens que vão aparecer nas cartas
let images = [
    "barbara.jpeg", "barbara.jpeg", "barbara.jpeg", "barbara.jpeg", "barbara.jpeg", "barbara.jpeg",
    "barbara.jpeg", "barbara.jpeg", "fagner.jpeg", "fagner.jpeg", "fagner.jpeg", "fagner.jpeg",
    "fagner.jpeg", "fagner.jpeg", "fagner.jpeg", "fagner.jpeg"
];

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

//Criando função que irá colocar todas as imagens da lista "images" como background image das divs e irá acionar a função de revelar carta quando ela dor clicada
function fotoBack(){
    for(let carta of cartas){
        carta.onclick = revelarCarta;
        carta.style.backgroundImage = `url(images/${images[Number(carta.id)]})`;
        carta.style.backgroundRepeat = "no-repeat"
    }
    console.log("oi")
}


//Executando função para randomizar as posições da lista "images" e colocar cada elemento como background image
shuffle(images);

//Criando função que irá esconder as cartas
function esconderCartas(){
    for(carta of cartas){
        carta.style.backgroundImage ="none";
        console.log("escondeu a carta")
    }
}

//Criando um alerta que irá avisar o cliente de que deve memorizar as cartas em um período de 5 segundos
alert("Você tem 5 segundos para memorizar as cartas")

//Criando um temporizador que depois de 5 segundos irá executar a função "esconderCartas"
setTimeout(esconderCartas, 5000);

//Criando váriavel que irá armazenar a quantidade de cliques
let click = 0;

//Criando função que irá verificar se o conteúdo está vazio e se não foi revelado mais que duas cartas, sendo essa condição verdadeira, a carta vazia irá ser revelada até que duas cartas sejam.
let events = [];
function revelarCarta(event){
    turns = 0;
        if(event.target.style.backgroundImage == "none" && click < 2){
            event.target.style.backgroundImage = `url(images/${images[Number(event.target.id)]})`;
            let event1 = event.target;
            events.push(event1);
            console.log(events);
            console.log(event.target.id);
            event.onclick = click++;
            console.log("Background vazio")
        }else if(event.target.style.backgroundImage != "none" && click < 2){
            alert("Selecione mais uma carta!");
            console.log("Estou no segundo if");
            verificacao();
        }else{
            console.log("Estou no segundo else");
        }
        if(events[0].style.backgroundImage === events[1].style.backgroundImage){
            events[0].style.opacity = "0"; 
            events[1].style.opacity = "0";
            click = 0;
            events = [];
        }else if(events[0].style.backgroundImage !== events[1].style.backgroundImage){
            setTimeout(esconderCartas, 1000);
            events = [];
            click = 0;
        }
        for(carta of cartas){
            if(carta.style.opacity == "0"){
                turns++
            }
        }console.log(turns);
        if(turns==16){
            alert("Você ganhou!")
        }
    }
function verificacao(){
}
