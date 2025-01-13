import { TodoActionTypeConstants } from "./TodoActionTypeConstants";

export type TodoActionTypes = {
  type: typeof TodoActionTypeConstants.ADD_TODO;
  text: string;
};
