function pesquisar() {
    let section = document.getElementById("resultados-pesquisa");
    console.log(section);

    let campoPesquisa = document.getElementById ("campo-pesquisa").value;
        console.log(campoPesquisa);

        if (!campoPesquisa) {
section.innerHTML = "<p>Procure algo primeiro...</p>"
            return
        }

        campoPesquisa = campoPesquisa.toLowerCase()

    let resultados = ""; // Inicializa a variável resultados como uma string vazia
  
let titulo = "";
let descricao = "";
let tags = "";

    // para cada dado dentro da lista de dados
    for (let dado of dados) {
        titulo = dado.titulo.toLowerCase()
        descricao = dado.descricao.toLowerCase()
        tags = dado.tags.toLowerCase() 

        if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)) {
    resultados += `
        <div class="item-resultado">
          <h2>
            <a href="${dado.sociais}" target="_blank">${dado.titulo}</a>
          </h2>
          <p class="descricao-meta">${dado.descricao}</p>
          <a href="${dado.link}" target="_blank">Saiba Mais</a>
        </div>
      `;
        }
    }
  
if (!resultados) {
    resultados = "<p>Nada encontrado...</p>"
} 

    section.innerHTML = resultados;
  }


