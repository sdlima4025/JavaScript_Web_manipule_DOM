// Criação do Botão deletar tarrefa

const BotaoDeleta = () => {
    const botaoDeleta = document.createElement('button'); 
    
    botaoDeleta.innerText = 'delete';
    botaoDeleta.addEventListener('click', deletarTarefa);
    

    return botaoDeleta;
}
// Ação de deletar
const deletarTarefa  = (evento) => {
    const botaoDeleta = evento.target;
    const tarefaCompleta = botaoDeleta.parentElement;
    
    tarefaCompleta.remove();

    return botaoDeleta;
}

export default BotaoDeleta;