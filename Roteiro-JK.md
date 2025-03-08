# Roteiro de Desenvolvimento: Implementação das Funcionalidades Bancárias e Histórico

Este roteiro detalhado servirá de guia no desenvolvimento das funcionalidades bancárias e histórico, partindo do zero.  Marcarei cada item como concluído à medida que for avançando.

## ☑️ Preparação Inicial (Uma unica vez)

*   1. **Fazer o Fork do repositório principal (Danilo):**
    *   Acessar o repositório do Danilo no GitHub.✅
    *   Clicar no botão "Fork" (canto superior direito).✅
    *   Selecionar a minha conta para criar o fork.✅
*   2. **Fazer o Clone do Fork para máquina local:**
    *   No repositório forkado, clicar no botão verde "Code" e copiar o URL HTTPS ou SSH.✅
    *   Abrir o terminal/prompt de comando.✅
    *   Navegar até o diretório onde será salvo o projeto.✅
    *   Executar o comando: `git clone <URL_DO_SEU_REPOSITORIO>`✅
*   3. **Configurar o repositório original (Danilo) como "upstream" (para sincronizar atualizações):**
    *   No terminal, dentro do diretório do projeto, executar: `git remote add upstream <URL_DO_REPOSITORIO_DO_DANILO>`✅
    *   (Opcional: Verificar se o upstream foi configurado corretamente: `git remote -v`)✅

## ☑️ Para cada nova funcionalidade/tarefa (como implementar `depositar()`, `sacar()` etc.):

*   4. **Criar uma branch para a nova funcionalidade:** (Varias vezes)
    *   No terminal, executar: `git checkout -b feature/nome-da-funcionalidade` (ex: `feature/implementar-depositar`)
    *   (Dica: Usar nomes descritivos para as branches.)

## ☑️ Implementação das Funcionalidades (Varias vezes)

*   5. **Implementar o método `depositar()`:**
    *   Ler e entender a descrição do método.
    *   Escrever o código para receber o valor a ser depositado.
    *   Validar o valor (deve ser maior que zero).
    *   Adicionar o valor ao saldo da conta.
    *   Registrar a transação no histórico (se o histórico já estiver implementado).
    *   Exibir mensagem de confirmação ou erro.
*   6. **Implementar o método `sacar()`:**
    *   Ler e entender a descrição do método.
    *   Escrever o código para receber o valor a ser sacado.
    *   Validar o valor (deve ser maior que zero).
    *   Verificar se há saldo suficiente na conta.
    *   Subtrair o valor do saldo da conta.
    *   Registrar a transação no histórico (se o histórico já estiver implementado).
    *   Exibir mensagem de confirmação ou erro.
*   7. **Implementar o método `transferir()`:**
    *   Ler e entender a descrição do método.
    *   Escrever o código para receber o número da conta de destino e o valor a ser transferido.
    *   Validar o valor (deve ser maior que zero).
    *   Verificar se há saldo suficiente na conta de origem.
    *   Subtrair o valor do saldo da conta de origem.
    *   Adicionar o valor ao saldo da conta de destino (requer acesso à outra conta).
    *   Registrar as transações no histórico de ambas as contas (se o histórico já estiver implementado).
    *   Exibir mensagem de confirmação ou erro.
*   8. **Implementar o histórico de transações:**
    *   Escolher a estrutura de dados para armazenar as transações (ArrayList de Strings ou classe Transacao).
    *   Criar o método `registrarTransacao()` para adicionar transações ao histórico.
    *   Criar o método `exibirHistorico()` para exibir o histórico ao usuário.
    *   Integrar o registro do histórico nos métodos `depositar()`, `sacar()` e `transferir()`.

## ☑️ Testes e Tratamento de Exceções (Varias vezes)

*   9. **Testar as funcionalidades implementadas:**
    *   Criar casos de teste para cada método (depósito com valor válido, depósito com valor inválido, saque com saldo suficiente, saque com saldo insuficiente, etc.).
    *   Executar os testes e verificar se os resultados são os esperados.
*   10. **Implementar o tratamento de exceções:**
    *   Identificar os pontos do código onde podem ocorrer erros (ex: entrada inválida do usuário).
    *   Utilizar blocos `try-catch` para capturar as exceções.
    *   Exibir mensagens de erro amigáveis ao usuário.

## ☑️ Versionamento e Integração (Varias vezes)

*   11. **Adicionar as alterações ao controle de versão (Git):**
    *   Executar: `git add .` (para adicionar todos os arquivos modificados) ou `git add <nome-do-arquivo>` (para adicionar um arquivo específico).
*   12. **Fazer o commit das alterações:**
    *   Executar: `git commit -m "Implementa funcionalidades bancárias e histórico"` (usar uma mensagem descritiva).
*   13. **Enviar (push) a branch para o seu repositório remoto (Fork):**
    *   Executar: `git push origin feature/nome-da-funcionalidade`
*   14. **Criar um Pull Request (PR) no GitHub:**
    *   Acessar o seu repositório Fork no GitHub.
    *   Clicar no botão "Compare & pull request" (geralmente o GitHub sugere isso automaticamente após o push).
    *   Preencher o formulário com uma descrição clara das suas alterações.
    *   Criar o Pull Request.
*   15. **Aguardar a revisão do Danilo:**
    *   Responder aos comentários e fazer as alterações solicitadas (se houver).
    *   Após a aprovação, o Danilo fará o merge das suas alterações para o repositório principal.

## ☑️ Sincronização (Manter seu Fork atualizado - Faça isso regularmente) (Varias vezes)

*   16. **Sincronizar o seu Fork com o repositório original (Danilo):**
    *   No terminal, executar:
        *   `git fetch upstream`
        *   `git checkout main` (ou a branch que você quer atualizar)
        *   `git merge upstream/main`
        *   `git push origin main`
