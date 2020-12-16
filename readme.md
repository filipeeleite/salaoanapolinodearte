# Salão Anapolino de Arte
#### Site desenvolvido pela Secretaria Municipal de Cultura Dezembro de 2020

Site que apresenta o Salão Anapolino de Arte, sua edição atual, e situa
o artista anapolino interessado, no contexto artístico de seu município,
e também deixa à toda população o acesso à informação, à carga cultural
que estas diversas edições coletaram.

Revisão do readme: 16-dez-2020
---
## Estrutura do aplicativo:


1. Páginas estáticas:
   - Index.html > Calendário e texto principal da página

   - mais-informacoes.html > Página complementar à inicial

   - inscrever.html > Página de inscrição, introdução ao processo e o sistema de inscrição em si

   - edicoes-anteriores.html > Histórico das edições, Link p/ todos os catálogos anteriores (.pdf)

2. Folhas de estilo:
   - header.css > Design e funcionalidades do header
   - main.css > Design e funcionalidade geral da aplicação, dita a estrutura básica do layout e tipografia
   
2.1. Design e Funcionalidades específicas das páginas:
     - MaisInformacoes.css
     - Inscrever.css
     - edicoes-anteriores.css

     - footer.css > Design e funcionalidades do footer

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
