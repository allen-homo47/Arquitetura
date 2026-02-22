function abrirGaleria(titulo, preco) {
    document.getElementById("tituloProjeto").innerText = titulo;
    document.getElementById("precoProjeto").innerText = "Preço: " + preco;
    document.getElementById("modal").style.display = "flex";
}

function fecharModal() {
    document.getElementById("modal").style.display = "none";
}
