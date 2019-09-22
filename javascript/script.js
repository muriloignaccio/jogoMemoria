//Criando váriavel para chamar todas as divs presentes no HTML
let cartas = document.querySelectorAll(".container div");

//Criando uma lista com a url de todas as imagens que vão aparecer nas cartas
let images = [
    "rusbe.jpeg", "barbara.jpeg", "barbara.jpeg", "claudia.png", "claudia.png", "murilo.png", "murilo.png",
    "ana.png", "ana.png", "fagner.jpeg", "fagner.jpeg", "fayra.png", "amanda.png", "amanda.png", "richard.png", "richard.png"
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
        carta.style.backgroundRepeat = "no-repeat";
        carta.style.backgroundPosition = "center";
        carta.style.border = "solid 2px #fae3e2";
    }
}

//Executando função para randomizar as posições da lista "images" e colocar cada elemento como background image
shuffle(images);

//Criando função que irá esconder as cartas
function esconderCartas(){
    for(carta of cartas){
        carta.style.backgroundImage ="none";
    }
}

//Criando um alerta que irá avisar o cliente de que deve memorizar as cartas em um período de 5 segundos
alert("Seja bem vindo ao jogo da Vitória ou Derrota, o objetivo do jogo é encontrar o par de cada carta que você abrir, para isso você terá 3 segundos para memorizar as posições, mas todos nós sabemos que nem tudo é tão fácil, então seu destino será baseado em sua sorte ou azar, Bom Jogo!");

//Criando um temporizador que depois de 5 segundos irá executar a função "esconderCartas"
setTimeout(esconderCartas, 3000);

//Criando váriavel que irá armazenar a quantidade de cliques
let click = 0;

//Criando função que irá verificar se o conteúdo está vazio e se não foi revelado mais que duas cartas, sendo essa condição verdadeira, a carta vazia irá ser revelada até que duas cartas sejam.
let events = [];
function revelarCarta(event){
    
    //Contador que irá somar 1 cada vez que uma carta desaparecer
    turns = 0;

        //Irá verificar se a carta está vazia e se quantidade de cliques é menor que 2 (2 cartas selecionadas)   
        if(event.target.style.backgroundImage == "none" && click < 2){
            event.target.style.backgroundImage = `url(images/${images[Number(event.target.id)]})`;
            let event1 = event.target;
            events.push(event1);
            event.onclick = click++;
        
        //Irá verificar se o conteúdo da está com uma imagem e quantidade de cliques é menor que 2
        }else if(event.target.style.backgroundImage != "none" && click < 2){
            alert("Selecione mais uma carta!");
        }
        //Irá verificar se a primeira carta revelada é a fayra
        if(events[0].style.backgroundImage === "url(\"images/fayra.png\")"){
            alert("Você acabou de encontrar a Deusa Fayra e acaba de receber uma benção pro resto de sua vida, tenha uma boa vida e uma ótima viagem para o paraíso!");
            limparTudo();
        }
        //Irá verificar se a primeira carta revelada é o rusbé
        else if(events[0].style.backgroundImage === "url(\"images/rusbe.jpeg\")"){
            alert("Você acabou de encontrar o Rusbé do mal, com ele você acaba de receber uma maldição pro resto da sua vida, tenha uma boa viagem para o Inferno!\n Obs: Isso não é uma alucinação!!!");
            limparTudo();
        }
        //Irá verificar se a segunda carta revelada é a fayra
        else if(events[1].style.backgroundImage === "url(\"images/fayra.png\")"){
            alert("Você acabou de encontrar a Deusa Fayra e acaba de receber uma benção pro resto de sua vida, tenha uma boa vida e uma ótima viagem para o paraíso!");
            limparTudo();
        }
        //Irá verificar se a segunda carta revelada é o rusbé
        else if(events[1].style.backgroundImage === "url(\"images/rusbe.jpeg\")"){
            alert("Você acabou de encontrar o Rusbé do mal, com ele você acaba de receber uma maldição pro resto da sua vida, tenha uma boa viagem para o Inferno!");
            limparTudo();
        }
        //Irá verificar se a imagem de uma carta é igual a outra, se for, ira deixar-las invisiveis e resetar o click e a lista que abriga os eventos
        else if(events[0].style.backgroundImage === events[1].style.backgroundImage){
            events[0].style.opacity = "0"; 
            events[1].style.opacity = "0";
            click = 0;
            events = [];

        //Irá verificar se a imagem de uma carta é diferente de outro, se for, irá demorar 1 segundo e irá deixar-las invisivel
        }else if(events[0].style.backgroundImage !== events[1].style.backgroundImage){
            setTimeout(esconderCartas, 700);
            events = [];
            click = 0;
        }
        //Irá percorrer todas as cartas e verificar se elas estão invisiveis, se estiverem é porque já foram selecionadas
        for(carta of cartas){
            if(carta.style.opacity == "0"){
                turns++;
            }
        }
        //Irá verificar se a váriavel turns possui valor 16, se sim é porque todas as cartas foram encontradas, logo, ganhou o jogo
        if(turns==14){
            alert("Você ganhou!");
            limparTudo();
        }
    }
    //Essa função irá remover todas as cartas quando o rusbé ou a fayra for selecionada.
    function limparTudo(){
        for(carta of cartas){
            carta.style.opacity = "0";
        }
        turns++;
    }