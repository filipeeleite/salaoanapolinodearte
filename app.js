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
    console.log(':: >< clickMainMenu(' + option + ')');

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
        renderPage(option);

        // :::: State of the application
        document.location.hash = '';

    }
    if (option == 'mais-info') {
        renderPage(option);

        // :::: State of the application
        document.location.hash = 'mais-info';
        
    }
    if (option == 'ed-anteriores') {
        renderPage(option);

        document.location.hash = 'edicoes-anteriores';
        
    }
    if (option == 'inscrever') {
        renderPage(option);

        document.location.hash = 'inscrever';

    }

    RunningState = location.hash;

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


// Read State the page and Run
if (RunningState == '') {
    renderPage('index');
} else if (RunningState === '#mais-info') {
    renderPage('mais-info');
} else if (RunningState === '#edicoes-anteriores') {
    renderPage('ed-anteriores');
} else if(RunningState === '#inscrever') {
    renderPage('inscrever');
}

// Last things to do
var headerHeight;
var footerHeight;
function setMinHeightMain() {
    headerHeight = document.getElementsByTagName('header')[0].clientHeight;
    footerHeight = document.getElementsByTagName('footer')[0].clientHeight;
    mainMinHeight = window.innerHeight - headerHeight - footerHeight;

    // Obs: Border on element.clientHeight
    // Obs: Does not measured !!
    setCssVariable('--mainMinHeight', mainMinHeight + "px");
}
// setMinHeightMain();
setTimeout(function () { setMinHeightMain() }, 1000) ;