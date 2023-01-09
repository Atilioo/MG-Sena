const numerosApostados = [];
const resultado = [];
let valorAposta = 0;
let qtdAcertos = 0;

const btnApostar = document.getElementById("btnApostar");
btnApostar.disabled = true;

sortearNumeros();

// Get the theme toggle input
const themeToggle = document.querySelector(
    '.switch input[type="checkbox"]'
  );
  // Function that will switch the theme based on the if the theme toggle is checked or not
  function switchTheme(e) {
    if (e.target.checked) {
      document.documentElement.setAttribute("data-theme", "dark");
    } else {
      document.documentElement.setAttribute("data-theme", "light");
    }
  }
  // Add an event listener to the theme toggle, which will switch the theme
  themeToggle.addEventListener("change", switchTheme, false);

function sortearNumeros(){
    for(i = 0; i < 6; i++){
        let numeroSorteado = Math.round(Math.random() * 59 + 1);

        while(resultado.includes(numeroSorteado)){
            let numeroSorteado = Math.round(Math.random() * 59 + 1);
        }
        resultado.push(numeroSorteado);
    }
}

function selecionarNumeros(numero){
    if(numerosApostados.length >= 0 && numerosApostados.length < 15){
        numerosApostados.push(numero);

        desabilitarNumero(numero);

        if(numerosApostados.length > 5){
            btnApostar.disabled = false;

            valorDaAposta();
        }

        const qtdApostas = document.getElementById("qtdNumeros");
        qtdApostas.innerHTML = "<p>Qtd de Números</p><p class='valor'>" + numerosApostados.length + "</p>";
    }
}

function desabilitarNumero(numero){
    document.getElementById("num_" + numero).disabled = true;
    document.getElementById("num_" + numero).style.background = "#009e4c";
    document.getElementById("num_" + numero).style.color = "#ffffff";
}

function valorDaAposta(){
    switch(numerosApostados.length)
    {
        case 6:
            valorAposta = "R$ 4,50";
            break;
        case 7:
            valorAposta = "R$ 31,50";
            break;
        case 8:
            valorAposta = "R$ 126,00";
            break;
        case 9:
            valorAposta = "R$ 378,00";
            break;
        case 10:
            valorAposta = "R$ 945,00";
            break;
        case 11:
            valorAposta = "R$ 2.079,00";
            break;
        case 12:
            valorAposta = "R$ 4.158,00";
            break;
        case 13:
            valorAposta = "R$ 7.722,00";
            break;
        case 14:
            valorAposta = "R$ 13.513,50";
            break;
        case 15:
            valorAposta = "R$ 22.522,50";
            break;
        default:
            valorAposta = "R$ 0,00";
            break;
    }

    const divValorAposta = document.getElementById("valor");
    divValorAposta.innerHTML = "<p>Valor da Aposta</p><p class='valor'>" + valorAposta + "</p>";
}

function apostar(){
    for(i = 0; i < numerosApostados.length; i++){
        if(resultado.includes(numerosApostados[i])){
            qtdAcertos++;
        }
    }
    
    const divResultado = document.getElementById("resultado");
    for(i = 0; i < resultado.length; i++){
        divResultado.innerHTML += "<div class='resultadoEscolhido'>"+ resultado[i] +"</div>";
    }

    let divAcertos = document.getElementById("acertos");
    divAcertos.innerHTML = "<p>Acertos</p><p class='valor'>"+ qtdAcertos +"</p>";

    desabilitarAllNumeros();

    document.getElementById("btnReiniciar").style.display = 'inline';
}

function desabilitarAllNumeros(){
    for(i = 0; i <= 60; i++){
        document.querySelectorAll('main button').forEach(btn =>{
            btn.disabled = true;
        });
    }
}

let btn = document.querySelector("#btnReiniciar");
btn.addEventListener("click", function(){
    location.reload();
});

function switchTheme(e) {
    if (e.target.checked) {
      document.documentElement.setAttribute("data-theme", "dark");
      
      // Set the user's theme preference to dark
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.setAttribute("data-theme", "light");
      
      // Set the user's theme preference to light
      localStorage.setItem("theme", "light");
    }
  }

  // Get the current theme from local storage
const currentTheme = localStorage.getItem("theme");
// If the current local storage item can be found
if (currentTheme) {
  // Set the body data-theme attribute to match the local storage item
  document.documentElement.setAttribute("data-theme", currentTheme);
// If the current theme is dark, check the theme toggle
  if (currentTheme === "dark") {
    themeToggle.checked = true;
  }
}

