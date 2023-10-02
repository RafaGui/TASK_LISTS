confirm('Detalhes a ajustar: Corrigir bug ao deletar tarefa e limpar os campos apos a adição de nova tarefa')

var buttonAdd = document.querySelector('.bttAdd');

/* CRIAR FUNÇÃO QUE CAPTURE OS DADOS DO TITULO E OS INCLUA NOS COMPOS CRIADOS ANTERIORMENTE */

var localTask = document.querySelector('.localTask');
buttonAdd.addEventListener('click', () => {

    /* CRIAÇÃO DE ELEMENTO TAREFA */
    var container = document.createElement('div');
    container.className = "TaskView";
    var divTitulo = document.createElement('div');
    divTitulo.className = "title";
    var divDescricao = document.createElement('div');
    divDescricao.className = "desc";
    var textoTarefaA = document.createElement('a');
    textoTarefaA.className = "RemTs";
    textoTarefaA.innerHTML = "Concluir Tarefa <i class='bx bx-check'></i>";
    var detalhes = document.createElement('details');
    var valorDetalhes = document.createElement('p');
    valorDetalhes.innerText = new Date;
    detalhes.appendChild(valorDetalhes);
    
    var tituloContainer = document.createElement('h3');
    var descicaoContainer = document.createElement('p');

    // CAPUTRA DOS VALORES DOS CAMPOS
    let Titulo = document.querySelector('#titleTask').value;
    let Descricao = document.querySelector('#descTask').value;
    tituloContainer.textContent = Titulo;
    descicaoContainer.textContent = Descricao;

    // MONTAGEM DOS ELEMENTOS
    divTitulo.appendChild(tituloContainer);
    divDescricao.appendChild(descicaoContainer);

    container.appendChild(divTitulo);
    container.appendChild(divDescricao);
    divDescricao.appendChild(textoTarefaA);
    container.appendChild(detalhes);
    localTask.appendChild(container);

    var buttonConc = document.querySelector('.RemTs');
    buttonConc.addEventListener('click', () => {
        container.remove();
    })
});


var buttonRem = document.querySelector('.RemTask');
buttonRem.addEventListener('click', () => {
    localTask.innerHTML = "";
})
