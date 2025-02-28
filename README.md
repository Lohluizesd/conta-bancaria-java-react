# 🏦 Projeto Open Source de Sistema Bancário em Java e React 💻

## Descrição

Este é um projeto de desenvolvimento colaborativo para criar um sistema bancário simples em Java (backend) e React (frontend), com o objetivo de fornecer uma plataforma open source para aprendizado e experimentação. O sistema incluirá operações bancárias básicas e uma interface web moderna e responsiva.

## ⭐ Objetivo do Projeto

Desenvolver um sistema bancário com as seguintes funcionalidades:

*   ✅ Criação de contas bancárias
*   ✅ Depósitos
*   ✅ Saques
*   ✅ Transferências
*   ✅ Histórico de transações
*   ✅ Interface via web (React)
*   ✅ API RESTful para comunicação entre o frontend e o backend
*   ✅ Código bem estruturado e documentado

## 🛠️ Tecnologias Utilizadas

*   **Linguagem Backend:** Java
*   **Framework Backend:** (Opcional, ex: Spring Boot)
*   **Linguagem Frontend:** JavaScript
*   **Framework Frontend:** React
*   **IDE:** IntelliJ IDEA, Eclipse ou VS Code
*   **Versionamento:** Git/GitHub
*   **Comunicação Frontend/Backend:** API RESTful (JSON)
*   **Bibliotecas:** Bibliotecas padrão do Java, Axios ou Fetch para React

## 🧑‍💻 Participantes

*   [Danilo Santos](@DaniloSantos284)
*   [Johnnatan Krause](@johnnatankrause)
*   [Lorenna Dias](@Lohluizesd)
*   [Samuel Barbosa](@samuelbarbosagh)

## 🚀 Tarefas do Projeto

O projeto está dividido nas seguintes etapas:

### 1. 🏗️ Estrutura do Projeto (Backend - Java)

*   Desenvolver a classe `ContaBancaria` com atributos (número da conta, saldo, etc.) e métodos essenciais.
*   Definir pacotes para manter o código organizado (ex: `model`, `service`, `controller`, etc.).
*   Adicionar comentários detalhados ao código.
*   Criar um diagrama de classes simples para visualizar a estrutura do sistema.
*   Criar construtores para instanciar os métodos das classes.
*   Criar um UML no Astah.

### 2. 💰 Funcionalidades Bancárias (Backend - Java)

*   Implementar os métodos `depositar()`, `sacar()`, `transferir()` e `extrato()` para realizar as operações financeiras.
*   Criar um histórico de transações para cada conta, registrando todas as operações.
*   Implementar mensagens de confirmação ou erro para cada operação.
*   Utilizar blocos `try-catch` para capturar exceções e garantir a robustez do sistema.

### 3. ⚛️ Interface do Usuário com React (Frontend)

*   Configurar um ambiente de desenvolvimento React (create-react-app, Vite, etc.).
*   Definir a estrutura de componentes React para a interface bancária (ex: tela de login, tela de saldo, tela de transferência, etc.).
*   Criar componentes reutilizáveis para elementos da interface (ex: botões, campos de texto, tabelas).
*   Implementar a navegação entre as diferentes telas do sistema.
*   Integrar a interface React com a API Java (detalhado na próxima tarefa).
*   Garantir uma interface responsiva e acessível em diferentes dispositivos.
*   Implementar validação de dados no frontend para melhorar a experiência do usuário.

### 4. 🔄 Integração Backend Java e Frontend React

*   Definir a API RESTful em Java para expor as funcionalidades bancárias (criação de contas, depósitos, saques, transferências, extrato).
*   Implementar endpoints para cada operação bancária.
*   Documentar a API utilizando ferramentas como Swagger ou OpenAPI.
*   Configurar o CORS (Cross-Origin Resource Sharing) para permitir que o frontend React acesse a API Java.
*   Implementar chamadas assíncronas (usando `fetch`, `axios`, etc.) do React para a API Java para realizar as operações bancárias.
*   Tratar erros de requisição e exibir mensagens informativas para o usuário.
*   Utilizar formatos de dados como JSON para a comunicação entre o frontend e o backend.

### 5. 📝 Revisão e Documentação

*   Revisar e refatorar o código para garantir a qualidade e legibilidade (tanto do Java quanto do React).
*   Elaborar testes manuais e, se possível, automatizados (unitários e de integração) para verificar a funcionalidade do sistema (tanto frontend quanto backend).
*   Criar um arquivo `README.md` no repositório do GitHub com as instruções de uso do sistema.
*   Escrever um guia de usuário detalhado para auxiliar os usuários a utilizarem o sistema.
*   Documentar a API RESTful (endpoints, parâmetros, exemplos de uso).
*   Documentar a arquitetura do frontend React (componentes, fluxo de dados).

### 6. 🌍 Integração via GitHub

*   Configurar e gerenciar o repositório no GitHub.
*   Manter um histórico de commits claro e descritivo.
*   Realizar revisões de pull requests para garantir a qualidade do código.
*   Resolver conflitos de merge de forma eficiente.

### 7. 💬 Comunicação e Coordenação

*   Organizar reuniões regulares para discutir o progresso do projeto e resolver problemas.
*   Manter um quadro de tarefas atualizado para acompanhar o desenvolvimento.
*   Facilitar a comunicação entre os membros da equipe.
*   Consolidar a documentação do projeto.

## 📌 Considerações Finais

*   Assegurar a integração de todas as partes do projeto (frontend e backend).
*   Realizar testes de fluxo entre as funções.
*   Agendar reuniões para discutir as dificuldades encontradas.
*   O objetivo é criar um sistema simples e funcional, servindo como base para futuros desenvolvimentos.