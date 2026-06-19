
# 🌾 Agrinho: Jornada Interativa do Alimento — Do Campo à Mesa

Este repositório contém uma aplicação web dinâmica desenvolvida para o **Programa Agrinho**. O projeto simula a jornada de produção sustentável de alimentos utilizando uma arquitetura front-end totalmente integrada e interativa.

---

## 🔗 Engenharia do Projeto: Como os códigos estão interligados?

Diferente de páginas estáticas comuns, este sistema conecta o **HTML**, o **CSS** e o **JavaScript** de forma reativa:

1. **Captura por Atributos (`HTML ➔ JS`):** Os botões da linha do tempo usam a propriedade `data-step`. O script monitora os cliques nesses seletores e carrega as informações associadas sem recarregar a página.
2. **Estilização de Estados Dinâmicos (`JS ➔ CSS`):** Ao selecionar uma nova fase, o JavaScript calcula o progresso e altera diretamente a propriedade `width` da barra de progresso no CSS, disparando animações fluidas controladas por transições cúbicas.
3. **Gerenciamento Centralizado de Dados (`JS ➔ HTML`):** Toda a inteligência de conteúdo (métricas de economia de água, textos explicativos, tags e dicas) fica salva em uma estrutura de dados de objeto. O JavaScript injeta esses dados dinamicamente manipulando o DOM.

---

## 🛠️ Tecnologias Nativas Utilizadas

* **HTML5 Semântico:** Criação de componentes estruturados para acessibilidade e navegação por abas.
* **CSS3 Avançado:** Uso de variáveis nativas (`:root`), layouts flexíveis e transições de opacidade/transformação para micro-interações de interface.
* **JavaScript Moderno (ES6):** Manipulação de eventos, lógica de estados ativos e dicionários de dados dinâmicos.

---

## ⚙️ Como Executar o Projeto

1. Salve os arquivos `index.html`, `style.css` e `script.js` exatamente dentro da mesma pasta.
2. Abra o arquivo `index.html` em qualquer navegador.
3. Clique nas etapas do ecossistema agrícola e clique no botão de desafios para experimentar a interatividade completa!
