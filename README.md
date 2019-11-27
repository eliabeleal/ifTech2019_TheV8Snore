# O Ronco do V8

Bem vindo ao mundo Javascript.

1. Clonando o repositório

    `
    git clone
    `
1. Rodando o docker

    `
    docker-compose up
    `
1. Acessando o projeto

    `
    http://localhost:3333
    `
1. Entrando no container node
    
    `
    docker exec -it react-container bash
    `
1. Usando um cliente HTTP

    `
    alias http='docker run -ti --rm --net=host alpine/httpie'
    `

    `
    http localhost:3000 name=="seu nome"
    `

    _**OBS**: Caso haja problema com dns na sua rede, use a flag --dns="IP"_

    #### Buscando qual é o DNS da sua rede

    `
    $ nmcli dev show | grep 'IP4.DNS
    `

    `
    alias http='docker run -ti --rm --net=host --dns=123.456.789 alpine/httpie'
    `

