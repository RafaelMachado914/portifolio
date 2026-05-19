fetch("./Projetos/projetos.json")
  .then((response) => response.json())
  .then((projetos) => {
    const container = document.getElementById("cardsProjetos");

    projetos.forEach((projeto) => {
      container.innerHTML += `
            
            <div class="col-md-4 mb-4">

                <div class="card h-100">

                    <img src="${projeto.imagem}"
                        class="card-img-top">

                    <div class="card-body">

                        <h5 class="card-title">
                            ${projeto.nome}
                        </h5>

                        <p class="card-text">
                            ${projeto.descricao}
                        </p>

                        <a href="${projeto.link}"
                            class="btn btn-primary">
                            Ver projeto
                        </a>

                    </div>

                </div>

            </div>
            `;
    });
  });
