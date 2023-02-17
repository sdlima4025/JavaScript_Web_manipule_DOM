// Criando componente Buttom com createElement
const BotaoConclui = () => {
    const botaoConclui = document.createElement('button');
 
     // Adicionando classe css
     botaoConclui.classList.add('check-button');
 
      // insserindo texto com onnerText
      botaoConclui.innerText = 'conclude';
      // Adicionando evento com addEventListener
     botaoConclui.addEventListener('click', concluirTarefa);
 
     return botaoConclui;
 
 
 } 
 // Botão concluir tarefa
 const concluirTarefa = (evento) => {
     const botaoConclui = evento.target;
 
     const tarefaCompleta = botaoConclui.parentElement;
 
     tarefaCompleta.classList.toggle('done');
 }

 export default BotaoConclui;