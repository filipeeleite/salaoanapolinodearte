// 1) What to be draw on screen and how

// Main State of the application
var RunningState = location.hash;
//RunningState == "" -> # (false)
//RunningState == "#talpagina"

// Reading Screen Format to Set Variable -> mobile = true / false
styleSheetToHead = document.createElement('link');
styleSheetToHead.setAttribute('rel', 'stylesheet');
styleSheetToHead.setAttribute('href', 'common.css');
document.head.appendChild(styleSheetToHead);

if (window.innerWidth > 1024) {
    mobile = false;
    styleSheetToHead = document.createElement('link');
    styleSheetToHead.setAttribute('rel', 'stylesheet');
    styleSheetToHead.setAttribute('href', 'desktop.css');
    document.head.appendChild(styleSheetToHead);
} else {
    mobile = true;
    styleSheetToHead = document.createElement('link');
    styleSheetToHead.setAttribute('rel', 'stylesheet');
    styleSheetToHead.setAttribute('href', 'mobile.css');
    document.head.appendChild(styleSheetToHead);
}

// FIRST LOAD ::::::::::
appendOnBody('header');
appendOnBody('main');
appendOnBody('footer');

// Structure on HTML / MARKUP
// EVERY CALL APPEND ON BODY - ORDER MATTERS ON HTML!
function appendOnBody(tag) {
    // Structure of
    // <header>
    // <main>
    // <footer>
    if (tag === 'header') {
        // Construct Main Menu Structure
        let header = document.createElement("header");
        
            // Menu bar
            let div1 = document.createElement("div");
            header.appendChild(div1);
            div1.setAttribute("class", 'menu-bar');

                // Left Side
                let sideL = document.createElement("nav");
                div1.appendChild(sideL);
                sideL.setAttribute("onclick", "clickMainMenu('index');");
                sideL.setAttribute("id", "main-menu-option1");
                    sideL.innerHTML = svgMainIcon; // svgicons.js

                // Right Side
                let sideR = document.createElement("nav");
                div1.appendChild(sideR);
                sideR.setAttribute("class", "menu-right");

                    // Open / Close Button will Render on Mobile
                    if (mobile) {
                        let openCloseMenuButton = document.createElement("div");
                        sideR.appendChild(openCloseMenuButton);
                        openCloseMenuButton.setAttribute("onclick", "clickMainMenu('open-close');");
                        openCloseMenuButton.setAttribute("class", "open-close-menu-button");
                        openCloseMenuButton.innerHTML = 'X';
                    }

                    let div2 = document.createElement("div");
                    sideR.appendChild(div2);
                    div2.setAttribute("onclick", "clickMainMenu('mais-info');");
                    div2.setAttribute("id", "main-menu-option2");
                    
                        // pt - Mais info
                        let option1pt = document.createElement("p");
                        div2.appendChild(option1pt);
                        option1pt.setAttribute("class", "pt");
                        option1pt.innerHTML = '+Informações';
                        
                        // en - More info
                        let option1en = document.createElement("p");
                        div2.appendChild(option1en);
                        option1en.setAttribute("class", "en");
                        option1en.innerHTML = '+Info';

                    let div3 = document.createElement("div");
                    sideR.appendChild(div3);
                    div3.setAttribute("onclick", "clickMainMenu('ed-anteriores');");
                    div3.setAttribute("id", "main-menu-option3");
                    div3.setAttribute("class", "button-disabled");
                        
                        // pt - Edições Anteriores
                        let option2pt = document.createElement("p");
                        div3.appendChild(option2pt);
                        option2pt.setAttribute("class", "pt");
                        option2pt.innerHTML = 'Edições Anteriores';
                        
                        // en - Older Editions
                        let option2en = document.createElement("p");
                        div3.appendChild(option2en);
                        option2en.setAttribute("class", "en");
                        option2en.innerHTML = 'Older Editions';

                    let div4 = document.createElement("div");
                    sideR.appendChild(div4);
                    div4.setAttribute("onclick", "clickMainMenu('inscrever');");
                    div4.setAttribute("id", "main-menu-option4");
                        
                        // pt - Inscrever
                        let option3pt = document.createElement("p");
                        div4.appendChild(option3pt);
                        option3pt.setAttribute("class", "pt");
                        option3pt.innerHTML = 'Inscrever';
                        
                        // en - Subscribe
                        let option3en = document.createElement("p");
                        div4.appendChild(option3en);
                        option3en.setAttribute("class", "en");
                        option3en.innerHTML = 'Subscribe';
                        
        document.body.appendChild(header);

    }
    if (tag === 'main') {
        let main = document.createElement("main");

            let mainBackground = document.createElement("div");
            main.appendChild(mainBackground);
            mainBackground.setAttribute("id", "mainbackground");

            let mainGrid = document.createElement("div");
            main.appendChild(mainGrid);
            mainGrid.setAttribute("class", "main-grid");

                let mainGridLeftSide = document.createElement("div");
                mainGrid.appendChild(mainGridLeftSide);
                mainGridLeftSide.setAttribute("id", "main-grid-left-side");

                let mainGridRightSide = document.createElement("div");
                mainGrid.appendChild(mainGridRightSide);
                mainGridRightSide.setAttribute("id", "main-grid-right-side");

        document.body.appendChild(main);

    }
    if (tag === 'footer') {

        // Elements
        creditos = {
            realizacao : [
                'Realização',  // p - .pt
                'Realization', // p - .en
                '/img/logos/a1-Associacao-AmigosMapa.png',
                '/img/logos/a2-Galeria.png',
                '/img/logos/a3-Prefeitura.png'
            ],
            apresentacao : [
                'Apresentação', // p - .pt
                'Presentation', // p - .en
                '/img/logos/b1-FundodeArteeCultura.png',
                '/img/logos/b2-Secult-Goias.png'
            ],
            citacao : [
                'Este projeto foi contemplado pelo Edital de Fomento às Artes Visuais do Fundo de Arte e Cultura do Estado de Goiás 2018',
                'This project was....'
            ]
        }

        let footer = document.createElement("footer");
        
            let centerAreaDiv = document.createElement("div");
            footer.appendChild(centerAreaDiv);
            centerAreaDiv.setAttribute("class", "center-area");

                let divLeft = document.createElement("div");
                centerAreaDiv.appendChild(divLeft);
            
                    let p1pt = document.createElement("p");
                    divLeft.appendChild(p1pt);
                    p1pt.innerHTML = creditos.realizacao[0];
                    p1pt.setAttribute("class", "pt");

                    let p1en = document.createElement("p");
                    divLeft.appendChild(p1en);
                    p1en.innerHTML = creditos.realizacao[1];
                    p1en.setAttribute("class", "en");

                let divLogos1 = document.createElement("div");
                    divLeft.appendChild(divLogos1);

                    divLogos1.setAttribute("class", "footer-logos");

                    QtdelogosRealizacaoToRender = (creditos.realizacao.length) - 2;
                    for (let i = 0; QtdelogosRealizacaoToRender > i && QtdelogosRealizacaoToRender > 0; i++) {

                        let img = document.createElement("img");
                        img.setAttribute("class", "footer-logo");
                        img.setAttribute("src", creditos.realizacao[i + 2])
                        divLogos1.appendChild(img);
                    }

                let divRight = document.createElement("div");
                centerAreaDiv.appendChild(divRight);

                    let p2pt = document.createElement("p");
                    divRight.appendChild(p2pt);
                    p2pt.innerHTML = creditos.apresentacao[0];
                    p2pt.setAttribute("class", "pt");

                    let p2en = document.createElement("p");
                    divRight.appendChild(p2en);
                    p2en.innerHTML = creditos.apresentacao[1];
                    p2en.setAttribute("class", "en");

                let divLogos2 = document.createElement("div");
                    divRight.appendChild(divLogos2);

                    divLogos2.setAttribute("class", "footer-logos");
                    QtdelogosApresentacaoToRender = (creditos.apresentacao.length) - 2;
                    for (let i = 0; QtdelogosApresentacaoToRender > i && QtdelogosApresentacaoToRender > 0; i++) {

                        let img = document.createElement("img");
                        img.setAttribute("class", "footer-logo");
                        img.setAttribute("src", creditos.apresentacao[i + 2])
                        divLogos2.appendChild(img);

                    }

            //
            let p3pt = document.createElement("p");
            p3pt.innerHTML = creditos.citacao[0];
            p3pt.setAttribute('class', 'pt');
            let p3en = document.createElement("p");
            p3en.innerHTML = creditos.citacao[1];
            p3en.setAttribute('class', 'en');
            footer.appendChild(p3pt);
            footer.appendChild(p3en);

        document.body.appendChild(footer);

    }
}

mainGridLeftSideTag = document.getElementById('main-grid-left-side');
mainGridRightSideTag = document.getElementById('main-grid-right-side');
function removeBlocks() {
    // Removing all Blocks Tags

    // Left Side
    numberOfblocksTagToRemove = mainGridLeftSideTag.getElementsByClassName('block').length;
    if (numberOfblocksTagToRemove) {
        for (let i = 0; i < numberOfblocksTagToRemove; i++) {
            console.log(':: XX left length: '+ mainGridLeftSideTag.getElementsByClassName('block').length + ' :: ' + 'Removed! i=' + i);

            blockToRemove = document.querySelectorAll('#main-grid-left-side .block')[0];

            mainGridLeftSideTag.removeChild(blockToRemove);
    
        }
    }

    // Right Side
    numberOfblocksTagToRemove = mainGridRightSideTag.getElementsByClassName('block').length;
    if (numberOfblocksTagToRemove) {
        for (let i = 0; i < numberOfblocksTagToRemove; i++) {
            
            console.log(':: XX right length: '+ mainGridRightSideTag.getElementsByClassName('block').length + ' :: ' + 'Removed! i=' + i)
            
            blockToRemove = document.querySelectorAll('#main-grid-right-side .block')[0];
    
            mainGridRightSideTag.removeChild(blockToRemove);

        }
    }
}


// Append on main the blocks of the page
function renderPage(page) {


    var blockToRender;

    // Constructs the <div class="block .tal-pagina"> complete
    function construct(blockName) {
        console.log(':: -> construct(' + blockName + ')');

        blockToRender = document.createElement("div");
        let element; // reusing this variable on each element to plot

        // Bloco Aviso - Pagina em Construcao
        if (blockName === 'maintenance') {
            blockToRender.setAttribute("class", "block " + blockName);
            //blockToRender.setAttribute("class", "block " + blockName + " display-none");

            // Create basic tags to maintenance block

            //element = document.createElement("img");
            //element.setAttribute("src", "/img/panoramica-index-a.jpg");
            //element.setAttribute("class", "welcome-img");
            //blockToRender.appendChild(element);


            // element = document.createElement('h3');
            // element.setAttribute('class', 'pt');
            // element.innerHTML = 'Este Portal está em construção!';
            // blockToRender.appendChild(element); //:::

            // element = document.createElement('h3');
            // element.setAttribute('class', 'en');
            // element.innerHTML = 'This Portal is in construction!';
            // blockToRender.appendChild(element); //:::
            element = document.createElement('div');
            element.setAttribute('id', 'elementocomid');
            blockToRender.appendChild(element);

        }

        // Bloco Seja Bem vindo - Panoramica e Texto
        if (blockName === 'welcome') {
            blockToRender.setAttribute("class", "block " + blockName);
            element = document.createElement("img");
            element.setAttribute("src", "/img/panoramica-index-a.jpg");
            element.setAttribute("class", "welcome-img");

            blockToRender.appendChild(element);

            element = document.createElement('h2');
            element.setAttribute("class", 'pt');
            element.innerHTML = '25º Edição';
            blockToRender.appendChild(element); //:::

            element = document.createElement('h2');
            element.setAttribute("class", 'en');
            element.innerHTML = '25º Edition';
            blockToRender.appendChild(element); //:::

            element = document.createElement('h3');
            element.setAttribute('class', 'pt');
            element.innerHTML = 'Seja bem vind@!';
            blockToRender.appendChild(element); //:::

            element = document.createElement('h3');
            element.setAttribute('class', 'en');
            element.innerHTML = 'Welcome!';
            blockToRender.appendChild(element); //:::

            // Text in Portuguese
            let elementCount = texto25edicao.pt.length;
            for (let i = 0; elementCount > 0; i++) {
                element = document.createElement('p');
                element.setAttribute('class', 'pt');
                element.innerHTML = texto25edicao.pt[i];
                blockToRender.appendChild(element); //:::
                elementCount--;
            }

            // Text in English
            elementCount = texto25edicao.en.length;
            for (let i = 0; elementCount > 0; i++) {
                element = document.createElement('p');
                element.setAttribute('class', 'en');
                element.innerHTML = texto25edicao.en[i];
                blockToRender.appendChild(element); //:::
                elementCount--;
            }

        }

        // Bloco Lista Pessoas Edicao Atual
        if (blockName === 'this-edition-list') {
            blockToRender.setAttribute("class", "block " + blockName);

            // Renders This Edition List
            // This Edition Structure
            thisEditionList = [
                // Each line is a step (StepsToRender)
                ['h3', 'class', 'pt', 'Artistas Selecionados'],
                ['h3', 'class', 'en', 'Selected Artists'],
                ['p', 'class', '', edicao25.artistas],
                
                ['h3', 'class', 'pt', 'Prêmio Fomento à Produção Anapolina'],
                ['h3', 'class', 'en', 'Premio Fomento à Produção (EN)'],
                ['p', 'class', '', edicao25.premioFomentoProducaoAnapolina],
                
                ['h3', 'class', 'pt', 'Prêmio Artista Convidado'],
                ['h3', 'class', 'en', 'Premio Artista Convidado (EN)'],
                ['p', 'class', '', edicao25.premioArtistaConvidado[0][1]], // ONLY ONE
                
                ['h3', 'class', 'pt', 'Comissão de Seleção'],
                ['h3', 'class', 'en', 'Comissão de Seleção (EN)'],
                ['p', 'class', '', edicao25.comissaoSelecao],
                
                ['h3', 'class', 'pt', 'Comissão de Premiação'],
                ['h3', 'class', 'en', 'Comissão de Premiação (EN)'],
                ['p', 'class', '', edicao25.comissaoPremiacao],
                
                ['h3', 'class', 'pt', 'Curadoria'],
                ['h3', 'class', 'en', '(Curadoria (EN)'],
                ['p', 'class', '', edicao25.curadoria[0][1]] // ONLY ONE
            ]

            // Render
            stepsToRender = thisEditionList.length
            for (let i = 0; i < stepsToRender; i++) {
                //  Run each time to Each line of the array thisEditionList
                if (typeof(thisEditionList[i][3]) == "string") {
                    // Single String
                    element = document.createElement(thisEditionList[i][0]);
                    element.setAttribute(thisEditionList[i][1], thisEditionList[i][2]);
                    element.innerHTML = thisEditionList[i][3];
                    blockToRender.appendChild(element);

                } else if (typeof(thisEditionList[i][3]) == "object") {
                    // Multiple Strings
                    let NamesToRender = thisEditionList[i][3].length;
                    for (let j = 0; NamesToRender > 0; j++) {
                        element = document.createElement(thisEditionList[i][0]);
                        element.setAttribute(thisEditionList[i][1], thisEditionList[i][2]);
                        element.innerHTML = thisEditionList[i][3][j][1]; // [j][1] = what name
                        blockToRender.appendChild(element);
                        NamesToRender--;
                    }
                }
            }

        }

        // Bloco Visita Guiada
        if (blockName === 'visita-guiada') {
            blockToRender.setAttribute("class", "block " + blockName);

            element = document.createElement('h2');
            element.setAttribute("class", 'pt');
            element.innerHTML = 'Visita Guiada';
            blockToRender.appendChild(element);

            element = document.createElement('h2');
            element.setAttribute("class", 'en');
            element.innerHTML = 'Online Visit';
            blockToRender.appendChild(element);

            element = document.createElement('div');
            element.setAttribute('style', 'background-color:red; height:100px');
            blockToRender.appendChild(element);
        }

        // Bloco Edição Anterior - 24A
        if (blockName === 'edicao24') {
            blockToRender.setAttribute("class", "block " + blockName);

            element = document.createElement('h2');
            element.setAttribute("class", 'pt');
            element.innerHTML = 'Edição 24';
            blockToRender.appendChild(element);

            element = document.createElement('h2');
            element.setAttribute("class", 'en');
            element.innerHTML = '24 Edition';
            blockToRender.appendChild(element);

            element = document.createElement('div');
            element.setAttribute('style', 'background-color:blue; height:100px');
            blockToRender.appendChild(element);
        }

        // Bloco Inscrever
        if (blockName === 'inscrever') {
            blockToRender.setAttribute("class", "block " + blockName);

            element = document.createElement('h2');
            element.setAttribute("class", 'pt');
            element.innerHTML = 'Inscrever';
            blockToRender.appendChild(element);

            element = document.createElement('h2');
            element.setAttribute("class", 'en');
            element.innerHTML = 'Subscribe';
            blockToRender.appendChild(element);

            element = document.createElement('div');
            element.setAttribute('style', 'background-color:yellow; height:100px');
            blockToRender.appendChild(element);
        }

        // OUTPUT
        return blockToRender;
    }

    if (page === 'index') {

        construct('maintenance');
        document.getElementById('main-grid-left-side').appendChild(blockToRender);

        document.getElementById('elementocomid').style.outline = '1px solid blue';


        
        construct('welcome');
        document.getElementById('main-grid-left-side').appendChild(blockToRender);

        construct('this-edition-list');
        document.getElementById('main-grid-right-side').appendChild(blockToRender);
        
    }
    if (page === 'mais-info') {
        construct('visita-guiada');
        document.getElementById('main-grid-left-side').appendChild(blockToRender);
        // append to what side

        // repeat this until page is done
    }
    if (page === 'ed-anteriores') {
        construct('edicao24');
        document.getElementById('main-grid-left-side').appendChild(blockToRender);
    }
    if (page === 'inscrever') {
        construct('inscrever');
        document.getElementById('main-grid-left-side').appendChild(blockToRender);
    }
    // if to each page (screen possibility)

    // Check Lang
    changeLang(true);
}

bordersMainMenu();
function bordersMainMenu() {

    // Reset Color
    for (let i = 0; i < 4; i++) {
        if (mobile) {
            document.getElementById('main-menu-option' + (i + 1)).style.backgroundColor = 'var(--color-main-primary)';
            document.getElementById('main-menu-option' + (i + 1)).style.borderRight = 'var(--borderMainMenu)';
        } else {
            document.getElementById('main-menu-option' + (i + 1)).style.borderBottom = 'var(--borderMainMenu)';
        }
    }

    // Set Color Based RunningState (page)

    if (mobile) {

        if (RunningState) {
            // On Page Different than index
            if (RunningState == '#mais-info') {
                document.getElementById('main-menu-option2').style.backgroundColor = 'var(--color-main-primary-hover)';
                document.getElementById('main-menu-option2').style.borderRight = 'var(--borderMainMenuBright)';
            } else if (RunningState == '#edicoes-anteriores') {
                document.getElementById('main-menu-option3').style.backgroundColor = 'var(--color-main-primary-hover)';
                document.getElementById('main-menu-option3').style.borderRight = 'var(--borderMainMenuBright)';
            } else if (RunningState == '#inscrever') {
                document.getElementById('main-menu-option4').style.backgroundColor = 'var(--color-main-primary-hover)';
                document.getElementById('main-menu-option4').style.borderRight = 'var(--borderMainMenuBright)';
            }
            
        }

    } else { // Desktop Environment

        if (RunningState) {
            // On Page Different than index
            if (RunningState == '#mais-info') {
                document.getElementById('main-menu-option2').style.borderBottom = 'var(--borderMainMenuBright)';
            } else if (RunningState == '#edicoes-anteriores') {
                document.getElementById('main-menu-option3').style.borderBottom = 'var(--borderMainMenuBright)';
            } else if (RunningState == '#inscrever') {
                document.getElementById('main-menu-option4').style.borderBottom = 'var(--borderMainMenuBright)';
            }

        } else {
            document.getElementById('main-menu-option1').style.borderBottom = 'var(--borderMainMenuBright)';
        }

    }

}