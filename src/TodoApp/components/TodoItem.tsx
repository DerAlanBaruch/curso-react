import { Todo, TodoActions } from "../types/Todo";

export const TodoItem = ({
  todo,
  onActionTodo,
}: {
  todo: Todo;
  onActionTodo: (action: TodoActions, payload: Todo) => void;
}) => {
  const onAction = (action: TodoActions) => {
    onActionTodo(action, todo);
  };

  return (
    <li className="list-group-item d-flex justify-content-between align-items-center">
      <input
        type="checkbox"
        className="form-check-input col-auto ms-1 me-2"
        defaultChecked={todo.done}
        onChange={() => onAction(TodoActions.TOGGLE)}
      />
      <span
        className={`col ${todo.done ? "text-decoration-line-through" : ""}`}
      >
        {todo.todo}
      </span>
      <button
        className="btn btn-danger col-auto"
        onClick={() => onAction(TodoActions.DELETE)}
      >
        X
      </button>
    </li>
  );
};
