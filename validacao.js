// -------------------------------------------
// VALIDAÇÃO DO FORMULÁRIO DE CONTATO
// -------------------------------------------
function enviarMensagem(event) {
    event.preventDefault(); // impede envio real

    const nome = document.getElementById("nome").value.trim();
    const email = document.getElementById("email").value.trim();
    const mensagem = document.getElementById("mensagem").value.trim();

    // Verifica campos vazios
    if (!nome || !email || !mensagem) {
        alert("Por favor, preencha todos os campos.");
        return;
    }

    // Validação simples de e-mail
    const regexEmail = /\S+@\S+\.\S+/;
    if (!regexEmail.test(email)) {
        alert("Digite um e-mail válido.");
        return;
    }

    // Se tudo estiver correto
    alert("Mensagem enviada com sucesso!");

    // Limpa os campos
    document.getElementById("form-contato").reset();
}
