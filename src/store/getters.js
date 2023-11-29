export const doneTodos = state => state.todos.filter(todo => todo.done);

export const doneTodosCount = () => doneTodos.length;

export const getTodoById = state => id => state.todo.find(todo => todo.id === id)