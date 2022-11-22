/**
 * Classe que centraliza toda a lógica do backend.
 * Responsável pela inicialização do servidor express e pela sua configuração inicial.
 */

 import express from 'express';
 
 import roteadorGeral from './src/routes/router.js';
 
 class Server {
   // Na função construtora da classe são chamadas todas as configurações e o servidor roda na porta especificada no .env
   constructor() {
     this.server = express();
     this.configServer();
     this.configRotas();
 
     this.server.listen(9018, () => {
       console.log(`Servidor iniciado na porta 9018`)
     });
   }
 
   // Aqui são especificadas as preferências do servidor express.
   configServer() {
     this.server.use(express.json({ limit: '1mb' }));
     this.server.use(express.urlencoded({ extended: true }))
   }
 
   // Aqui é configurado o roteador geral da aplicação, o qual envolve todas as outras rotas.
   configRotas() {
     this.server.use(roteadorGeral)
   }
 }
 
 export default Server;