import { TodoActionTypeConstants } from "./TodoActionTypeConstants";
import { TodoDispatcher } from "./TodoDispatcher";

export const TodoActionDispatchers = {
  addTodo: (text: string) => {
    TodoDispatcher.dispatch({
      type: TodoActionTypeConstants.ADD_TODO,
      text,
    });
  },
  deleteTodo: (id: string) => {
    TodoDispatcher.dispatch({
      type: TodoActionTypeConstants.DELETE_TODO,
      id,
    });
  },
  toggleTodo: (id: string) => {
    TodoDispatcher.dispatch({
      type: TodoActionTypeConstants.TOGGLE_TODO,
      id,
    });
  },
  updateDraft: (text: string) => {
    TodoDispatcher.dispatch({
      type: TodoActionTypeConstants.UPDATE_DRAFT,
      text,
    });
  },
};
