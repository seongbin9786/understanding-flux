import { TodoActionTypes } from "./TodoActionTypes";
import { TodoDispatcher } from "./TodoDispatcher";

export const TodoActions = {
  addTodo: (text: string) => {
    TodoDispatcher.dispatch({
      type: TodoActionTypes.ADD_TODO,
      text,
    });
  },
};
