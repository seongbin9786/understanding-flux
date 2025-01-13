import { TodoActionTypeConstants } from "./TodoActionTypeConstants";
import { TodoDispatcher } from "./TodoDispatcher";

export const TodoActionCreators = {
  addTodo: (text: string) => {
    TodoDispatcher.dispatch({
      type: TodoActionTypeConstants.ADD_TODO,
      text,
    });
  },
};
