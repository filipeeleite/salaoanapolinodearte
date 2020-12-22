# Site do Salão Anapolino de Arte
#### Desenvolvimento: Secretaria Municipal de Cultura
Concepção: Outubro de 2020

Site que apresenta o Salão Anapolino de Arte em sua edição atual, situa
os artistas anapolinos interessados no contexto artístico de seu município,
e tem também como propósito promover à toda população o acesso à informação,
e a toda carga cultural que suas diversas edições até o momento produziram.

## A) Estrutura do aplicativo:

### Páginas estáticas:
- [Index.html](/Index.html) > Apresentação da edição atual e informações
- [mais-informacoes.html](/mais-informacoes.html) > Página complementar à inicial
- [inscricao.html](/inscricao.html) > Página de inscrição: Introdução ao processo e o sistema de inscrição em si
- [edicoes-anteriores.html](/edicoes-anteriores.html) > Histórico das edições, Link p/ todos os catálogos anteriores (.pdf)

### Folhas de estilo:
#### Comuns a todas as páginas:
- [header.css](/css/header.css) > Regras de estilo referentes ao menu no topo
- [tipografia.css](/css/tipografia.css) > Tipografia do site todo
- [main.css](/css/main.css) > Design e funcionalidade geral da aplicação, grid do main
- [footer.css](/css/footer.css) > Design e funcionalidades do footer
   
#### Folhas de estilo específicas:
- [index.css](/css/index.css) > Página Inicial (e seu grid template areas)
- [mais-informacoes.css](/css/mais-informacoes.css) > Página Mais Informações (e seu grid template areas)
- [Inscrever.css](/css/inscrever.css) > Página Inscrever (e seu grid template areas)
- [edicoes-anteriores.css](/css/edicoes-anteriores.css) > Página Edições Anteriores
- [grid-areas-ed-anteriores.css](/css/grid-areas-ed-anteriores.css) > Grids da página Edições Anteriores

- [icones.css](/css/icones.css) > Animações e hover dos ícones de catálogos e arquivos

## B) Conexão entre as páginas:
![](https://dl.dropbox.com/s/4sdsdvuyb6cdifc/readme_1%20-%20conexao%20entras%20paginas.jpg)

## C) Classes e grid areas:
```==== index.html:
<main>
 └.main-grid
   └.main-texto                     -> main-texto
   └.main-equipe-tecnica            -> main-equipe-tecnica

==== mais-informacoes.html:
<main>
 └.main-grid
   └.main-info                      -> main-info
   └.main-calendario                -> main-calendario
   └.main-sobregaleria              -> main-sobregaleria
   └.main-publicacoes               -> main-publicacoes

==== inscricao.html:
<main>
 └.main-grid
   └.main-inscricao-etapa1          -> main-inscricao-etapa1
   └.main-downloads                 -> main-downloads

==== edicoes-anteriores.html
<main>
 └.main-grid                        -> main-ed-anteriores
   └.main-ed-anteriores
     └<section>
       └.grid-ed-ant-section-24     -> grid-ed-ant-section-24
     └<section>
       └.grid-ed-ant-section-23     -> grid-ed-ant-section-23
     └<section>
       └.grid-ed-ant-section-22     -> grid-ed-ant-section-22
     └<section>
       └.grid-ed-ant-section-21     -> grid-ed-ant-section-21
     └<section>
       └.grid-ed-ant-section-20     -> grid-ed-ant-section-20
     └<section>
       └.grid-ed-ant-section-19     -> grid-ed-ant-section-19
 ```
