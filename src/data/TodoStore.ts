import { ReduceStore } from "flux/utils";
import { TodoDispatcher } from "./TodoDispatcher";
import * as Immutable from "immutable";
import { TodoActionTypeConstants } from "./TodoActionTypeConstants";
import { TodoActionTypes } from "./TodoActionTypes";

interface TodoStoreState {}

class TodoStore extends ReduceStore<TodoStoreState, TodoActionTypes> {
  constructor() {
    super(TodoDispatcher);
  }

  getInitialState() {
    return Immutable.OrderedMap();
  }

  reduce(state: TodoStoreState, action: TodoActionTypes) {
    switch (action.type) {
      case TodoActionTypeConstants.ADD_TODO:
      default:
        return state;
    }
  }
}

export const TodoStoreInstance = new TodoStore();
