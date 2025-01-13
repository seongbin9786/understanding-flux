import { TodoActionTypeConstants } from "./TodoActionTypeConstants";

export type TodoActionTypes =
  | {
      type: typeof TodoActionTypeConstants.ADD_TODO;
      text: string;
    }
  | {
      type: typeof TodoActionTypeConstants.DELETE_TODO;
      id: string;
    }
  | {
      type: typeof TodoActionTypeConstants.TOGGLE_TODO;
      id: string;
    };
