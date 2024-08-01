import { Todo, TodoActions } from "./TodoApp/types/Todo";
import { TodoList } from "./TodoApp/components/TodoList";
import { TodoAdd } from "./TodoApp/components/TodoAdd";
import { useTodos } from "./TodoApp/hooks/useTodos";

export const TodoApp = () => {
  const { todos, onActionTodo } = useTodos();

  const onNewTodo = (todo: Todo) => onActionTodo(TodoActions.ADD, todo);

  return (
    <div className="container my-3">
      <h1>Todo App</h1>
      <hr />
      <div className="row">
        <div className="col-md-7 col-sm-12">
          {todos.length == 0 ? (
            <p>No hay tareas</p>
          ) : (
            <p>
              Total de tareas: {todos.length}, tareas completadas:{" "}
              {todos.filter((todo) => todo.done).length}
            </p>
          )}
          <TodoList todos={todos} onActionTodo={onActionTodo} />
        </div>
        <div className="col-md-5 col-sm-12">
          <TodoAdd onNewTodo={onNewTodo} />
        </div>
      </div>
    </div>
  );
};
