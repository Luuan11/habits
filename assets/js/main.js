const form = document.querySelector('#form-habits');
const nlwSetup = new NLWSetup(form);
const button = document.querySelector('.btn-header');

button.addEventListener('click', addHabit);
form.addEventListener('change', saveHabit);

function addHabit(){
    const today = new Date().toLocaleDateString('pt-br').slice(0, -5);
    const dayExists = nlwSetup.dayExists(today)

    if(dayExists){
        alert('Seu dia já está cadastrado abaixo 💜');
        return
    }

    nlwSetup.addDay(today)
}

function saveHabit(){
    localStorage.setItem('NLWSetup@habits', JSON.stringify(nlwSetup.data));
}

const data = JSON.parse(localStorage.getItem('NLWSetup@habits')) || {}
nlwSetup.setData(data)
nlwSetup.load()