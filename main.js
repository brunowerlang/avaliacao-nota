const numerosBtn = document.querySelectorAll('.numeroBtn');
const botaoSubmit = document.querySelector('.btn');
const card = document.querySelector('.card');

let notaSelecionada = null;

numerosBtn.forEach(numeroBtn => {
  numeroBtn.addEventListener('click', () => {
    // Remove a classe 'selected' de todos os botões
    numerosBtn.forEach(btn => {
      btn.classList.remove('selected');
    });

    // Adiciona a classe 'selected' ao botão clicado
    numeroBtn.classList.add('selected');

    notaSelecionada = numeroBtn.textContent;
  });
});

botaoSubmit.addEventListener('click', () => {
  if (notaSelecionada) {
    card.innerHTML = `
      <div class="mensagem">
        <img src="/images/illustration-thank-you.svg">
        <p>You selected <mark>${notaSelecionada}</mark> out of 5</p>
        <h2>Thank you!</h2>
        <h3>We appreciate you taking the time to give a rating. If you ever need more support, don't hesitate to get in touch! </h3>
      </div>
    `;
  }
});
