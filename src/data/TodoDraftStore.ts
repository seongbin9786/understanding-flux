import { ReduceStore } from "flux/utils";
import { TodoDispatcher } from "./TodoDispatcher";
import { TodoActionTypes } from "./TodoActionTypes";
import { TodoActionTypeConstants } from "./TodoActionTypeConstants";

type TodoDraftState = {
  draftText: string;
};

class TodoDraftStore extends ReduceStore<TodoDraftState, TodoActionTypes> {
  constructor() {
    super(TodoDispatcher);
  }

  getInitialState() {
    return {
      draftText: "",
    };
  }

  reduce(state: TodoDraftState, action: TodoActionTypes): TodoDraftState {
    switch (action.type) {
      case TodoActionTypeConstants.UPDATE_DRAFT:
        return {
          ...state,
          draftText: action.text,
        };
      case TodoActionTypeConstants.ADD_TODO:
        return {
          ...state,
          draftText: "",
        };
      default:
        return state;
    }
  }
}

export const TodoDraftStoreInstance = new TodoDraftStore();
