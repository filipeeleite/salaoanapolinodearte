// 2) Actions, changes on the screen, how app will react
// Prepare html to receive what to be shown on screen

// State of the Menu
var MenuOpened = false;
var mainMenuHeight = '100px';
setCssVariable('--mainMenuHeight', mainMenuHeight);

// Set Css Variables to <body>
function setCssVariable(name, value) {
    document.body.style.setProperty(name, value);
}

function clickMainMenu(option) {
    consoleLog(':: >< clickMainMenu(' + option + ')');

    // Open Menu (Mobile)
    if (option == 'open-close') {
        if (MenuOpened) {
            document.getElementsByClassName('menu-bar')[0].classList.remove("menu-opened");
            mainMenuHeight = '100px';
            setCssVariable('--mainMenuHeight', mainMenuHeight);
            MenuOpened = false;
        } else {
            document.getElementsByClassName('menu-bar')[0].classList.add("menu-opened");
            mainMenuHeight = '320px';
            setCssVariable('--mainMenuHeight', mainMenuHeight);
            MenuOpened = true;
        }
        return;
    }

    removeBlocks();
    // >>> SET CHANGE LANG () TO BE LAST FUNCTION WHEN CHANGING PAGE - TO REFRESH DISPLAY/NONE ON ELEMENTS

    // Conditionals, Action to What option Selected
    if (option == 'index') {
        whereToGo = '';
        router(whereToGo);
    }
    if (option == 'mais-info') {
        whereToGo = '#mais-info';
        router(whereToGo);
    }
    if (option == 'ed-anteriores') {
        whereToGo = '#edicoes-anteriores';
        router(whereToGo);
    }
    if (option == 'inscrever') {
        whereToGo = '#inscrever';
        router(whereToGo);

    }

    // Set the color Bar Menu
    bordersMainMenu();
}

// Checking Language Setting
if (localStorage.changeToEnglish === undefined) {
    //console.log("Setting changeToEnglish == true :: ->LocalStorage");
    localStorage.changeToEnglish = 'true';
}

changeLang(true);
function changeLang(appLoading) {

    qtdeTagsPT = document.getElementsByClassName("pt").length;
    qtdeTagsEN = document.getElementsByClassName("en").length;

    if (appLoading) {
        if (localStorage.changeToEnglish === 'true') {
            change('block', 'none');
        } else {
            change('none', 'block');
        }
        return;
    }

    if (localStorage.changeToEnglish == 'true') {
        // set page to english and the set the next value
        change('none', 'block');
        localStorage.changeToEnglish = 'false';
        //console.log(":: localStorage.changeToEnglish = false");

    } else {
        // set page to portuguese and set the next value
        change('block', 'none');
        localStorage.changeToEnglish = 'true';
        //console.log(":: localStorage.changeToEnglish = true");
    }

    function change(pt, en) {

        for (let i = 0; i < qtdeTagsPT; i++) {
            //console.log(":: pt -> " + pt);
            document.getElementsByClassName("pt")[i].style.display = pt;
        }
        for (let i = 0; i < qtdeTagsEN; i++) {
            //console.log(":: en -> " + en);
            document.getElementsByClassName("en")[i].style.display = en;
        }
    }
}

// Route The App - Render the page and Set the Running State of the App
// RunningState = location.hash;
// RunningState == "#talpagina"
// Destination
// WhereToGo = RunningState;

router(whereToGo);
function router(whereToGo) {

    if (whereToGo == '') {
        renderPage('index');
        // :::: State of the application
        document.location.hash = '';

    } else if (whereToGo === '#mais-info') {
        renderPage('mais-info');
        // :::: State of the application
        document.location.hash = 'mais-info';

    } else if (whereToGo === '#edicoes-anteriores') {
        renderPage('ed-anteriores');
        // :::: State of the application
        document.location.hash = 'edicoes-anteriores';

    } else if (whereToGo === '#inscrever') {
        renderPage('inscrever');
        // :::: State of the application
        document.location.hash = 'inscrever';
    }
    // If Routed, RunningState will Change
    RunningState = location.hash;
    consoleLog("Routed")
}

// Function to set the Arrays of Object edicaoXX
// numeroEdicao -> 25
function setArraysRefPessoas(numeroEdicao) {

    // Pesquisa as pessoas
    QtdePessoas = pessoas.length;
    for (let i = 0; i < QtdePessoas; i++) {
        // Passando em cada pessoa

        QtdeTags = pessoas[i][2].length;
        for (let j = 0; j < QtdeTags; j++) {
            TagDaPessoa = pessoas[i][2][j];

            if (TagDaPessoa === 'selecionado' + numeroEdicao) {
                if (typeof(this['edicao' + numeroEdicao].refPessoas.artistasSelecionados) == 'string') {
                    // Sets to Array
                    this['edicao' + numeroEdicao].refPessoas.artistasSelecionados = [];
                }
                this['edicao' + numeroEdicao].refPessoas.artistasSelecionados.push(pessoas[i][1]);
                consoleLog('Pessoas[' + i + '] :: ' + pessoas[i][1])
            }
            
            if (TagDaPessoa === 'premiado' + numeroEdicao) {
                if (typeof(this['edicao' + numeroEdicao].refPessoas.artistasPremiados) == 'string') {
                    // Sets to Array
                    this['edicao' + numeroEdicao].refPessoas.artistasPremiados = [];
                }
                this['edicao' + numeroEdicao].refPessoas.artistasPremiados.push(pessoas[i][1]);
                consoleLog('Pessoas[' + i + '] :: ' + pessoas[i][1])
            }

            if (TagDaPessoa === 'artistaHomenageado' + numeroEdicao) {
                if (typeof(this['edicao' + numeroEdicao].refPessoas.artistasHomenageados) == 'string') {
                    // Sets to Array
                    this['edicao' + numeroEdicao].refPessoas.artistasHomenageados = [];
                }
                this['edicao' + numeroEdicao].refPessoas.artistasHomenageados.push(pessoas[i][1]);
                consoleLog('Pessoas[' + i + '] :: ' + pessoas[i][1])
            }

            if (TagDaPessoa === 'premioFomentoProducaoAnapolina' + numeroEdicao) {
                if (typeof(this['edicao' + numeroEdicao].refPessoas.artistasPremioFomentoProdAnapolina) == 'string') {
                    // Sets to Array
                    this['edicao' + numeroEdicao].refPessoas.artistasPremioFomentoProdAnapolina = [];
                }
                this['edicao' + numeroEdicao].refPessoas.artistasPremioFomentoProdAnapolina.push(pessoas[i][1]);
                consoleLog('Pessoas[' + i + '] :: ' + pessoas[i][1])
            }

            if (TagDaPessoa === 'premioArtistaConvidado' + numeroEdicao) {
                if (typeof(this['edicao' + numeroEdicao].refPessoas.premioArtistaConvidado) == 'string') {
                    // Sets to Array
                    this['edicao' + numeroEdicao].refPessoas.premioArtistaConvidado = [];
                }
                this['edicao' + numeroEdicao].refPessoas.premioArtistaConvidado.push(pessoas[i][1]);
                consoleLog('Pessoas[' + i + '] :: ' + pessoas[i][1])
            }

            if (TagDaPessoa === 'comissaoSelecao' + numeroEdicao) {
                if (typeof(this['edicao' + numeroEdicao].refPessoas.comissaoSelecao) == 'string') {
                    // Sets to an Array
                    this['edicao' + numeroEdicao].refPessoas.comissaoSelecao = [];
                }
                this['edicao' + numeroEdicao].refPessoas.comissaoSelecao.push(pessoas[i][1]);
                consoleLog('Pessoas[' + i + '] :: ' + pessoas[i][1])
            }

            if (TagDaPessoa === 'comissaoPremiacao' + numeroEdicao) {
                if (typeof(this['edicao' + numeroEdicao].refPessoas.comissaoPremiacao) == 'string') {
                    // Sets to Array
                    this['edicao' + numeroEdicao].refPessoas.comissaoPremiacao = [];
                }
                this['edicao' + numeroEdicao].refPessoas.comissaoPremiacao.push(pessoas[i][1]);
                consoleLog('Pessoas[' + i + '] :: ' + pessoas[i][1])
            }

            if (TagDaPessoa === 'curador' + numeroEdicao) {

                if (typeof(this['edicao' + numeroEdicao].refPessoas.curador) == 'string') {
                    // Sets to Array
                    this['edicao' + numeroEdicao].refPessoas.curador = [];
                }
                this['edicao' + numeroEdicao].refPessoas.curador.push(pessoas[i][1]);
                consoleLog('Pessoas[' + i + '] :: ' + pessoas[i][1])
            }

            if (TagDaPessoa === 'curadorPremiado' + numeroEdicao) {

                if (typeof(this['edicao' + numeroEdicao].refPessoas.curadorPremiado) == 'string') {
                    // Sets to Array
                    this['edicao' + numeroEdicao].refPessoas.curadorPremiado = [];
                }
                this['edicao' + numeroEdicao].refPessoas.curadorPremiado.push(pessoas[i][1]);
                consoleLog('Pessoas[' + i + '] :: ' + pessoas[i][1])
            }

            if (TagDaPessoa === 'expoPremioCuradoria' + numeroEdicao) {

                if (typeof(this['edicao' + numeroEdicao].refPessoas.artistasExposicaoCuradoria) == 'string') {
                    // Sets to Array
                    this['edicao' + numeroEdicao].refPessoas.artistasExposicaoCuradoria = [];
                }
                this['edicao' + numeroEdicao].refPessoas.artistasExposicaoCuradoria.push(pessoas[i][1]);
                consoleLog('Pessoas[' + i + '] :: ' + pessoas[i][1])
            }
        }
    }
}

// Last things to do
var headerHeight;
var footerHeight;
function setMinHeightMain() {
    headerHeight = document.getElementsByTagName('header')[0].clientHeight;
    footerHeight = document.getElementsByTagName('footer')[0].clientHeight;
    mainMinHeight = window.innerHeight - headerHeight - footerHeight;

    // Obs: Border on element.clientHeight does not measured!!
    setCssVariable('--mainMinHeight', mainMinHeight + "px");
}

// Clock Functions ( Functions that Repeats )

// Set opacity inline on the first img
//document.getElementById('slideshow-img_1').style.opacity = 1;
// Set variable to initialize Slideshow ( 4 will be 1 on counter )
var imgShowing = 4;


document.getElementById('slideshow-img_1').style.display = 'block';

var displayFirstImgSlideshow = function() {setTimeout(function() {animateSlideshowPanoramicas();}, 1)};
displayFirstImgSlideshow();

setInterval(function() {animateSlideshowPanoramicas();}, 8000);
function animateSlideshowPanoramicas() {
    clearTimeout(displayFirstImgSlideshow);

    // counter
    if (imgShowing === 4) {
        imgShowing = 1;
    } else {
        imgShowing = imgShowing + 1;
    }

    //document.getElementById('slideshow-img_' + imgShowing).style.display = 'block';
    
    // Reseting all
    for(let i = 1; i <= 4; i++) {
        document.getElementById('slideshow-img_' + i).style.opacity = 0;
    }

    // Set
    document.getElementById('slideshow-img_' + imgShowing).style.opacity = 1;
    console.log('Set : ' + imgShowing);
}

setMinHeightMain();
setStyleSheet();

//window.addEventListener("resize", refreshBody, false);

function refreshBody() {

    var setTimeout;
    if (setTimeout) {
        setTimeout(function() {
            setTimeout = false;
            setMinHeightMain();
            setStyleSheet();
        },66) 
    }

}