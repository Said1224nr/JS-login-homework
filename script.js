let ID = document.querySelector('.ID');
let password = document.querySelector('.parol');
let btn = document.querySelector('button');
let errors = document.querySelector('p');

let Mars = {
    MoodmeID: 123456,
    passwords: 78900,
    navigation: './Mars.html'
};

btn.addEventListener('click', () => {
    if (ID.value == Mars.MoodmeID && password.value == Mars.passwords) {
        window.location.href = Mars.navigation;
    } else {
        errors.innerHTML = 'ID yoki parol xato !';
    }
});