# Salão Anapolino de Arte
#### Site desenvolvido pela Secretaria Municipal de Cultura Dezembro de 2020

Site que apresenta o Salão Anapolino de Arte, sua edição atual, e situa
o artista anapolino interessado, no contexto artístico de seu município,
e também deixa à toda população o acesso à informação, à carga cultural
que estas diversas edições coletaram.

Revisão do readme: 16-dez-2020

1. Estrutura do aplicativo:
------------------------

  1. Páginas estáticas:
    * Index.html
    Calendário e texto principal da página

    * MaisInformacoes.html
    Página complementar à inicial

    * Inscrever.html
    Página de inscrição
    Introdução ao processo
    e o sistema de inscrição em si

    * EdicoesAnteriores.html
    Histórico das edições
    Link p/ todos os catálogos anteriores (.pdf)

  2. Folhas de estilo:
   * header.css
   Design e funcionalidades do header
   * main.css
   Design e funcionalidade geral da aplicação
   Dita a estrutura básica do layout e tipografia
   
    1. Design e Funcionalidades específicas das páginas:
       * MaisInformacoes.css
       * Inscrever.css
       * EdicoesAnteriores.css

       * footer.css
       Design e funcionalidades do footer

Conexão/relação entre as páginas:
---------------------------------

Index.html  
header
  .menubar
    .menu-left
      a
        svg.logo-salao

MaisInformacoes.html
header
  .menubar
    .menu-right
       a .menuoption
         .hovermenu
           p #option1

Inscrever.html
       a .menuoption
         .hovermenu
           p #option2

EdicoesAnteriores.html
       a .menuoption
         .hovermenu
           p #option3