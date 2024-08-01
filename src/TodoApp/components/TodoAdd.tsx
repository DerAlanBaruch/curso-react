import { FormEvent } from "react";
import { Todo } from "../types/Todo";
import { useForm } from "../../HooksApp/hooks/useForm";

export const TodoAdd = ({ onNewTodo }: { onNewTodo: (todo: Todo) => void }) => {
  const { formState, handleInputChange, onResetForm } = useForm({
    todo: "",
  });
  const addNewTodo = (e: FormEvent) => {
    e.preventDefault();
    const { todo } = formState;
    if (todo.trim().length === 0) return;
    const newTodo: Todo = {
      id: new Date().getTime(),
      todo,
      done: false,
    };
    onNewTodo(newTodo);
    onResetForm();
  };
  return (
    <>
      <h3>Agregar tarea</h3>
      <hr />
      <form onSubmit={addNewTodo}>
      <input
        type="text"
        className="form-control mb-3"
        placeholder="Nueva tarea"
        name="todo"
        value={formState.todo}
        onChange={handleInputChange}
      />
      <div className="d-grid">
        <button className="btn btn-primary" type="submit">
          Agregar
        </button>
      </div>
    </form>
    </>
    
  );
};
