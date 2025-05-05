// Função para adicionar um valor no visor
function adicionar(valor) {
    const display = document.getElementById('display');
    display.value += valor; // Adiciona o valor no final do texto atual
  }
  
  // Função para limpar o visor
  function limpar() {
    document.getElementById('display').value = '';
  }
  
  // Função para calcular o resultado
  function calcular() {
    try {
      const display = document.getElementById('display');
      // Usa a função eval para calcular a expressão matemática digitada
      display.value = eval(display.value);
    } catch (e) {
      alert('Expressão inválida!');
    }
  }
  
  