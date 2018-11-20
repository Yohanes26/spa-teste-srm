# SPA Single Page Application - Angular6, Angular Material, SASS, Routes and Rest.

Heroku - Link Oficial para acesso ao demonstrativo.
https://teste-srm.herokuapp.com

================================================================================

# Como subir localmente a aplicação?
Pré-Req: Ter instalado o NODE, e @angular/cli no local da maquina.
Após instalar o node, executar: npm install -g @angular/cli

 Seguem os passos:
 * Clonar o projeto do GitHub
 * Abrir o cmd na pasta Raiz do projeto
 * Executar o Comando "ng serve"
 * Após a compilação e mensagem de Build Sucess abra o navegador e acesse o link:
 http://localhost:4200
 * Provavelmente você não sairá da tela de erro, pois a aplicação estará tentando acessar um domínio do Heroku onde vai barrar por erro de CORS
 * Portanto para você conseguir executar totalmente os teste local, você deverá subir local o componente Java tbm, link abaixo:
 https://github.com/Yohanes26/java-teste-srm
 * Após subir localmente o Componente Java, você deverá alterar os seguintes arquivos:
  class ClienteService
    uriGetListaJuros = 'http://localhost:8080/juros';
    uriSalvarCliente = 'http://localhost:8080/cliente/salvar';
    
  ListaClienteService
    uriGetListaClientes = 'http://localhost:8080/cliente';
 * Salve as alterações
 * Execute o comando "ng serve" novamente
 * Acesse o Browser no link: http://localhost:4200
 
 Obs: Também pode-se fazer chamadas http via PostMan e Soap-UI

 
================================================================================
 
 # O que foi utilizado?
 
 * Angular6
 * AngularMaterial
 * SASS .scss (Frame de CSS)
 * Html
 * TypeScript
 * LocalStorage
 * Rotas
 * Chamadas Http
 * Testes em Karma/Jasmine
 
 
 
================================================================================

# Onde são armazenados os dados inseridos?

    A aplicação está direcionada para o Banco de Dados https://www.mlab.com  MongoDB
    Dados para conexão ao Banco:

mongodb://Yohanes:Yohanes26@ds255403.mlab.com:55403/teste-srm
 
