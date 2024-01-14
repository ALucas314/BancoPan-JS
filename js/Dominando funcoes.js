const quantidadeGolpes = parseInt(gets());

// TODO: Defina aqui os tipos de minerais Carvao, Ferro, Diamante e Pedra
let minerais = ["Pedra", "Carvao", "Ferro", "Diamante"];

for (let i = 1; i <= quantidadeGolpes; i++) {
  let minaIndex = i % minerais.length;
  
  // TODO: Exiba o índice i, concatene com o caractere ":", após, concatene com o tipo de minerais[minaIndex]
  print(i + ": " + minerais[minaIndex]);
}
  
