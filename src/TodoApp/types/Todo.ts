export type Todo = {
  id: number;
  todo: string;
  done: boolean;
};

export enum TodoActions {
  ADD = "[TODO] add",
  DELETE = "[TODO] delete",
  TOGGLE = "[TODO] toggle",
}
