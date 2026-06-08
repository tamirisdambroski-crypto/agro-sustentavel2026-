function checkAnswer(btn, isCorrect, message, questionNumber) {
    // Localiza o bloco de opções onde o usuário clicou
    const container = btn.parentElement;
    const buttons = container.querySelectorAll('.quiz-btn');
    
    // Identifica qual caixa de feedback deve receber a resposta baseado no número passado
    const feedbackDiv = document.getElementById(`feedback-${questionNumber}`);

    // Desativa todos os botões daquela pergunta específica para evitar cliques repetidos
    buttons.forEach(b => {
        b.disabled = true;
        b.style.cursor = "default";
    });

    // Aplica as cores de feedback corretas (Verde ou Vermelho) e insere o texto explicativo
    if (isCorrect) {
        btn.classList.add('correct');
        feedbackDiv.style.color = '#2E7D32';
        feedbackDiv.innerHTML = '<i class="fa-solid fa-circle-check"></i> ' + message;
    } else {
        btn.classList.add('wrong');
        feedbackDiv.style.color = '#C62828';
        feedbackDiv.innerHTML = '<i class="fa-solid fa-circle-xmark"></i> ' + message;
    }
}
