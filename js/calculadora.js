function homem() {
    document.getElementById("imgResult").src = "img/img1.png";
    document.getElementById("botao1").classList.remove("temamulher");
    document.getElementById("botao2").classList.remove("temamulher");
    document.getElementById("botao3").classList.remove("temamulher");
    document.getElementById("calcular").classList.remove("temamulher");
    document.getElementById("calcular").classList.remove("temamulher");
    document.getElementById("resultado").classList.remove("temamulher");



    document.getElementById("botao1").classList.add("temahomem");
    document.getElementById("botao2").classList.add("temahomem");
    document.getElementById("botao3").classList.add("temahomem");
    document.getElementById("calcular").classList.add("temahomem");
    document.getElementById("resultado").classList.add("temahomem");
   
}
function mulher() {
    document.getElementById("imgResult").src = "img/mulher.png";
    document.getElementById("botao1").classList.remove("temahomem");
    document.getElementById("botao2").classList.remove("temahomem");
    document.getElementById("botao3").classList.remove("temahomem");
    document.getElementById("calcular").classList.remove("temahomem");
    document.getElementById("resultado").classList.remove("temahomem");
   

    document.getElementById("imgResult").src = "img/mulher.png";
    document.getElementById("botao1").classList.add("temamulher");
    document.getElementById("botao2").classList.add("temamulher");
    document.getElementById("botao3").classList.add("temamulher");
    document.getElementById("calcular").classList.add("temamulher");
    document.getElementById("resultado").classList.add("temamulher");

}


function calcular() {
    var peso = Number(document.getElementById("botao3").value);
    var altura = Number(document.getElementById("botao2").value);
    var resultado = document.getElementById("txt");
    if (peso > 0) {
        if (altura > 0) {
            var imc = peso / (altura * altura);
            var categoria = Number(imc.toFixed(2));

            if (imc < 18.5) {
                resultado.innerHTML = "<br> Abaixo do peso";
            } else if (imc <= 24.9) {
                resultado.innerHTML = "<br>  Peso ideal. Parabéns!";
            } else if (imc <= 29.9) {
                resultado.innerHTML = "<br>  Sobrepeso";
            } else if (imc <= 34.9) {
                resultado.innerHTML = "<br>  Obesidade grau 1";
            } else if (imc <= 39.9) {
                resultado.innerHTML = "<br>  Obesidade grau 2 severa";
            } else {
                resultado.innerHTML = "<br> Obesidade grau 3 morbida";
            }

            resultado.innerHTML += "<br> Seu IMC é: " + categoria;
        } else {
            resultado.innerHTML += "Por favor, insira uma altura válida.";
        }
    } else {
        resultado.innerHTML += "Por favor, insira um peso válido.";
        
        
    }

}

