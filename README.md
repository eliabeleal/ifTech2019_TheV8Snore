# O Ronco do V8

O que é V8? 
É um engine Javascript de código aberto criada pelo Projeto Chromium para os navegadores Google Chrome e Chromium. O criador do projeto é Lars Bak. Ela também é usada no lado do servidor (NodeJS, MongoDB). 

Mas o que é uma engine Javascript?
É um programa ou um interpretador que executa código Javascript.	

Objetivo deste minicurso: construir uma aplicação web usando a arquitetura orientada a recursos, REST. Ela será uma rede social de DEVs, onde o usuário vai acessar com seu username do github e dará link e deslike em DEVs.

Steps

1. Clonando o repositório e rodando o docker

    `
    git clone https://github.com/elileal/ifTech2019_TheV8Snore.git
    `

    `
    docker-compose up
    `
1. Acessando o projeto no navegador

    `
    http://localhost:8081
    `
1. Usando um cliente HTTP ([HTTPie](https://httpie.org/))

    `
    alias http='docker run -ti --rm --net=host alpine/httpie'
    `

    `
    http localhost:8081 name=="seu nome"
    `

    _**OBS**: Caso haja problema com dns na sua rede, use a flag --dns="IP"_

    #### Buscando qual é o DNS da sua rede

    `
    $ nmcli dev show | grep 'IP4.DNS
    `

    `
    alias http='docker run -ti --rm --net=host --dns=123.456.789 alpine/httpie'
    `

