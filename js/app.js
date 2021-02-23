function readMoreDisplay() {

    let qtdeNodes = document.getElementsByClassName('read-more').length

    for (let i = 0; i < qtdeNodes; i++) {
        document.getElementsByClassName('read-more')[i].style.display = 'block';
    }

    document.getElementsByClassName('read-more-button')[0].style.display = 'none';

}