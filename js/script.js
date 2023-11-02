
function updateClock() {
    const now = new Date();
    const targetDate = new Date('2023-12-31 23:59:59'); // Altere para a data alvo desejada.
    
    const timeRemaining = targetDate - now;
    
    const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);
    
    document.getElementById('days').innerHTML = String(days).padStart(2, '0');
    document.getElementById('hours').innerHTML = String(hours).padStart(2, '0');
    document.getElementById('minutes').innerHTML = String(minutes).padStart(2, '0');
    document.getElementById('seconds').innerHTML = String(seconds).padStart(2, '0');
}

updateClock(); // Chame a função para exibir o relógio imediatamente.

setInterval(updateClock, 1000); // Atualize o relógio a cada segundo.
