// Define os possíveis status de uma tarefa
export const TaskStatus = {
    PEDING: "Pending",       // Tarefa pendente
    COMPLETED: "Completed", // Tarefa concluída
}

// Representa uma tarefa
export class Task {
    constructor(id, description, tag, status = TaskStatus.PEDING){
        this.id = id;                   // Identificador único da tarefa
        this.description = description  // Descrição da tarefa
        this.tag = tag                  // Categoria ou etiqueta da tarefa
        this.status = status;           // Status atual da tarefa
    }

    // Retorna o ID da tarefa
    getId = () => {
        return this.id
    }

    // Retorna a descrição da tarefa
    getDescription = () => {
        return this.description;
    }

    // Altera a descrição da tarefa
    setDescription = (description) => {
        this.description = description
    }

    // Retorna a tag da tarefa
    getTag = () => {
        return this.tag
    }

    // Altera a tag da tarefa
    setTag = (tag) => {
        this.tag = tag
    }

    // Retorna o status da tarefa
    getStatus = () => {
        return this.status
    }

    // Altera o status da tarefa
    setStatus = (status) => {
        this.status = status
    }

    // Retorna uma representação da tarefa em texto
    toString = () => {
        return `Task ${this.id}: ${this.description} | Tag: ${this.tag} | Status: ${this.status}`
    }
}