// Objeto que guarda as informações de cada etapa
const informacoes = {
    plantio: {
        titulo: "🌱 O Plantio Sustentável",
        texto: "Tudo começa na preparação da terra. Hoje, os agricultores usam tecnologia como drones e sensores no solo para saber a quantidade exata de água e nutrientes que a planta precisa, evitando desperdícios e protegendo o meio ambiente."
    },
    colheita: {
        titulo: "🚜 A Colheita Inteligente",
        texto: "Na hora de colher, máquinas modernas equipadas com GPS ajudam a colher o alimento no momento perfeito de maturação. Isso garante que a comida não estrague no campo e aproveita o máximo de cada centímetro plantado."
    },
    transporte: {
        titulo: "🚚 Transporte e Logística",
        texto: "Depois de colhido, o alimento precisa chegar rápido às cidades. Caminhões e centros de distribuição usam rotas otimizadas e embalagens especiais para que a comida não sofra danos e chegue fresquinha até os mercados."
    },
    mesa: {
        titulo: "🍽️ Consumo Consciente na Mesa",
        texto: "O alimento chegou até você! Agora é a nossa vez de fazer a nossa parte: evitar o desperdício de comida, aproveitar cascas e talos sempre que possível e dar preferência para alimentos orgânicos e produtores locais."
    }
};

// Função que muda o texto na tela
function mostrarInfo(etapa) {
    const painel = document.getElementById("painel-informativo");
    const titulo = document.getElementById("info-titulo");
    const texto = document.getElementById("info-texto");

    // Remove a classe 'escondido' para o painel aparecer
    painel.classList.remove("escondido");

    // Atualiza os textos com base no que foi clicado
    titulo.innerText = informacoes[etapa].titulo;
    texto.innerText = informacoes[etapa].texto;
}
