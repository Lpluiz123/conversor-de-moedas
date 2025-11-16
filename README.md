# 💰 Conversor de Moedas (Online - API)

Um projeto de conversor de moedas que agora utiliza **dados em tempo real** para as taxas de câmbio. Desenvolvido com **HTML**, **CSS** e **JavaScript** (Vanilla), este projeto demonstra a integração com APIs externas e a manipulação avançada do DOM para exibição dinâmica de resultados.

---

## ✨ Destaques e Novas Funcionalidades

Com esta atualização, o projeto evolui de um exercício de lógica interna para um aplicativo funcional de conversão:

* **Integração com API Externa:** Agora, as taxas de câmbio (Dólar, Euro) são buscadas em tempo real através da API **`economia.awesomeapi.com.br`**, garantindo precisão nos valores.
* **Conversão Dinâmica (Input/Select):** A conversão é atualizada automaticamente a cada alteração no campo de valor (`input`) ou na moeda de destino (`select`), eliminando a necessidade de um botão de conversão manual.
* **Manipulação do DOM Avançada:** Utilização de JavaScript para capturar eventos (`input`, `change`), buscar dados assíncronos (`fetch`) e exibir resultados e bandeiras dinamicamente.
* **Formatação de Moeda:** Uso do objeto nativo `Intl.NumberFormat` do JavaScript para formatar os resultados em padrões de moeda (**BRL**, **USD**, **EUR**) de forma correta e limpa.

---

## 🛠️ Tecnologias Utilizadas

| Tecnologia | Função |
| :--- | :--- |
| **HTML5** | Estrutura e marcação semântica da interface do usuário. |
| **CSS3** | Estilização, design moderno e layout responsivo. |
| **JavaScript (Vanilla)** | Lógica de conversão, manipulação do DOM e **integração com API `fetch()`**. |

---
🧠 O que eu Aprendi com este Projeto
Este projeto foi crucial para consolidar e aprofundar meu conhecimento em desenvolvimento Front-end dinâmico e consumo de dados. Os principais aprendizados foram:

Consumo de API Assíncrona: Dominei a utilização da função nativa fetch() do JavaScript e o fluxo assíncrono (Promises e async/await) para buscar dados em tempo real.

Manipulação Avançada do DOM: Pratiquei a captura eficiente de eventos (change, input) e a atualização dinâmica de elementos da interface.

Formatação e Localização de Dados: Apliquei o objeto Intl.NumberFormat para garantir a apresentação correta dos valores monetários (BRL, USD, EUR).
---

## 🚀 Como Rodar o Projeto

Siga estas etapas para ter o conversor de moedas em execução na sua máquina local:

### Pré-requisitos
O projeto é puramente Front-end e não requer a instalação de pacotes. Você só precisa de:
* Um navegador web moderno.

### 1. Instalação (Baixar o Código)

1.  **Clone o repositório** para sua máquina usando o terminal:
    ```bash
    git clone [https://github.com/Lpluiz123/conversor-de-moedas.git](https://github.com/Lpluiz123/conversor-de-moedas.git)
    ```
2.  **Navegue** até o diretório do projeto:
    ```bash
    cd conversor-de-moedas
    ```
3.  **Execute:** Abra o arquivo `index.html` diretamente no seu navegador.

### 2. Como Usar (Interação)

1.  **Insira o Valor:** Digite o valor em **Reais (R$)** no campo de input.
2.  **Selecione a Moeda:** Escolha a moeda de destino (Dólar Americano ou Euro) no menu *dropdown* "Converter **para**".
3.  O valor convertido será exibido **automaticamente** abaixo, em tempo real.

---

## 🤝 Contribuição

Sinta-se à vontade para sugerir melhorias, reportar *bugs* ou adicionar novas funcionalidades.

1.  Faça um Fork do projeto.
2.  Crie uma branch para sua funcionalidade (`git checkout -b feature/NovaFuncionalidade`).
3.  Faça commit das suas mudanças (`git commit -m 'feat: Adiciona nova funcionalidade X'`).
4.  Faça Push para a branch (`git push origin feature/NovaFuncionalidade`).
5.  Abra um Pull Request.

---

## 👨‍💻 [Contato](https://www.linkedin.com/in/luiz-ferreira123/)
Feito com ❤️ por [LUIZ FELLIPE]
