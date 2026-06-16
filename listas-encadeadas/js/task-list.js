import LinkedList from "./linked_list.js";
import { Task, TaskStatus } from "./task.js";

// Representa uma lista de tarefas
export default class TaskList {
    constructor(){
        this.tasks = new LinkedList(); // Cria uma lista encadeada para armazenar as tarefas
    }

    // Retorna todas as tarefas em formato de array
    getTasks = () => {
        return this.tasks.toArray();
    }

    // Adiciona uma tarefa na lista
    addTask = (task, index = null) => {
        // Se nenhum índice for informado, adiciona no final
        if(index === null){
            this.tasks.addAtEnd(task);
            return;
        }

        // Se a posição informada não existir, não adiciona
        if(!this.tasks.get(index)){
            return;
        }

        // Adiciona a tarefa na posição informada
        this.tasks.addAtPosition(index, task);
    }

    // Busca tarefas pela tag
    getTasksByTag = (tag) => {
        let current = this.tasks.head; // Começa pelo primeiro nó da lista
        const tasksByTag = [] // Array para guardar as tarefas encontradas

        // Percorre todos os nós da lista
        while (current){
            // Verifica se a tag da tarefa é igual à tag procurada
            if(current.value.tag === tag){
                tasksByTag.push(current.value);
            }

            current = current.next
        }

        return tasksByTag;
    }


    // Busca uma tarefa pelo ID
    getTaskById = (id) => {
        let current = this.tasks.head; // Começa pelo primeiro nó da lista

        // Percorre todos os nós da lista
        while (current){
            // Verifica se o ID da tarefa é igual ao ID procurado
            if(current.value.id === id){
                return current.value;
            }

            current = current.next;
        }

        return null; // Retorna null caso não encontre a tarefa
    };

    // Remove uma tarefa pelo ID
    removeTaskById = (id) => {
        const taskItem = this.getTaskById(id); // Busca a tarefa pelo ID

        // Se a tarefa existir, remove da lista
        if(taskItem){
            return this.tasks.remove(taskItem);
        }

        return null;
    }

    // Marca uma tarefa como concluída
    setTaskTocompleted = (id) => {
        const taskItem = this.getTaskById(id); // Busca a tarefa pelo ID

        // Se a tarefa existir, altera o status para concluída
        if(taskItem){
            taskItem.setStatus(TaskStatus.COMPLETED);
        }

        return taskItem
    }

    // Atualiza os dados de uma tarefa pelo ID
    setTaskDataById = (id, task) => {
        const taskItem = this.getTaskById(id); // Busca a tarefa pelo ID

        // Se a tarefa existir, atualiza seus dados
        if(taskItem){
            taskItem.setDescription(task.getDescription());
            taskItem.setStatus(task.getStatus());
            taskItem.setTag(task.getTag())
            return
        }

        return taskItem
    }

    // Move uma tarefa para outra posição da lista
    move = (id, targetIndex) => {
        // Verifica se a posição de destino é inválida
        if(targetIndex < 0 || targetIndex > this.tasks.getSize()){
            return null;
        }

        const taskItem = this.getTaskById(id); // Busca a tarefa pelo ID
        const sourceIdex = this.tasks.indexOf(taskItem); // Busca a posição atual da tarefa

        // Se a tarefa existir e a posição atual for diferente da nova posição
        if(taskItem && sourceIdex  != targetIndex){
            this.tasks.removeAtPosition(sourceIdex); // Remove da posição atual
            this.tasks.addAtPosition(targetIndex, taskItem); // Adiciona na nova posição
            return 
        }

        return null;
    }
}