
const generateButton = document.getElementById('generate-button');
generateButton.addEventListener('click',
    function() {
        const userName = document.getElementById('user-name').value;
        const userKm = document.getElementById('user-km').value;
        const userAge = document.getElementById('user-age').value;

        price = (0.21 * userKm);

        let offer = 'Biglietto Standard';

        if (userAge === 'minorenne') {
            price -= (price/100*20);
            offer = 'Biglietto Scontato del 20%';

        }
        else if (userAge === 'over') {
            price -= (price/100*40);
            offer = 'Biglietto Scontato del 40%';

        }

        document.getElementById('ticket-name').innerHTML    = userName;
        document.getElementById('ticket-offer').innerHTML   = offer;
        document.getElementById('ticket-vagon').innerHTML   = Math.floor((Math.random() * 9) + 1);
        document.getElementById('ticket-cp').innerHTML      = Math.floor((Math.random() * 9999) + 1);
        document.getElementById('ticket-price').innerHTML   = `${price.toFixed(2)} €`;

        document.getElementById('user-name').value = '';
        document.getElementById('user-km').value = '';
        document.getElementById('user-age').value = '';

    }
)
const deledeButton = document.getElementById('delede-button')
deledeButton.addEventListener('click',
    function() {       
        document.getElementById('user-name').value = '';
        document.getElementById('user-km').value = '';
        document.getElementById('user-age').value = '';
    }
)
