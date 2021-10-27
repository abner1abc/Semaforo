alert('hmmm');

const img = document.getElementById('img');
const buttons = document.getElementById('buttons');
let colorIndex = 0;
let intervalid = null;

const trafficLight = (event) => {
    stopAutomatic();
    turnOn[event.target.id]();
}


const netxIndex = () => {
    if (colorIndex < 2){
        colorIndex++;
    }else{
        colorIndex = 0;
    }
}

const stopAutomatic = () => {
    clearInterval (intervalid);
} 

const changecolor = () => {
    const colors = ['red', 'yellow','green'];
    const color = colors[colorIndex];
    turnOn[color]();
    netxIndex();
}
const turnOn = {
    'red': () => img.src = 'img/vermelho.png',
    'yellow': () => img.src = 'img/amarelo.png',
    'green': () => img.src = 'img/verde.png',
    'automatic': () => intervalid = setInterval(changecolor, 1000)
}

buttons.addEventListener('click', trafficLight); 