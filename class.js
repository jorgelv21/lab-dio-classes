class herois {
  constructor(nome, idade, tipo) {
    this.nome = nome;
    this.idade = idade;
    this.tipo = tipo;
  }
}

let heroi = new herois("Jorge,", 30, "mago");

function atacar() {
  let classe = ["mago", "guerreiro", "monge", "ninja"];
  let ataque = ["magia", "espada", "artes marciais", "shuriken"];
  for (let i = 0; i < classe.length; i++) {
    if (heroi.tipo === classe[i]) {
      console.log(`O ${heroi.nome} atacou usando ${ataque[i]}`);
    }
  }
}

atacar();
