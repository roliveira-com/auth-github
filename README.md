## Auth Github
Servidor que funciona como um proxy reverse para obtenção do access token na API OAuth do Github 

## Endpoints
- **Access Token** Post do `{code: <code_do_github>}` no endpoint `/oauth/accesstoken` para obter o token de acesso

## Setup
Clone este repositório  
`git clone https://github.com/roliveira-com/auth-github.git`  

Instale as dependências  
`npm install`  

Rodar o servidor local no endereço http://localhost:5000
`npm start`  

