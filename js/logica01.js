// Aula inicial de Lógica de programação com Javascript


function saudacao(){
    event.preventDefault();

    let nome = document.getElementById('nome').value;
    let idade = parseInt( document.getElementById('idade').value);

    if( idade <= 11 ){
        alert(`${nome}, você se enquadra na categoria infantil`);
    } else if( idade > 11 && idade <= 17) {
        alert(`${nome}, você se enquadra na categoria juvenil`);
    } else if( idade >= 18 && idade <= 35) {
        alert(`${nome}, você se enquadra na categoria sênior`);
    } else {
        alert(`${nome}, você se enquadra na categoria master`);
    }

    console.log(nome, idade);
}