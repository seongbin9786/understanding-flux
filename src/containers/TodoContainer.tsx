import { Container } from "flux/utils";
import { TodoView } from "../views/TodoView";
import { TodoStoreInstance } from "../data/TodoStore";
import { TodoActionDispatchers } from "../data/TodoActionDispatchers";
import { TodoDraftStoreInstance } from "../data/TodoDraftStore";

// getStores는 구독할 Store의 목록
// ReduceStore는 상태 변경이 있을 때 자동으로 emitChange를 호출한다고 함
const getStores = () => {
  return [TodoStoreInstance, TodoDraftStoreInstance];
};

const getState = () => ({
  // mapStateToProps와 유사
  todos: TodoStoreInstance.getState(),
  draftText: TodoDraftStoreInstance.getState().draftText,
  // mapDispatchToProps와 유사
  addTodo: TodoActionDispatchers.addTodo,
  deleteTodo: TodoActionDispatchers.deleteTodo,
  toggleTodo: TodoActionDispatchers.toggleTodo,
  updateDraft: TodoActionDispatchers.updateDraft,
});

export const ConnectedTodoContainer = Container.createFunctional(
  TodoView,
  getStores,
  getState,
);
