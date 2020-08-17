// Servidor
 const express = require('express')
 const server = express()
 const{
     pageLanding,
     pageStudy,
     pageGiveClasses
 } = require('./pages')

// configurar nunjucks (template engine)
const nunjucks = require('nunjucks')
const { format } = require('path')
nunjucks.configure('src/views',{
    express: server,
    noCache: true,
})


// Inicio e configuração do servidor
server
//configurar arquivos estáticos (css, scripts, imagens)  
 server.use(express.static("public"))
// rotas da aplicação
.get("/", pageLanding)
.get("/study", pageStudy)
.get("/give-classes", pageGiveClasses)
.listen(5500)

