import { Action } from "../types/Action";
import { Todo, TodoActions } from "../types/Todo";

export const todoReducer = (state: Todo[], action: Action<TodoActions, Todo>): Todo[] => {
  switch (action.type) {
    case TodoActions.ADD:
      return [...state, action.payload];
    case TodoActions.DELETE:
      return state.filter((todo) => todo.id !== action.payload.id);
    case TodoActions.TOGGLE:
      return state.map((todo) => {
        if (todo.id === action.payload.id) {
          return {
            ...todo,
            done: !todo.done,
          };
        }
        return todo;
      });

    default:
      return state;
  }
};
