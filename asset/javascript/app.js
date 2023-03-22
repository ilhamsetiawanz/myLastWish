const form  = document.querySelector('form');
const chatBot = document.getElementById('chatItem');

form.addEventListener('submit', (event) => {
    event.preventDefault();
    add();
});

function add(){

    const formInput = document.getElementById('formInput').value.toLowerCase();

    let message = {
        userInput : formInput
    }

    chatBot.innerHTML="";

    if (formInput.includes('hallo')){
        greetings();
    } else if (formInput.includes('/help')){
        helpMe();
    } else if(formInput.includes('buatkan saya puisi')){
        myPoem();
    }

    let messages  = JSON.parse(localStorage.getItem('messages')) || []

    messages.push(message);
    localStorage.setItem('messages', JSON.stringify(messages));
};

function greetings(){

    let chatMe = document.createElement('div');
    chatMe.classList.add('chat_me');
    chatMe.innerHTML=`
    <p>Hallo Selamat Datang Perkenalkan Saya Beebot</p>
    <p>Silahkan Ketikan /help untuk melihat daftar bantuan</p>
    <img src="/asset/img/bebot.gif" alt="">
    `;

    chatBot.appendChild(chatMe);
}

function helpMe(){

    let chatMe = document.createElement('div');
    chatMe.classList.add('chat_me');
    chatMe.innerHTML=`
    <h2>Pusat Bantuan Beebot</h2>
    <ul>
    <li>Untuk Meminta Puisi anda dapat menuliskan 'buatkan saya puisi'</li>
    <li>Untuk Ucapan Selamat Ulang Tahun anda dapat menuliskan 'hari ini adalah ulang tahun saya'</li>
    <li>Untuk Video Ulang Tahun  anda dapat menuliskan 'video spesial untuk saya'</li>
    </ul>
    `;

    chatBot.appendChild(chatMe);
}

function myPoem(){

    let chatMe = document.createElement('div');
    chatMe.classList.add('chat_me');
    chatMe.innerHTML =`
    
    `;
}

document.addEventListener('DOMContentLoaded', add);