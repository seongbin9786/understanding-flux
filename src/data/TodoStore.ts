import { ReduceStore } from "flux/utils";
import { TodoDispatcher } from "./TodoDispatcher";
import * as Immutable from "immutable";
import { TodoActionTypeConstants } from "./TodoActionTypeConstants";
import { TodoActionTypes } from "./TodoActionTypes";
import { createAutoIncrementId } from "../utils/createAutoIncrementId";
import { Todo } from "./Todo";

export type TodoStoreState = Immutable.OrderedMap<
  string,
  ReturnType<typeof Todo>
>;

class TodoStore extends ReduceStore<TodoStoreState, TodoActionTypes> {
  constructor() {
    super(TodoDispatcher);
  }

  getInitialState() {
    return Immutable.OrderedMap<string, ReturnType<typeof Todo>>();
  }

  reduce(state: TodoStoreState, action: TodoActionTypes) {
    switch (action.type) {
      case TodoActionTypeConstants.ADD_TODO: {
        if (!action.text) {
          return state;
        }

        const id = createAutoIncrementId();
        return state.set(
          id,
          new Todo({
            id,
            text: action.text,
            complete: false,
          }),
        );
      }

      case TodoActionTypeConstants.DELETE_TODO:
        state.delete(action.id);
        return state;

      default:
        return state;
    }
  }
}

export const TodoStoreInstance = new TodoStore();
