# Nexus Barber API

## 📌 Descrição

A **Nexus Barber API** é uma API REST desenvolvida em **Node.js**, utilizando **Express.js** e **MongoDB**, criada para facilitar o gerenciamento de barbearias.

O sistema permite o controle de estabelecimentos, serviços, agendamentos e demais informações relacionadas ao negócio, fornecendo uma base robusta para aplicações web e mobile voltadas ao segmento de barbearias.

---

## 🚀 Tecnologias Utilizadas

* Node.js
* Express.js
* MongoDB Atlas
* Mongoose
* Cors
* Morgan
* Nodemon

---

## ⚙️ Funcionalidades

* Cadastro de barbearias
* Listagem de barbearias
* Atualização de dados
* Exclusão de registros
* Integração com banco de dados MongoDB
* API REST para consumo por aplicações web e mobile

---

## 📁 Estrutura do Projeto

```bash
Nexus-Barber-API/
│
├── database.js
├── index.js
├── package.json
│
├── src/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── services/
│   └── middlewares/
│
└── README.md
```

---

## 🔧 Instalação

### 1. Clone o repositório

```bash
git clone https://github.com/seu-usuario/nexus-barber-api.git
```

### 2. Acesse a pasta do projeto

```bash
cd nexus-barber-api
```

### 3. Instale as dependências

```bash
npm install
```

### 4. Configure as variáveis de ambiente

Crie um arquivo `.env` na raiz do projeto contendo as informações de conexão com o MongoDB Atlas:

```env
MONGODB_URI=sua_string_de_conexao
PORT=8000
```

### 5. Execute o projeto

Modo desenvolvimento:

```bash
npm run dev
```

Modo produção:

```bash
npm start
```

---

## 🌐 Endpoints

### Barbearias

| Método | Endpoint        | Descrição                   |
| ------ | --------------- | --------------------------- |
| GET    | /barbearias     | Lista todas as barbearias   |
| GET    | /barbearias/:id | Busca uma barbearia por ID  |
| POST   | /barbearias     | Cadastra uma nova barbearia |
| PUT    | /barbearias/:id | Atualiza uma barbearia      |
| DELETE | /barbearias/:id | Remove uma barbearia        |

---

## 🗄️ Banco de Dados

O projeto utiliza o **MongoDB Atlas** como banco de dados principal, realizando a persistência das informações através do **Mongoose**.

---

## 📱 Integração

A API foi desenvolvida para ser consumida por:

* Aplicações Web
* Aplicações Mobile
* Sistemas de gestão para barbearias
* Plataformas de agendamento

---

## 👩‍💻 Autora

Maria Yasmin Ferreira Guilherme



## 📄 Licença

Este projeto está licenciado sob os termos da licença MIT. Consulte o arquivo LICENSE para mais informações.
