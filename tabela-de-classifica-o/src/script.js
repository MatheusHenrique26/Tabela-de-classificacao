var cruzeiro = {
  nome: "Cruzeiro",
  vitorias: 3,
  empates: 1,
  derrotas: 1,
  pontos: 0
}
var atletico = {
  nome: "Atlético",
  vitorias: 2,
  empates: 1,
  derrotas: 2,
  pontos: 0
}
var america = {
  nome: "América",
  vitorias: 1,
  empates: 3,
  derrotas: 1,
  pontos: 0
}
 
cruzeiro.pontos = calculaPontos(cruzeiro)
atletico.pontos = calculaPontos(atletico)
america.pontos = calculaPontos(america)

function calculaPontos(times){
  var pontos = (times.vitorias * 3) + times.empates

  return pontos
}

var equipe  = [cruzeiro , atletico , america]

exibirNaTela(equipe)

function exibirNaTela (equipe){
  var html = ""
  for (var i = 0; i < equipe.length; i++){
    html += "<tr><td>" + equipe[i].nome + "</td>"
     html += "<td>" + equipe[i].vitorias + "</td>"
     html += "<td>" + equipe[i].empates + "</td>"
     html += "<td>" + equipe[i].derrotas + "</td>"
     html += "<td>" + equipe[i].pontos + "</td>"
    html += "<td><button onClick='adicionarVitoria("+ i +")'>Vitória</button></td>"
    html += "<td><button onClick='adicionarEmpate("+ i +")'>Empate</button></td>"
    html += "<td><button onClick='adicionarDerrota("+ i +")'>Derrota</button></td></tr>"
    
  }
  var tabelaTimes = document.getElementById("tabelaTimes")
  tabelaTimes.innerHTML = html
  
}
function adicionarVitoria(i){
    var times = equipe[i]
    times.vitorias++
    times.pontos = calculaPontos(times)
    exibirNaTela(equipe)
    
  }


  function adicionarEmpate(i){
    var times = equipe[i]
    times.empates++
    times.pontos  = calculaPontos(times)
    exibirNaTela(equipe)
    
  }

function adicionarDerrota(i){
  var times = equipe[i]
  times.derrotas++
  exibirNaTela(equipe)
}

