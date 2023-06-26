Dupla:
	Jardel Brandão dos Santos
	Sarah de Oliveira Ferreira

Como dito no forms enviado, foi desenvolvida uma API para a aprte do backend, logo, necessita de uma banco de dados e que a mesma esteja rodando. O código da API será enviado e será necessário a criação de um banco postgres SQL (utilizamos o pgAdmin por ter uma melhor interface) e a configuração desse banco com seu IP.

Os arquivos tem sua divisão entre back e front. Dito isto, para configurar o back será necessário alterar:
	- o arquivo knexfile.js que está em orders-backend/src/config/knexfile.js que está cofigurando a conexão do banco (conexão com um banco local, localhost).

	- agora precisamos criar e rodar as migrations;
		Criar migrations: knex --knexfile src/config/knexfile.js --migrations-directory ../database/migrations migrate:make test -x cjs
		
		Rodar migrations: knex migrate:latest --knexfile ./src/config/knexfile.cjs

Com o backend rodando, pode-se executar o front (o apk foi gerado com a conexão local que irá ficar rodando durante o horário da aula, mas está sujeito a crashs, então é preferível testar ambos numa máquina usando o android studio). 

Para o front, com os arquivos, na pasta do front, rodar um npm install para as dependências e rodar com o expo.