
const generateButton = document.getElementById('generate-button')
generateButton.addEventListener('click',
    function() {
        const userName = document.getElementById('user-name').value;
        console.log(userName)
        const userKm = document.getElementById('user-km').value;
        console.log(userKm)
        const userAge = document.getElementById('user-age').value;
        console.log(userAge)
    }
)