const buscarCep = document.querySelector("#buscadorCep");

buscarCep.addEventListener('submit', (event) => {
    const infos = document.querySelector("#infos");

    event.preventDefault();
    const cep = event.target[0].value;

    // Fetch para obter os dados do CEP
    fetch(`https://viacep.com.br/ws/${cep}/json/`)
        .then(response => {
            if (!response.ok) {
                throw new Error("Erro na busca do CEP");
            }
            return response.json();
        })
        .then(data => {
            infos.innerHTML = `
                <ul>
                    <li><strong>Logradouro:</strong> ${data.logradouro || 'N/A'}</li>
                    <li><strong>Complemento:</strong> ${data.complemento || 'N/A'}</li>
                    <li><strong>Bairro:</strong> ${data.bairro || 'N/A'}</li>
                    <li><strong>Localidade:</strong> ${data.localidade || 'N/A'}</li>
                    <li><strong>UF:</strong> ${data.uf || 'N/A'}</li>
                    <li><strong>Estado:</strong> ${data.estado || 'N/A'}</li>
                    <li><strong>Região:</strong> ${data.regiao || 'N/A'}</li>
                </ul>
            `;
        })
        .catch(err => {
            console.error("Erro ao buscar CEP:", err);
            alert("CEP inválido.");
        });
});
