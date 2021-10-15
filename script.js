const saiyan = document.getElementById("id"); //acesso o item completo pelo document, dpois seleciono a query com a class 'saiyan'.
const background = document.getElementById("background");
let position = 0;

let isJumping = false;

function HandleKeyUp() { //Recupero o evento do keycode n:32 (tecla de espaço), para simular o pulo do goku!
    if (event.keyCode === 32) {
        if (!isJumping) {
            jump();
        }
    };
};

function jump() {
    isJumping = true;
    let upInterval = setInterval(() => { //Cria um tempo de reproducao em milisegundos
        if (position >= 150) {
            clearInterval(upInterval);

            let downInterval = setInterval(() => {
                if (position <= 0) {
                    isJumping = false;
                    clearInterval(downInterval)
                } else {
                    position -= 20;
                    saiyan.style.bottom = position + 'px'; //adiciona a posicão no css
                }
            }, 20);
        } else {
            position += 20;
            saiyan.style.bottom = position + 'px';
        }
    }, 20);

}

function createCactus() {
    const cactus = document.createElement('div'); //Cria um elemento dentro do document
    let cactusPosition = 1700;

    cactus.classList.add('cactus'); //adiciona uma class ao elemento criado

    background.appendChild(cactus); //adiciona um filho

    cactus.style.left = 1000 + 'px';
    let randomTime = Math.random() * 6000; // Cria um numero aleatorio infinito

    let leftinterval = setInterval(() => {
        if (cactusPosition < -60) {

            clearInterval(leftinterval);
            console.log(cactusPosition);
            background.removeChild(cactus);


        } else if (cactusPosition > 0 && cactusPosition < 60 && position < 60) { // adiciona mais uma condicao no if
            clearInterval(leftinterval);
            document.body.innerHTML = "<h1 class='game-over'>Você Perdeu seu fraco</h1>"; //modifica um html

        } else {

            cactusPosition -= 10;
            cactus.style.left = cactusPosition + 'px';
        }
    }, 20);

    setTimeout(createCactus, randomTime); // crio um espaço de tempo, aleatorio baseado no math de numeros infinitos, e chama a função com repersidade, de acordo com o tempo estimado
};

createCactus();
document.addEventListener('keyup', HandleKeyUp); // recupero um evento, que foi gerado quando a tecla sobe, chamado de keyup, e joguei seu valor numa função