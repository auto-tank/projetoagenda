# Projeto Agenda

Este é um projeto de uma agenda de contatos desenvolvida com Node.js, Express e MongoDB. A aplicação permite que os usuários se cadastrem, façam login e gerenciem seus contatos.

## Tecnologias Utilizadas

- **Backend:** Node.js, Express, MongoDB com Mongoose
- **Frontend:** EJS (Embedded JavaScript templates), Webpack
- **Autenticação:** Express Sessions, Bcryptjs
- **Segurança:** Helmet, CSRF (csurf)
- **Outros:** Nodemon, Dotenv

## Pré-requisitos

- Node.js (versão 14 ou superior)
- npm (geralmente vem com o Node.js)
- MongoDB (instalado localmente ou uma instância na nuvem como o MongoDB Atlas)

## Como Instalar e Executar o Projeto

1. **Clone o repositório:**

    ```bash
    git clone https://github.com/drigohhh/projetoagenda.git
    cd projetoagenda
    ```

2. **Instale as dependências:**
    Execute o comando abaixo para instalar todas as dependências do projeto listadas no `package.json`.

    ```bash
    npm install
    ```

3. **Configure as variáveis de ambiente:**
    Crie um arquivo `.env` na raiz do projeto, seguindo o exemplo do `.env.example` (se houver) ou adicionando as seguintes variáveis:

    ```bash
    CONNECTIONSTRING=SUA_STRING_DE_CONEXAO_COM_O_MONGODB
    SESSION_SECRET=SUA_CHAVE_SECRETA_PARA_A_SESSAO
    ```

    Substitua `SUA_STRING_DE_CONEXAO_COM_O_MONGODB` pela sua string de conexão do MongoDB.

4. **Execute o servidor de desenvolvimento:**
    Para iniciar o servidor backend com o Nodemon (que reinicia automaticamente ao detectar alterações nos arquivos), use o comando:

    ```bash
    npm start
    ```

5. **Execute o Webpack para o frontend:**
    Para compilar os assets do frontend (JavaScript, CSS), abra um novo terminal e execute:

    ```bash
    npm run dev
    ```

    Este comando irá observar as alterações nos arquivos do frontend e recompilá-los automaticamente.

6. **Acesse a aplicação:**
    Abra seu navegador e acesse `http://localhost:3000` (ou a porta que estiver configurada).
