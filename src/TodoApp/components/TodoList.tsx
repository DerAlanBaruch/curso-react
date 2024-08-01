import { Todo, TodoActions } from "../types/Todo";
import { TodoItem } from "./TodoItem";

export const TodoList = ({
  todos,
  onActionTodo,
}: {
  todos: Todo[];
  onActionTodo: (action: TodoActions, payload: Todo) => void;
}) => {
  return (
    <ul className="list-group">
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} onActionTodo={onActionTodo} />
      ))}
    </ul>
  );
};
