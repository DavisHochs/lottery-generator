

function getRandomLottoNumbers() {
    const randomLottoNumbers = [];

    for (let i= 0; i < 6; i++) {
        let pick = Math.floor(Math.random() * 55);
        randomLottoNumbers.push(pick);
    }
}

let numberActual =getRandomLottoNumbers();


$('#random-button').on('click',function getRandomLottoNumbers() {
    let randomLottoNumbers =[];

    for (let i= 0; i < 6; i++) {
        let pick = Math.floor(Math.random() * 55);
        randomLottoNumbers.push(pick);
    }
    
    $('#random-number').append($(`<div> ${randomLottoNumbers.join(' ')}</div>`))


    

});


