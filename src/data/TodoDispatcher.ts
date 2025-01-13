import { Dispatcher } from "flux";
import { TodoActionTypes } from "./TodoActionTypes";

export const TodoDispatcher = new Dispatcher<TodoActionTypes>();
