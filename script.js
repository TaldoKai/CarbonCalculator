document.getElementById('carbonForm').addEventListener('submit', function(event){
    event.preventDefault();
    calculateCarbonFootprint();
});

document.getElementById('startVoice').addEventListener('click', function(){
    startVoiceComand();
});

function startVoiceComand() {
    if(annyang) {
        annyang.setLanguage('pt-BR');
        var comands = {
            'calcular (pegada) (de) (carbono)': calculateCarbonFootprint, 
            '*texto': teste
        }
        annyang.addCommands(comands);
        annyang.start();
    } else {
        alert("O reconhecimento de voz não é suportado neste navegador!");
    }
};

function teste(){
        console.log(texto);
        annyang.pause();
};

function calculateCarbonFootprint() {
    annyang.pause();
    console.log("Calculandoooooooooooo VAMOOOOOOOOOOOO!!!!!!!!!");
    var fuelAmout = parseFloat(document.getElementById('fuel').value);
    var distance = parseFloat(document.getElementById('distance').value);

    var fuelEmissionFactor = 2.68;
    var distanceEmission = 0.12;

    var carbonFootprint = (fuelAmout * fuelEmissionFactor) + (distance * distanceEmission);

    document.getElementById('result').innerHTML = "A pegada de Carbono é: " + carbonFootprint.toFixed(2) + " kg CO2";
}
