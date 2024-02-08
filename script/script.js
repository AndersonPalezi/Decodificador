// Selecionando os elementos do HTML
const btnEncriptar = document.querySelector(".btn__encriptar");
const btnDesencriptar = document.querySelector(".btn__desencriptar");
const conteinerImg = document.querySelector(".conteiner__img");
const conteiner = document.querySelector(".conteiner__paragrafo");
const conteinerResultado = document.querySelector(".conteiner__resultado");
const resultado = document.querySelector(".texto__resultado"); // Elemento onde o resultado será exibido

// Adicionando ouvintes de eventos de clique para os botões de encriptar e desencriptar
btnEncriptar.addEventListener('click', encriptar);
btnDesencriptar.addEventListener('click', desencriptar);

// Função para encriptar texto
function encriptar() {
    ocultarAdelante();
    let texto = recuperarTexto();
    resultado.textContent = encriptarTexto(texto);
}

// Função para desencriptar texto
function desencriptar() {
    ocultarAdelante();
    let texto = recuperarTexto();
    resultado.textContent = desencriptarTexto(texto);
}

// Função para recuperar o texto do textarea
function recuperarTexto() {
    let texto = document.querySelector(".texto");
    return texto.value;
}

// Função para ocultar elementos após o clique em um botão
function ocultarAdelante() {
    conteinerImg.classList.add("ocultar");
    conteiner.classList.add("ocultar");
}

// Função para encriptar o texto
function encriptarTexto(mensagem) {
    let texto = mensagem;
    let textoFinal = "";

    for (let i = 0; i < texto.length; i++) {
        if (texto[i] == "a") {
            textoFinal = textoFinal + "ai";
        } else if (texto[i] == "e") {
            textoFinal = textoFinal + "enter";
        } else if (texto[i] == "i") {
            textoFinal = textoFinal + "imes";
        } else if (texto[i] == "o") {
            textoFinal = textoFinal + "ober";
        } else if (texto[i] == "u") {
            textoFinal = textoFinal + "ufat";
        } else {
            textoFinal = textoFinal + texto[i];
        }
    }
    return textoFinal;
}

// Função para desencriptar o texto
function desencriptarTexto(mensagem){
    let texto = mensagem;
    let textoFinal = "";

    for (let i = 0 ; i < texto.length; i++){
        if(texto[i] == "a"){
            textoFinal = textoFinal  + "a";
            i = i + 1; // Avança o índice em 1 para pular a próxima letra
        }
        else if(texto[i] == "e"){
            textoFinal = textoFinal + "e";
            i = i + 4; // Avança o índice em 4 para pular as próximas 4 letras
        }
        else if(texto[i] == "i"){
            textoFinal = textoFinal + "i";
            i = i + 3; // Avança o índice em 3 para pular as próximas 3 letras
        }
        else if(texto[i] == "o"){
            textoFinal = textoFinal + "o";
            i = i + 3; // Avança o índice em 3 para pular as próximas 3 letras
        }
        else if(texto[i] == "u"){
            textoFinal = textoFinal + "u";
            i = i + 3; // Avança o índice em 3 para pular as próximas 3 letras
        }
        else{
            textoFinal = textoFinal + texto[i];
        }
    }
    return textoFinal;
}

// Adicionando um ouvinte de evento de clique para o botão de copiar
const btnCopiar = document.querySelector(".btn__copiar");
btnCopiar.addEventListener("click", () => {
    let textoParaCopiar = resultado.textContent;
    navigator.clipboard.writeText(textoParaCopiar);
    console.log("Texto copiado para a área de transferência com sucesso!");
});
