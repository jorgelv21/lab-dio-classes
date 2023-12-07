let heroi = {
  nome: "Jorge",
  idade: 30,
  tipo: "ninja",
};

let classe = ["mago", "guerreiro", "monge", "ninja"];
let ataque = ["magia", "espada", "artes marciais", "shuriken"];

function atacar() {
  for (let i = 0; (i < classe.length); i++) {
    if (heroi.tipo === classe[i]) {
      console.log(`O ${heroi.tipo} atacou usando ${ataque[i]}`);
    }
  }
}

atacar();
