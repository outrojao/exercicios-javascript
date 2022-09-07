const tarefas = [
    {
        completed: true
    },
    {
        completed: true
    },
    {
        completed: false
    }
]

const tarefasCompleted = tarefas.filter(tarefa => tarefa.completed)
if(tarefasCompleted.length >= 2){
    console.log('Parabens vc ganhou um trofeu')
}