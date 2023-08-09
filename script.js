function cadastro() {
  var nome = document.getElementById("nome").value;
  var senha = document.getElementById("senha").value;
  var senha2 = document.getElementById("senha2").value;

  if (nome === "") {
    alert('O nome de usuário é obrigatório!');
  } else if (senha === senha2) {
    alert('Cadastro efetuado!');
    localStorage.setItem("usuarionome", nome); 
    localStorage.setItem("usuariosenha", senha);
    location.href = "login.html";
  } else {
    alert('As senhas devem ser iguais!');
  }
}

function login() {
  var nome = document.getElementById("nome").value;
  var senha = document.getElementById("senha").value;
  
  var storedNome = localStorage.getItem("usuarionome"); 
  var storedSenha = localStorage.getItem("usuariosenha");

  if (nome === "") {
    alert('Insira nome de Usuário!');
  } else if (senha === "") {
    alert('Insira a senha!');
  } else if (storedNome === nome && storedSenha === senha) {
    alert("Acesso liberado!");
    location.href = "sucesso.html";
  } else {
    alert("Nome ou senha inválidos!");
  }
}
function voltar(){
  history.back();
}
