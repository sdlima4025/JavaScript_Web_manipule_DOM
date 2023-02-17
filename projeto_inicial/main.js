/*Função de Invocação Imediata como estrategia de 
encapssulamento para que o usuario não tenha acesso a camada de negocio do codigo */
    import BotaoConclui from "./componentes/concluiTarefa.js";
    import BotaoDeleta from "./componentes/deletaTarefa.js";
    
    const criarTarefa = (evento) => {

    evento.preventDefault();

     // acessando o documento
    const lista = document.querySelector('[data-list]');
    const input = document.querySelector('[data-form-input]');
    const valor = input.value;

    // criando uma tamplete string
    const tarefa = document.createElement('li');
    tarefa.classList.add('task');
    const conteudo = `<p class="content">${valor}</p>`;

    // insserindo elemento
    tarefa.innerHTML = conteudo;

    tarefa.appendChild(BotaoConclui());
    tarefa.appendChild(BotaoDeleta());
    lista.appendChild(tarefa);
    input.value = " ";
  
}

// Acesando o Elemento no DOM com querySelector
const novaTarefa = document.querySelector('[data-form-button]');
// Adicionando evento com addEventListener
novaTarefa.addEventListener('click', criarTarefa);






