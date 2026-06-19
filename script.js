
// Banco de dados centralizado que conecta as informações aos estados das abas
const bancoDadosEtapas = {
    plantio: {
        titulo: "🌱 O Plantio Sustentável",
        tag: "Fase 1: Tecnologia no Solo",
        desc: "Tudo começa na preparação da terra. Hoje, os agricultores usam tecnologia de ponta, como drones de mapeamento e sensores conectados na terra para saber a quantidade exata de água e nutrientes que a semente precisa. Isso preserva os lençóis freáticos e evita desperdícios.",
        tip: "Sensores de precisão reduzem em até 30% o consumo de água na irrigação agrícola.",
        progresso: 0,
        metricas: {
            val1: "30%", lab1: "Economia de Água",
            val2: "Zero", lab2: "Desperdício de Insumos"
        }
    },
    colheita: {
        titulo: "🚜 A Colheita Inteligente",
        tag: "Fase 2: Automação e Dados",
        desc: "Na hora de colher, modernas colheitadeiras equipadas com computadores de bordo e GPS rastreiam a produtividade por metro quadrado. O alimento é colhido no ponto exato de maturação, gerando o máximo aproveitamento do campo.",
        tip: "O uso de GPS agrícola reduz a sobreposição de faixas de colheita, economizando combustível e tempo.",
        progresso: 33,
        metricas: {
            val1: "15%", lab1: "Menos Combustível",
            val2: "98%", lab2: "Aproveitamento de Grãos"
        }
    },
    transporte: {
        titulo: "🚚 Logística Verde e Rastreamento",
        tag: "Fase 3: Da Fazenda para a Cidade",
        desc: "Depois de colhido, o tempo é precioso. Caminhões modernos utilizam inteligência artificial para definir rotas inteligentes e evitar o trânsito. Além disso, embalagens inteligentes garantem que o produto chegue sem machucados e fresco ao destino.",
        tip: "Rotas otimizadas reduzem a emissão de CO2 e garantem alimentos mais frescos nas prateleiras das cidades.",
        progresso: 66,
        metricas: {
            val1: "-22%", lab1: "Emissões de Carbono",
            val2: "Rápido", lab2: "Rastreamento por QR Code"
        }
    },
    mesa: {
        titulo: "🍽️ Consumo Consciente",
        tag: "Fase 4: Nosso Papel Social",
        desc: "O alimento completou a jornada e chegou a você! A interligação entre campo e cidade se fecha aqui. Consumir de forma consciente significa evitar o desperdício, aproveitar os alimentos integralmente (como talos e cascas) e valorizar a feira local.",
        tip: "Aproveitar cascas e talos enriquece suas receitas e evita que toneladas de lixo orgânico parem em aterros.",
        progresso: 100,
        metricas: {
            val1: "30%", lab1: "Alimentos Desperdiçados no Mundo",
            val2: "Você!", lab2: "Pode Mudar Essa Estatística"
        }
    }
};

// Função principal que interliga a navegação, dados do JS e estilos do CSS
function mudarEtapa(chaveEtapa) {
    const dados = bancoDadosEtapas[chaveEtapa];
    if (!dados) return;

    // 1. Atualiza qual bola está marcada como ativa na linha do tempo
    document.querySelectorAll('.step-control').forEach(elemento => {
        elemento.classList.remove('active');
    });
    
    const elementoAtivo = document.querySelector(`[data-step="${chaveEtapa}"]`);
    if (elementoAtivo) elementoAtivo.classList.add('active');

    // 2. Interliga o CSS: Altera o tamanho da barra de progresso baseado no passo
    const barraProgresso = document.getElementById('progress-bar');
    if (barraProgresso) barraProgresso.style.width = `${dados.progresso}%`;

    // 3. Aplica animação de transição suave esmaecendo o painel
    const painel = document.getElementById('main-panel');
    painel.style.opacity = 0;
    painel.style.transform = "translateY(8px)";

    // Altera os conteúdos de texto enquanto o painel está invisível
    setTimeout(() => {
        document.getElementById('panel-tag').innerText = dados.tag;
        document.getElementById('panel-title').innerText = dados.titulo;
        document.getElementById('panel-desc').innerText = dados.desc;
        document.getElementById('panel-tip').innerText = dados.tip;
        
        // Atualiza as caixas de métricas
        document.getElementById('stat-1').innerText = dados.metricas.val1;
        document.getElementById('label-1').innerText = dados.metricas.lab1;
        document.getElementById('stat-2').innerText = dados.metricas.val2;
        document.getElementById('label-2').innerText = dados.metricas.lab2;

        // Traz o painel de volta com os dados novos inseridos
        painel.style.opacity = 1;
        painel.style.transform = "translateY(0)";
    }, 200);
}

// Janela popup interativa para engajar o usuário
function mostrarDesafio() {
    const desafios = [
        "Desafio Agrinho: Tente colocar na sua refeição de hoje pelo menos um item que veio direto de um produtor local!",
        "Desafio Agrinho: Pesquise uma receita para aproveitar cascas de frutas ou talos de verduras na janta!",
        "Desafio Agrinho: Explique para alguém na sua casa como a tecnologia ajuda a economizar água no plantio!"
    ];
    const desafioAleatorio = desafios[Math.floor(Math.random() * desafios.length)];
    alert("🌱 DESAFIO DO DIA:\n\n" + desafioAleatorio);
}

// Inicializa o site na primeira etapa assim que abrir a tela
window.addEventListener('DOMContentLoaded', () => {
    mudarEtapa('plantio');
});
