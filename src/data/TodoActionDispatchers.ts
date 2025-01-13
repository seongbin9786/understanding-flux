import { TodoActionTypeConstants } from "./TodoActionTypeConstants";
import { TodoDispatcher } from "./TodoDispatcher";

export const TodoActionDispatchers = {
  addTodo: (text: string) => {
    TodoDispatcher.dispatch({
      type: TodoActionTypeConstants.ADD_TODO,
      text,
    });
  },
};
