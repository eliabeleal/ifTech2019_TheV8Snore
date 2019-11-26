# O Ronco do V8

Bem vindo ao mundo Javascript.

1. Clonando o repositório

    `
    git clone https://github.com/elileal/sect2019_TheV8Snore_class.git
    `
1. Rodando o docker

    `
    docker-compose up
    `
1. Acessando o no navegador

    `
    http://localhost:3000
    `
    `
    http://localhost:3001
    `
1. Entrando no container node (Novo terminal)
    
    `
    docker exec -it react-container bash
    `
1. Usando um cliente HTTP

    `
    alias http='docker run -ti --rm --net=host alpine/httpie'
    `

    `
    http localhost:3000 name==<seu nome>
    `

