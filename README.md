# Clima Agora 🌦️

Bem-vindo ao **Clima Agora**! Este é um aplicativo simples de previsão do tempo que permite verificar as condições climáticas de qualquer cidade, com base em dados fornecidos pela API do OpenWeather. O projeto exibe temperatura, umidade, velocidade do vento e atualiza o fundo com uma imagem da cidade consultada.

## Tecnologias Utilizadas 🚀

### Frontend

- **HTML**  
  <img src="https://img.icons8.com/color/48/000000/html-5.png" width="30" alt="HTML Icon">
- **CSS**  
  <img src="https://img.icons8.com/color/48/000000/css3.png" width="30" alt="CSS Icon">
- **JavaScript**  
  <img src="https://img.icons8.com/color/48/000000/javascript.png" width="30" alt="JavaScript Icon">

### APIs

- **OpenWeather API**  
  Utilizada para obter dados meteorológicos da cidade.
- **Country Flags API**  
  Exibe a bandeira do país correspondente à cidade consultada.
- **Unsplash Source API**  
  Utilizada para definir uma imagem de fundo personalizada com base na cidade pesquisada.

## Funcionalidades 🛠️

- **Consulta de Clima**: Mostra a temperatura atual, umidade, descrição das condições climáticas e velocidade do vento.
- **Bandeira do País**: Exibe a bandeira do país da cidade pesquisada.
- **Imagem de Fundo Dinâmica**: Atualiza o fundo da página com uma imagem da cidade pesquisada.

## Como Utilizar 🔍

1. Digite o nome da cidade desejada no campo de busca.
2. Clique no botão de busca (ou pressione Enter).
3. Visualize as informações meteorológicas exibidas na tela.

## Pré-visualização

![Exemplo do Aplicativo](Picture1.png)

## Como Executar o Projeto 🚀

1. Clone o repositório:
   ```bash
   git clone https://github.com/bdancost/OpenWeather_API.git
   ```
2. Adicione sua chave da API do OpenWeather em `scripts.js`:
   ```javascript
   const apiKey = "SUA_API_KEY_AQUI";
   ```
3. Abra o arquivo `index.html` em um navegador.

## Estrutura do Código 🗂️

- `index.html` – Estrutura principal do HTML.
- `styles.css` – Estilos de apresentação da interface.
- `scripts.js` – Código JavaScript para integração das APIs e manipulação do DOM.

## Créditos 🙌

Desenvolvido por Daniel Fernandes.
