import { useEffect, useReducer } from "react";
import { todoReducer } from "./todoReducer";
import { Todo, TodoActions } from "../types/Todo";

export const useTodos = () => {
  const initTodos = () => {
    const localTodos = localStorage.getItem("todos");
    return localTodos ? JSON.parse(localTodos) : [];
  };
  const [todos, dispatchTodo] = useReducer(todoReducer, [], initTodos);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const onActionTodo = (action: TodoActions, payload: Todo) => {
    dispatchTodo({
      type: action,
      payload,
    });
  };

  return {
    todos,
    onActionTodo,
  };
};
