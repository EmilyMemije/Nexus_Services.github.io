// Generar un número aleatorio
function generateRandomNumber() {
    // Ajusta el rango máximo según tus necesidades
    const max = 1000000;
    return Math.floor(Math.random() * max);
    }
    
  // Obtener el elemento donde se mostrará el número
    const transactionNumberElement = document.getElementById('transaction-number');
    
  // Generar y mostrar el número
    transactionNumberElement.textContent = generateRandomNumber();