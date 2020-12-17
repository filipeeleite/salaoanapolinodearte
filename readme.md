# Salão Anapolino de Arte
#### Site desenvolvido pela Secretaria Municipal de Cultura Dezembro de 2020

Site que apresenta o Salão Anapolino de Arte, sua edição atual, e situa
o artista anapolino interessado, no contexto artístico de seu município,
e também deixa à toda população o acesso à informação, à carga cultural
que estas diversas edições coletaram.

## Estrutura do aplicativo:

### Páginas estáticas:
- [Index.html](/Index.html) > Calendário e texto principal (apresentação)
- [mais-informacoes.html](/mais-informacoes.html) > Página complementar à inicial
- [inscricao.html](/inscricao.html) > Página de inscrição: Introdução ao processo e o sistema de inscrição em si
- [edicoes-anteriores.html](/edicoes-anteriores.html) > Histórico das edições, Link p/ todos os catálogos anteriores (.pdf)

### Folhas de estilo:
- [header.css](/css/header.css) > Design e funcionalidades do menu ao topo
- [tipografia.css](/css/tipografia.css) > Tipografia do site todo
- [main.css](/css/main.css) > Design e funcionalidade geral da aplicação, dita a estrutura básica do layout
- [footer.css](/css/footer.css) > Design e funcionalidades do footer
   
#### Animações e estilos específicos:
 - [mais-informacoes.css](/css/mais-informacoes.css)
 - [Inscrever.css](/css/inscrever.css)
 - [edicoes-anteriores.css](/css/edicoes-anteriores.css)
 - [icons.css](/css/icons.css) > Animações e hover dos ícones de catálogos e arquivos **Em teste!**

## Conexão/relação entre as páginas:
```
Index.html  
    <header>
        <.menubar>
            <.menu-left>
                <a href= >
                    <svg.logo-salao>

mais-informacoes.html
<header>
    <.menubar>
        <.menu-right>
            <a .menuoption href= >
                <.hovermenu>
                    <p #option1>

inscricao.html
<header>
    <.menubar>
        <.menu-right>
            <a .menuoption href= >
                <.hovermenu>
                    <p #option2>

edicoes-anteriores.html
<header>
    <.menubar>
        <.menu-right>
            <a .menuoption href= >
                <.hovermenu>
                    <p #option1>
```
