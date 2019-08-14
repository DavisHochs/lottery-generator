

function getRandomLottoNumbers() {
    const randomLottoNumbers = [];

    for (let i= 0; i < 6; i++) {
        let pick = Math.floor(Math.random() * 55);
        randomLottoNumbers.push(pick);
    }
}

