import { Container } from "flux/utils";
import { TodoView } from "../views/TodoView";
import { TodoStoreInstance } from "../data/TodoStore";

const getStores = () => {
  return [TodoStoreInstance];
};

const getState = () => ({
  todos: TodoStoreInstance.getState(),
});

export const ConnectedTodoContainer = Container.createFunctional(
  TodoView,
  getStores,
  getState,
);
