
const generateButton = document.getElementById('generate-button')
generateButton.addEventListener('click',
    function() {
        const userName = document.getElementById('user-name').value;
        console.log(userName)
        const userKm = document.getElementById('user-km').value;
        console.log(userKm)
        const userAge = document.getElementById('user-age').value;
        console.log(userAge)

        price = 0.21 * userKm
        if (userAge === 'minorenne') {
            price -= (price/100*20);
        }
        else if (userAge === 'over 65') {
            price -= (price/100*40);
        }
        console.log(price);
    }
)