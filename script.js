fetch("./Projetos/projetos.json")
  .then((response) => response.json())
  .then((projetos) => {
    const container = document.getElementById("cardsProjetos");
    const itensPorSlide = 3;
    let htmlContent = "";

    for (let i = 0; i < projetos.length; i += itensPorSlide) {
      const nSlideAtivo = i === 0 ? "active" : "";

      htmlContent += `<div class="carousel-item ${nSlideAtivo}">`;
      htmlContent += `  <div class="row px-5">`;

      const grupoProjetos = projetos.slice(i, i + itensPorSlide);

      grupoProjetos.forEach((projeto) => {
        htmlContent += `
          <div class="col-md-4 mb-4">
            <div class="card h-100 d-flex flex-colunm justify-content-between">
              <div class="img-container">
                <img src="${projeto.imagem}" class="card-img-top" alt="${projeto.nome}">
              </div>
              <div class="card-body d-flex flex-column">
                <h5 class="card-title">${projeto.nome}</h5>
                <p class="card-text flex-grow-1">${projeto.descricao}</p>
                <a href="${projeto.link}" target="_blank" class="btn btn-primary mt-auto">
                  Ver projeto
                </a>
              </div>
            </div>
          </div>
        `;
      });

      htmlContent += `  </div>`;
      htmlContent += `</div>`;
    }

    container.innerHTML = htmlContent;
  })
  .catch((error) => console.error("Erro ao carregar projetos:", error));
