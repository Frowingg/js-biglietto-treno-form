
const generateButton = document.getElementById('generate-button')
generateButton.addEventListener('click',
    function() {
        const userName = document.getElementById('user-name').value;
        console.log(userName)
        const userKm = document.getElementById('user-km').value;
        console.log(userKm)
        const userAge = document.getElementById('user-age').value;
        console.log(userAge)

        price = (0.21 * userKm).toFixed(2)
        console.log(price);

        let offer = 'Biglietto Standard'

        if (userAge === 'minorenne') {
            price -= (price/100*20).toFixed(2);
            offer = 'Biglietto Scontato del 20%';

        }
        else if (userAge === 'over-65') {
            price -= (price/100*40).toFixed(2);
            offer = 'Biglietto Scontato del 40%';

        }
        console.log(price);
        console.log(offer)

        document.getElementById('ticket-name').innerHTML = userName
        document.getElementById('ticket-offer').innerHTML = offer
        document.getElementById('ticket-vagon').innerHTML = Math.floor((Math.random() * 9) + 1);
        document.getElementById('ticket-cp').innerHTML = Math.floor((Math.random() * 9999) + 1);
        document.getElementById('ticket-price').innerHTML = `${price} €`
    }
)
const deledeButton = document.getElementById('delede-button')
deledeButton.addEventListener('click',
    function() {       
        document.getElementById('user-name').value = ' ';
        document.getElementById('user-km').value = ' ';
        document.getElementById('user-age').value = ' ';
    }
)
