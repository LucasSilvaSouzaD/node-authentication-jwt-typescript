# node-authentication-jwt-typescript

Esse projeto é uma API para autenticação JWT em NODEJS, TypeORM e TypeScript...
Rotas de criar usuario, logar e verificar se o mesmo é autorizado para realizar tais requisições,
para ter um gerenciamento eficiente das "versões" do banco de dados utilizei as famosas Migrations,
através dela é possível incluir, alterar e excluir tabelas ou campos de determinada tabela, de uma forma organizada, deixando todas essas alterações documentadas.
Assim que criarmos a Migration ela disponibiliza dois métodos, sendo,
  UP() - Método que executa em primeiro nível a atualização desenvolvida para sua aplicação.
  Down() - Método responsável pelo Rollback, onde o mesmo irá desfazer todas alterações realizadas pelo Up().
